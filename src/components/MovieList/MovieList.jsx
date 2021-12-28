import { useRef } from "react";

import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlined from '@material-ui/icons/ArrowForwardIosOutlined';

import MovieItem from "../MovieItem";

import carousel from "../../utils/carousel";

import "./movieList.scss";

export default function MovieList(props) {
  const { title, category, index } = props
  const listRef = useRef()

  return (
    <div
      className="movie-list"
      style={{zIndex: index}}
    >
      <span className="list-title">{title || category}</span>

      <div className="list-container">
        <ArrowBackIosOutlined
          className="slider-arrow left"
          onClick={() => carousel(listRef, "left")}
        />

        <div className="list" ref={listRef}>
          <MovieItem index={0} />
          <MovieItem index={1} />
          <MovieItem index={2} />
          <MovieItem index={3} />
          <MovieItem index={4} />
          <MovieItem index={5} />
          <MovieItem index={6} />
          <MovieItem index={7} final />
        </div>

        <ArrowForwardIosOutlined
          className="slider-arrow right"
          onClick={() => carousel(listRef, "right")}
        />
      </div>
    </div>
  );
}