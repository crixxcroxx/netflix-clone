import { useState } from "react";

import Card from "../Card";

import { useStoreShows, useStorePersonalList } from "../../zustand/store";

import "./showPoster.scss";

export default function ShowPoster(props) {
  const { index, endpoint, final, isPersonalList } = props
  const BASE_URL = "https://image.tmdb.org/t/p/w500"

  const [isHovered, setIsHovered] = useState(false);
  let offsetX = final ? 232 : 233

  const shows = useStoreShows(state => state[endpoint])
  const personalList = useStorePersonalList(state => state.saved)
  const show = isPersonalList
    ? (personalList && personalList[index])
    : (shows && shows[index])

  return (
    <div
      className={`show-poster ${isPersonalList ? "portrait" : "landscape"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isPersonalList
          ? `${BASE_URL}${show.poster_path || show.backdrop_path}`
          : `${BASE_URL}${show.backdrop_path || show.poster_path}`
        }
        alt={show.original_name || show.original_title}
      />

      {isHovered && !isPersonalList &&
        <div
          className="poster-hover"
          style={{left: index === 0 ? 69 : index * offsetX}}
        >
          <Card index={index} endpoint={endpoint} />
        </div>
      }
    </div>
  );
}