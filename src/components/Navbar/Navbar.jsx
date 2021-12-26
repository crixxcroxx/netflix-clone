import { useState } from "react";

import Search from '@material-ui/icons/Search';
import Notifications from '@material-ui/icons/Notifications';
import AccountBox from '@material-ui/icons/AccountBox';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

import "./navbar.scss";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)

    return () => window.onscroll = null
  }

  return (
    <div className={`navbar ${isScrolled && "scrolled"}`}>
      <div className="nav-links">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />

        <span>Homepage</span>
        <span>Series</span>
        <span>Movies</span>
        <span>New & Popular</span>
        <span>My List</span>
      </div>

      <div className="nav-right">
        <Search />
        <span>Kids</span>
        <Notifications />
        <AccountBox />

        <div className="account">
          <ArrowDropDown />
          <div className="account-dropdown">
            <span>Settings</span>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}