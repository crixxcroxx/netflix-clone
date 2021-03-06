import CardMenu from "../CardMenu";

import { useStoreShows, useStorePersonalList } from "../../zustand/store";
import formatTime from "../../utils/formatTime";
import getYear from "../../utils/getYear";

import "./card.scss";

export default function Card(props) {
  const { index, endpoint, isPersonalList, searchResults } = props

  const shows = useStoreShows(state => state[endpoint])
  const personalList = useStorePersonalList(state => state.saved)
  const show =
    searchResults ||
    (isPersonalList && personalList[index]) ||
    (endpoint && shows[index])

  return (
    <div className="card">
      <div className="card-thumbnail">
        {show.detailed.videos.results[0]
          ? <iframe
              src={`https://www.youtube.com/embed/${show.detailed.videos.results[0].key}?&autoplay=1&controls=0&loop=1`}
              title={show.original_name || show.original_title}
              frameBorder={0}
            />
          : <div>No Preview Available</div>
        }
      </div>

      <div className="card-info">
        <CardMenu id={show.id} show={show} />

        <div>
          <div className="details">
            <span>{
              (show.detailed.runtime && formatTime(show.detailed.runtime)) ||
              (show.detailed.episode_run_time[0] && formatTime(show.detailed.episode_run_time[0]))
            }</span>

            <span>{
              (show.detailed.release_date && getYear(show.detailed.release_date)) ||
              (show.detailed.first_air_date && getYear(show.detailed.first_air_date))
            }</span>
          </div>

          <div className="genre">
            {show.detailed.genres.map(genre =>
              <span key={genre.name}>{genre.name}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
