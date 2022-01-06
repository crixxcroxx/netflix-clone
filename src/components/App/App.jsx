import { Routes, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../pages/Home";
import MyList from "../../pages/MyList";
import Search from "../../pages/Search";
import Watch from "../../pages/Watch";

export default function App() {
  return (
    <Routes>
      <Route  path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="myList" element={<MyList />} />

        <Route path="watch/:title/:id" element={<Watch />} />

        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
}