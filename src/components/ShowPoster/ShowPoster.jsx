import { useState } from "react";

import Card from "../Card";

import { useStoreShows, useStorePersonalList } from "../../zustand/store";

import "./showPoster.scss";

export default function ShowPoster(props) {
  const {
    index,
    isFinal,
    endpoint,
    isPersonalList,
    searchResults
  } = props
  const BASE_URL = "https://image.tmdb.org/t/p/w500"

  const [isHovered, setIsHovered] = useState(false);

  const shows = useStoreShows(state => state[endpoint])
  const personalList = useStorePersonalList(state => state.saved)
  const show =
    (searchResults && searchResults[index]) ||
    (isPersonalList && personalList[index]) ||
    (endpoint && shows[index])

  return (
    <>
    {show &&
    <div
      className="show-poster"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
//       ref={posterRef}
    >
      <img
        className="show-poster-img"
        src={`${BASE_URL}${show.backdrop_path || show.poster_path}`}
        alt={show.original_name || show.original_title}
      />

      {isHovered &&
        <div className={`poster-hover ${isFinal && "last"}`}>
          <Card
            index={index}
            endpoint={endpoint}
            isPersonalList={isPersonalList}
            searchResults={show}
          />
        </div>
      }
    </div>
    }
    </>
  );
}