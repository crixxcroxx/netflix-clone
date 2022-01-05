import { useState, useRef } from "react";

import Card from "../Card";

import { useStoreShows, useStorePersonalList } from "../../zustand/store";
import getHoverOffset from "../../utils/getHoverOffset";

import "./showPoster.scss";

export default function ShowPoster(props) {
  const { index, endpoint, isFinal, isPersonalList } = props
  const BASE_URL = "https://image.tmdb.org/t/p/w500"

  const [isHovered, setIsHovered] = useState(false);
  const posterRef = useRef()

  const { offsetX, offsetY } = getHoverOffset(index, posterRef, isFinal, isPersonalList)

  const shows = useStoreShows(state => state[endpoint])
  const personalList = useStorePersonalList(state => state.saved)
  const show = isPersonalList
    ? (personalList && personalList[index])
    : (shows && shows[index])

  return (
    <>
    {show &&
    <div
      className="show-poster"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={posterRef}
    >
      <img
        src={`${BASE_URL}${show.backdrop_path || show.poster_path}`}
        alt={show.original_name || show.original_title}
      />

      {isHovered &&
        <div
          className="poster-hover"
          style={{left: offsetX, top: offsetY}}
        >
          <Card index={index} endpoint={endpoint} isPersonalList={isPersonalList} />
        </div>
      }
    </div>
    }
    </>
  );
}