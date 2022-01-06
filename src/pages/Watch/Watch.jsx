import { useParams } from "react-router-dom";

import BackBtn from "../../components/BackBtn";

import "./watch.scss";

export default function Watch() {
  const { id, title } = useParams()

  return (
    <div className="watch">
      <BackBtn />

        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          frameBorder={0}
        >
        </iframe>
    </div>
  );
}