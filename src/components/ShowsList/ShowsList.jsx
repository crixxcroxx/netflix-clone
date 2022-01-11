import { useEffect } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import ShowPoster from "../ShowPoster";

import { useStoreShows } from "../../zustand/store";

import 'swiper/scss';
import 'swiper/scss/navigation';
import "./showsList.scss";

SwiperCore.use([Navigation]);

export default function ShowsList(props) {
  const { index, title, endpoint } = props

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
            <div className="list-title">{title}</div>

            <Swiper
              spaceBetween={5}
              slidesPerView={4}
              navigation
            >
              {shows.map((show, idx) =>
                <SwiperSlide
                  key={show.id}
                  style={{
                    zIndex: shows.length - 1 !== idx
                      ? shows.length - idx
                      : shows.length
                  }}
                >
                  <ShowPoster
                    index={idx}
                    endpoint={endpoint}
                    isFinal={shows.length - 1 === idx ? true : false}
                  />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
      }
    </>
  );
}