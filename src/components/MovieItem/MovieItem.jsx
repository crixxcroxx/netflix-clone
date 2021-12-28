import { useState } from "react";

import PlayArrow from '@material-ui/icons/PlayArrow';
import Add from '@material-ui/icons/Add';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlined from '@material-ui/icons/ThumbDownOutlined';

import "./movieItem.scss";

export default function MovieItem({ index, final }) {
  const [isHovered, setIsHovered] = useState(false);
  let offsetX = final ? 229 : 233

  return (
    <div
      className="movie-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <img src="https://unsplash.it/225/225" alt={`Featured ${index}`} />

      {isHovered &&
        <div
          className="card-hover"
          style={{left: index === 0 ? 69 : index * offsetX}}
        >
          <div className="movie-thumb">
            <video
              src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"}
              autoPlay={true}
              loop
            />
          </div>

          <div className="movie-info">
            <div className="icons">
              <PlayArrow />
              <Add  />
              <ThumbUpAltOutlined  />
              <ThumbDownOutlined  />
            </div>

            <div className="details">
              <span>1hr 45mins</span>
              <span className="age-restriction">+16</span>
              <span>2006</span>
            </div>

            <span className="synopsis">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor augue enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor augue enim
            </span>
          </div>
        </div>
      }
    </div>
  );
}