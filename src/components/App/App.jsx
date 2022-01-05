import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import MyList from "../../pages/MyList";
import Watch from "../../pages/Watch";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="my_list" element={<MyList />} />
      <Route path="watch">
        <Route index path=":id" element={<Watch />} />
      </Route>
    </Routes>
  );
}