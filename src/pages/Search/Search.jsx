import { useRef, useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ShowPoster from "../../components/ShowPoster";

import { useStoreShows } from "../../zustand/store";

import "./search.scss";

export default function Search() {
  const [searchField, setSearchField] = useState("");
  const searchRef = useRef()

  const db = useStoreShows(state => state.trending)

  const filteredShows = db.filter(show => {
    return (
      (show.original_title &&
        show
          .original_title
          .toLowerCase()
          .includes(searchField.toLowerCase())
      ) ||
      (show.original_name &&
        show
          .original_name
          .toLowerCase()
          .includes(searchField.toLowerCase())
      )
    )
  })

  const handleChange = () => {
    setSearchField(searchRef.current.value)
  }

  return (
    <>
      <Navbar />

      <div className="search">
        <input
          ref={searchRef}
          onChange={handleChange}
          type="text"
          placeholder="Search Title..."
        />

        <div className="search-list">
          {searchField.length > 0 && filteredShows.map((show, idx) =>
            <ShowPoster
              key={show.id}
              index={idx}
              searchResults={filteredShows}
              isPersonalList
            />
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}