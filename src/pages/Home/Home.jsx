import Navbar from "../../components/Navbar";
import Billboard from "../../components/Billboard";
import MovieList from "../../components/MovieList";

import "./home.scss";

export default function Home() {
  const titles = [
    "Popular",
    "Continue to watch",
    "Comedy",
    "Asian Drama"
  ]

  return (
    <div className="home">
      <Navbar />
      <Billboard />
      <div className="shows">
        {titles.map((title, idx) =>
          <MovieList
            key={title}
            index={titles.length - idx}
            title={title}
          />
        )}
      </div>
    </div>
  );
}