import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/02.svg";
import "./header.scss";

const Header = () => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  const handleScrollToElement = () => {
    let headerPosition = document.querySelector(".header-wrapper");
    if (window.scrollY) {
      headerPosition.classList.add("active");
    } else {
      headerPosition.classList.remove("active");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollToElement, false);
    window.addEventListener("resize", handleResize, false);
  });

  const handleResize = () => {
    setViewWidth(window.innerWidth);
  };

  return (
    <div className="header-wrapper">
      {viewWidth > 500 ? (
        <div className="foptions">
          <Link className="foption" to="/shop">
            Shop
          </Link>
          <Link className="foption" to="/shop">
            Learn
          </Link>
          <Link className="foption" to="/shop">
            Press
          </Link>
          <Link className="foption" to="/shop">
            More
          </Link>
        </div>
      ) : (
        <div className="foptions">
          <Link className="foption" to="/shop">
            <button className="nav-btn open-btn">
              <i className="fas fa-bars"></i>
            </button>
          </Link>
        </div>
      )}

      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      {viewWidth > 500 ? (
        <div className="options">
          <Link className="option" to="/account">
            Account
          </Link>
          <Link className="option" to="/shop">
            Search
          </Link>
          <Link className="option" to="/shop">
            Cart
          </Link>
        </div>
      ) : (
        <div className="options">
          <Link className="option" to="/shop">
            <button className="nav-btn open-btn">
              <i className="fas fa-shopping-cart"></i>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
