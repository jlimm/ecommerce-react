import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/02.svg";
import CartIcon from "../cart-icon/cart-icon";
import CartSidebar from "../cart-sidebar/cart-sidebar";
import "./header.scss";

const Header = ({ hidden, match }) => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const [isHeaderAtTheTop, setIsHeaderAtTheTop] = useState(true);
  
  const handleScrollToElement = () => {
    let headerPosition = document.querySelector(".header-wrapper");
    
    if (window.scrollY) {
      headerPosition.classList.add("active");
      setIsHeaderAtTheTop(false);
    } else {
      headerPosition.classList.remove("active");
      setIsHeaderAtTheTop(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollToElement, false);
    window.addEventListener("resize", handleResize, false);

    return () => {
      window.removeEventListener("scroll", handleScrollToElement, false);
      window.removeEventListener("resize", handleResize, false);
    };
  }, []);

  const handleResize = () => {
    setViewWidth(window.innerWidth);
  };

  return (
    <>
      {<CartSidebar />}
      <div className="header-wrapper" style={{backgroundColor: match.isExact && isHeaderAtTheTop? "transparent":"white"}}>
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
            <CartIcon />
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
    </>
  );
};

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden,
});

export default withRouter(connect(mapStateToProps)(Header));
