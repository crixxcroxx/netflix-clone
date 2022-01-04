import { Link } from "react-router-dom";

import ShowPoster from "../../components/ShowPoster";
import BackBtn from "../../components/BackBtn";

import { useStorePersonalList } from "../../zustand/store";

import "./myList.scss";

export default function MyList() {
  const saved = useStorePersonalList(state => state.saved)

  return (
    <div className="my-list">
      <BackBtn />

      <div className="title">My List</div>

      <div className="list">
        {saved && saved.map((show, idx) =>
          <ShowPoster key={show.id} index={idx} isPersonalList />
        )}
      </div>
    </div>
  );
}