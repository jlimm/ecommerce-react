import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/02.svg";
import "./header.scss";

class Header extends React.Component {
  handleScrollToElement() {
    let headerPosition = document.querySelector(".header-wrapper");
    if (window.scrollY) {
      headerPosition.classList.add("active");
    } else {
      headerPosition.classList.remove("active");
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollToElement);
  }
  render() {
    return (
      <div className="header-wrapper">
        <div className="foptions">
          <Link className="foption" to="/shop">
            <button className="nav-btn open-btn">
              <i className="fas fa-bars"></i>
            </button>
          </Link>
        </div>
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        {
          <div className="options">
            <Link className="option" to="/shop">
              <button className="nav-btn open-btn">
                <i className="fas fa-shopping-cart"></i>
              </button>
            </Link>
          </div>
        }
      </div>
    );
  }
}

export default Header;
