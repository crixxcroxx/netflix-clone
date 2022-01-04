import { Link } from "react-router-dom";

import ArrowBackOutlined from '@material-ui/icons/ArrowBackOutlined';

import "./backBtn.scss";

export default function BackBtn() {

  return (
    <div className="back-btn">
      <Link to="/">
        <ArrowBackOutlined />
        <span>Home</span>
      </Link>
    </div>
  );
}