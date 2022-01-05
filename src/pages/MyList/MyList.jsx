import { Link } from "react-router-dom";

import ShowPoster from "../../components/ShowPoster";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useStorePersonalList } from "../../zustand/store";

import "./myList.scss";

export default function MyList() {
  const saved = useStorePersonalList(state => state.saved)

  return (
    <>
      <Navbar />

      <div className="my-list">
        <div className="title">My List</div>

        <div className="list">
          {saved && saved.map((show, idx) =>
            <ShowPoster key={show.id} index={idx} isPersonalList />
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}