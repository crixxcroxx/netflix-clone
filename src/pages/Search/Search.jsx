import { useRef, useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ShowPoster from "../../components/ShowPoster";

import { useStoreShows } from "../../zustand/store";
import getUniqueFromArray from "../../utils/getUniqueFromArray";

import "./search.scss";

export default function Search() {
  const [searchField, setSearchField] = useState("");
  const searchRef = useRef()

  const { trending, popular, tvShows } = useStoreShows(state => state)
  const allShows = [ ...trending, ...popular, ...tvShows ]
  const db = getUniqueFromArray(allShows, "id")

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
    <div className="search">
      <Navbar />

      <div className="search-wrapper">
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
    </div>
  );
}