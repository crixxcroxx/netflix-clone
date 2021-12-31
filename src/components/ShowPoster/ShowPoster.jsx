import { useState } from "react";

import Card from "../Card";

import { useStoreShows } from "../../zustand/store";

import "./showPoster.scss";

export default function ShowPoster(props) {
  const { index, endpoint, final } = props

  const [isHovered, setIsHovered] = useState(false);
  let offsetX = final ? 232 : 233

  const shows = useStoreShows(state => state[endpoint])
  const show = shows[index]

  return (
    <div
      className="show-poster"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${show.backdrop_path || show.poster_path}`}
        alt={show.original_name || show.original_title}
      />

      {isHovered &&
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