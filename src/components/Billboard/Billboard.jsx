import { useNavigate } from "react-router-dom";

import PlayArrow from '@material-ui/icons/PlayArrow';
import InfoOutlined from '@material-ui/icons/InfoOutlined';

import Category from "../Category";

import { useStoreShows } from "../../zustand/store.js";

import "./billboard.scss";

export default function Billboard({ category }) {
  const trending = useStoreShows(state => state.trending)
  const featured = trending.length > 0 && trending[Math.floor(Math.random() * (trending.length - 1))]
  const navigate = useNavigate()

  return (
    <div className="billboard">
      {trending.length > 0 &&
        <>
          <div className="billboard-img">
            <img
              src={`https://image.tmdb.org/t/p/w1280${featured.backdrop_path || featured.poster_path}`}
              alt={featured.original_name || featured.original_title}
            />
          </div>

          <>
            {category &&
              <Category type={category} />
            }
          </>

          <div className="shadow"></div>

          <div className="billboard-info">
            <header>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg"
                alt="Logo"
              />
              <p>Movie</p>
            </header>

            <h1 className="title">
              {featured.original_name || featured.original_title}
            </h1>

            <div className="btn-grp">
              <button
                onClick={() => navigate(`/watch/${featured.original_name || featured.original_title}/${featured.detailed.videos.results[0].key}`)}
              >
                <PlayArrow />
                <span>Play</span>
              </button>

              <button>
                <InfoOutlined />
                <span>More Info</span>
              </button>
            </div>

            <span className="synopsis">{
              featured.overview.length > 250
                ? featured.overview.substring(0, 250) + "..."
                : featured.overview
            }</span>
          </div>
        </>
      }
    </div>
  );
}