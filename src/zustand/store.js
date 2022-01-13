import axios from "axios";
import create from "zustand";
import produce from "immer";

import { endpoints } from "../assets/data";

const BASE_URL = "https://api.themoviedb.org/3"
const KEY = "cfd5046336aae11cf3128bac12f9c60c"

// const IMG_URL = "https://image.tmdb.org/t/p/w1280" //w780 //w500

export const useStoreShows = create((set, get) => ({
  trending: [],
  popular: [],
  tvShows: [],
  fetchShows: (signal, endpoint) => {
    let url = `${BASE_URL}/${endpoints[endpoint].path}?api_key=${KEY}&language=en-US&page=1`
    let data = get()[endpoint]

    if(data.length === 0)
    axios
      .get(url, signal)
      .then(res => {
        let shows = res.data.results
        let mediaType = endpoint === "tvShows" ? "tv" : "movie"

        // get detailed info
        axios
          .all(shows.map(show =>
            axios
              .get(
                `${BASE_URL}/${mediaType}/${show.id}?api_key=${KEY}&language=en-US&append_to_response=videos`,
                signal
              )
              .catch(err => console.log(err))
          ))
          .then(axios.spread(function(...resp) {
            resp.map((s, idx) => shows[idx].detailed = resp[idx].data)

            set({ [endpoint]: shows })
          }))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }
}))

export const useStorePersonalList = create((set, get) => ({
  liked: [],
  disliked: [],
  saved: [],
  addToList: (key, id, item) => {
    set(
      produce((draft) => {
        const showIndex = draft[key].findIndex(el => el.id === item.id);
        if(showIndex === -1) draft[key].unshift(item);
      })
    )
  },
  removeFromList: (key, id) => {
    set(
      produce((draft) => {
        const showIndex = draft[key].findIndex(el => el.id === id);
        draft[key].splice(showIndex, 1);
      })
    )
  },
}))