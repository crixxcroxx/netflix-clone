import { useRef, useEffect } from "react";

import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlined from '@material-ui/icons/ArrowForwardIosOutlined';

import ShowPoster from "../ShowPoster";

import { useStoreShows } from "../../zustand/store";
import carousel from "../../utils/carousel";

import "./showsList.scss";

export default function ShowsList(props) {
  const { index, title, endpoint } = props
  const listRef = useRef()

  const fetchShows = useStoreShows(state => state.fetchShows)

  let shows = useStoreShows(state => state[endpoint])

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    fetchShows({ signal }, endpoint)

    return () => controller.abort()
  }, [endpoint, fetchShows]);

  return (
    <>
      {shows.length === 0
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
                  <ShowPoster
                    key={show.id}
                    index={idx}
                    endpoint={endpoint}
                    isFinal={shows.length - 1 === idx ? true : false}
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

