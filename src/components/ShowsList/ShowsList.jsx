import { useRef, useEffect } from "react";

import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlined from '@material-ui/icons/ArrowForwardIosOutlined';

import ShowCard from "../ShowCard";

import { useStoreShows } from "../../zustand/store";
import carousel from "../../utils/carousel";

import "./showsList.scss";

export default function ShowsList(props) {
  const { index, title, endpoint } = props
  const listRef = useRef()

  const {
    isLoading,
    fetchShows,
    resetLoading
  } = useStoreShows(state => state)

  let shows = useStoreShows(state => state[endpoint])

  useEffect(() => {
    fetchShows(endpoint)

    return () => resetLoading()
  }, [endpoint, fetchShows, resetLoading]);

  return (
    <>
      {isLoading
        ? <div>Loading</div>
        : <div
            className="shows-list"
            style={{zIndex: index}}
          >
            <span className="list-title">{title}</span>

            <div className="list-container">
              <ArrowBackIosOutlined
                className="slider-arrow left"
                onClick={() => carousel(listRef, "left")}
              />

              <div className="list" ref={listRef}>
                {shows.map((show, idx) =>
                  <ShowCard
                    key={show.id}
                    index={idx}
                    endpoint={endpoint}
                    final={shows.length - 1 === idx ? true : false}
                  />
                )}
              </div>

              <ArrowForwardIosOutlined
                className="slider-arrow right"
                onClick={() => carousel(listRef, "right")}
              />
            </div>
          </div>
      }
    </>
  );
}