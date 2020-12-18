import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/02.svg";
import "./header.scss";

const Header = () => (
  <div className="header-wrapper">
    <div className="foptions">
      <Link className="foption" to="/shop">
        Move
      </Link>
    </div>
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    {
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
      </div>
    }
  </div>
);

export default Header;
