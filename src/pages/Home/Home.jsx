import Navbar from "../../components/Navbar";
import Billboard from "../../components/Billboard";
import ShowsList from "../../components/ShowsList";
import Footer from "../../components/Footer";

import { endpoints } from "../../assets/data";

import "./home.scss";

export default function Home() {
  const keys = Object.keys(endpoints)

  return (
    <div className="home">
      <Navbar />
      <Billboard />
      <div className="shows">
          <ShowsList
            key={31215}
            index={1}
            title={endpoints[keys[2]].title}
            endpoint={keys[2]}
          />
      </div>
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