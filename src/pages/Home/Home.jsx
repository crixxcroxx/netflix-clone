import Featured from "../../components/Featured";
import MovieList from "../../components/MovieList";

import "./home.scss";

export default function Home() {

  return (
    <div className="home">
      <Featured />
      <MovieList />
      <MovieList />
    </div>
  );
}