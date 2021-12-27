import { useRef } from "react";

import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlined from '@material-ui/icons/ArrowForwardIosOutlined';

import MovieItem from "../MovieItem";

import carousel from "../../utils/carousel";

import "./movieList.scss";

export default function MovieList() {
  const listRef = useRef()

  return (
    <div className="movie-list">
      <span className="list-title">Continue to watch</span>

      <div className="list-container">
        <ArrowBackIosOutlined
          className="slider-arrow left"
          onClick={() => carousel(listRef, "left")}
        />

        <div className="list" ref={listRef}>
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
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
          onClick={() => carousel(listRef, "right")}
        />
      </div>
    </div>
  );
}