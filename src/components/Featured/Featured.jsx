import PlayArrow from '@material-ui/icons/PlayArrow';
import InfoOutlined from '@material-ui/icons/InfoOutlined';

import Category from "../Category";

import "./featured.scss";

export default function Featured() {

  return (
    <div className="featured">
      <div className="featured-img">
        <img src="https://unsplash.it/900/500" alt="Featured" />
      </div>

      <Category type="movie" />

      <div className="featured-info">
        <img src="https://unsplash.it/400/150" alt="Inf" />

        <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor augue enim, sit amet posuere eros malesuada non. Ut eu luctus massa. Morbi scelerisque eros. </span>

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
      </div>
    </div>
  );
}