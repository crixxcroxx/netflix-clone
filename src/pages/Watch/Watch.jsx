import ArrowBackOutlined from '@material-ui/icons/ArrowBackOutlined';

import "./watch.scss";

export default function Watch({ src }) {

  return (
    <div className="watch">
      <div className="back-btn">
        <ArrowBackOutlined />
        <span>Home</span>
      </div>

       <video src={src} progress controls />
    </div>
  );
}