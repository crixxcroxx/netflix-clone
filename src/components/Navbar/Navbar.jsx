import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Search from '@material-ui/icons/Search';
import Notifications from '@material-ui/icons/Notifications';
import AccountBox from '@material-ui/icons/AccountBox';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

import "./navbar.scss";

export default function Navbar({ logoBtn }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true)

      return () => window.onscroll = null
    }

    return () => window.removeEventListener("onscroll", setIsScrolled(false), true)
  }, []);

  return (
    <div className={`navbar ${isScrolled && "scrolled"}`}>
      <div className="nav-links">
        <Link to="/">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
        </Link>

        {!logoBtn &&
          <div className="nav-left">
            <span>Series</span>
            <span>Movies</span>
            <span>New & Popular</span>
            <Link to="/myList">My List</Link>
          </div>
        }
      </div>

      <div className="nav-right">
        {logoBtn
          ? <button className="sign-in-btn">Sign In</button>
          : <>
              <Link to="/search">
                <Search />
              </Link>
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
            </>
        }
      </div>
    </div>
  );
}