import Navbar from "../../components/Navbar";
import Billboard from "../../components/Billboard";
import ShowsList from "../../components/ShowsList";
import CarouselBox from "../../components/CarouselBox";
import Footer from "../../components/Footer";

import { endpoints } from "../../assets/data";

export default function Home() {
  const keys = Object.keys(endpoints)

  return (
    <div className="home">
      <Navbar />

      <Billboard />

      <CarouselBox>
        {keys.map((title, idx) =>
          <ShowsList
            key={title}
            index={keys.length - idx}
            title={endpoints[keys[idx]].title}
            endpoint={keys[idx]}
          />
        )}
      </CarouselBox>

      <Footer />
    </div>
  );
}
