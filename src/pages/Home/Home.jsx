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
        <ShowsList
          key={31215}
          index={1}
          title={endpoints[keys[0]].title}
          endpoint={keys[0]}
        />
      </CarouselBox>

      <Footer />
    </div>
  );
}

// {keys.map((title, idx) =>
//           <ShowsList
//             key={title}
//             index={keys.length - idx}
//             title={endpoints[keys[idx]].title}
//             endpoint={keys[idx]}
//           />
//         )}