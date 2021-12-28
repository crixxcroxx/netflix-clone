import PlayArrow from '@material-ui/icons/PlayArrow';
import InfoOutlined from '@material-ui/icons/InfoOutlined';

import Category from "../Category";

import toProperName from "../../utils/toProperName";

import "./billboard.scss";

export default function Billboard() {
  const category = "movie"

  return (
    <div className="billboard">
      <div className="billboard-img">
        <img src="https://unsplash.it/900/500" alt="Billboard" />
      </div>

      <Category type={category} />

      <div className="billboard-info">
        <header>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg" alt="Logo"/>
          <p>{toProperName(category)}</p>
        </header>

        <h1 className="title">The Haunting of Hill House</h1>

        <div className="btn-grp">
          <button>
            <PlayArrow />
             <span>Play</span>
          </button>

          <button>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>

        <span className="synopsis"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor augue enim, sit amet posuere eros malesuada non. Ut eu luctus massa. Morbi scelerisque eros. </span>
      </div>
    </div>
  );
}