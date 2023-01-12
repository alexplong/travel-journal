/** @format */

import React from "react";
import globeIcon from "../images/globe-icon.png";

function Header() {
  return (
    <header>
      <img alt="icon" src={globeIcon} className="header--icon" />
      <h3 className="header--title">my travel journal</h3>
    </header>
  );
}

export default Header;
