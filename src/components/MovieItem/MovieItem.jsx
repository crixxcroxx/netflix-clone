import { useState } from "react";

import PlayArrow from '@material-ui/icons/PlayArrow';
import Add from '@material-ui/icons/Add';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlined from '@material-ui/icons/ThumbDownOutlined';

import "./movieItem.scss";

export default function MovieItem({ index, final }) {
  const [isHovered, setIsHovered] = useState(false);
  let margin = final && index !== 0 ? "-4.4rem" : "1rem"

  return (
    <div
      className="movie-item"
      style={{marginLeft: isHovered && margin}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="movie-thumb">
        {isHovered
          ? <video src={"/"} autoPlay={true} loop />
          : <img src="https://unsplash.it/225/225" alt={`Featured ${index}`} />
        }
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor augue enim.
        </span>
      </div>
    </div>
  );
}