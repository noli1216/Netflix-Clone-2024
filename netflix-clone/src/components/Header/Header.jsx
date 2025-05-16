import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/Image/Netflix_Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left">
          <img src={Logo} alt="Netflix Logo" />

          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className="header-right">
          <ul className="icons">
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
