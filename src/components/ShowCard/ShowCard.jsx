import { useState } from "react";

import PlayArrow from '@material-ui/icons/PlayArrow';
import Add from '@material-ui/icons/Add';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlined from '@material-ui/icons/ThumbDownOutlined';

import { useStoreShows } from "../../zustand/store";
import formatTime from "../../utils/formatTime";
import getYear from "../../utils/getYear";

import "./showCard.scss";

export default function ShowCard(props) {
  const { index, endpoint, final } = props
  const [isHovered, setIsHovered] = useState(false);
  let offsetX = final ? 232 : 233

  const shows = useStoreShows(state => state[endpoint])
  const show = shows[index]

  return (
    <div
      className="show-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <img
        src={`https://image.tmdb.org/t/p/w500${show.backdrop_path || show.poster_path}`}
        alt={show.original_name || show.original_title}
      />

      {isHovered &&
        <div
          className="card-hover"
          style={{left: index === 0 ? 69 : index * offsetX}}
        >
          <div className="show-thumbnail">
            {show.detailed.videos.results[0]
              ? <iframe
                  src={`https://www.youtube.com/embed/${show.detailed.videos.results[0].key}?&autoplay=1`}
                  title={show.original_name || show.original_title}
                  frameBorder={0}
                  controls={0}
                  loop={1}
                />
              : <div>No Video Available</div>
            }
          </div>

          <div className="show-info">
            <div className="icons">
              <PlayArrow />
              <Add  />
              <ThumbUpAltOutlined  />
              <ThumbDownOutlined  />
            </div>

            <div className="details">
              <span>{
                (show.detailed.runtime && formatTime(show.detailed.runtime)) ||
                (show.detailed.episode_run_time[0] && formatTime(show.detailed.episode_run_time[0]))
              }</span>
              <span className="age-restriction">+16</span>
              <span>{
                (show.detailed.release_date && getYear(show.detailed.release_date)) ||
                (show.detailed.first_air_date && getYear(show.detailed.first_air_date))
              }</span>
            </div>

            <span className="synopsis">{
              show.overview.length > 200
                ? show.overview.substring(0, 200) + "..."
                : show.overview
            }</span>
          </div>
        </div>
      }
    </div>
  );
}