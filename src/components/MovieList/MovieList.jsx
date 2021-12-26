import { useState, useRef } from "react";

import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlined from '@material-ui/icons/ArrowForwardIosOutlined';

import MovieItem from "../MovieItem";

import "./movieList.scss";

export default function MovieList() {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef()

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x

    if(direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1)
      listRef.current.style.transform = `translateX(${225 + (distance - 16)}px)`
    } else if(direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-225 + (distance - 16)}px)`
    }
  }

  return (
    <div className="movie-list">
      <span className="list-title">Continue to watch</span>

      <div className="list-container">
        <ArrowBackIosOutlined
          className="slider-arrow left"
          onClick={() => handleClick("left")}
        />

        <div className="list" ref={listRef}>
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
        </div>

        <ArrowForwardIosOutlined
          className="slider-arrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}