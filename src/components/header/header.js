import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/02.svg";
import CartIcon from "../cart-icon/cart-icon";
import CartSidebar from "../cart-sidebar/cart-sidebar";
import "./header.scss";
import {
  HeaderContainer,
  HeaderFlexItem,
  HorizontalListItem,
  LogoContainer,
} from "./header.styles";

const Header = ({ hidden, match }) => {
  const ref = useRef();
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const [isHeaderAtTheTop, setIsHeaderAtTheTop] = useState(true);

  useEffect(() => {
    console.log(ref);
    window.addEventListener("scroll", handleScrollToElement, false);
    window.addEventListener("resize", handleResize, false);

    return () => {
      window.removeEventListener("scroll", handleScrollToElement, false);
      window.removeEventListener("resize", handleResize, false);
    };
  }, []);

  const handleScrollToElement = () => {
    if (window.scrollY) {
      setIsHeaderAtTheTop(false);
    } else {
      setIsHeaderAtTheTop(true);
    }
  };

  const handleResize = () => {
    setViewWidth(window.innerWidth);
  };

  return (
    <>
      {<CartSidebar />}
      <HeaderContainer ref={ref}
        style={{
          backgroundColor:
            match.isExact && isHeaderAtTheTop ? "transparent" : "white",
          top: isHeaderAtTheTop ? "" : "0",
        }} id="Header-Container"
      >
        {viewWidth > 500 ? (
          <HeaderFlexItem>
            <HorizontalListItem to="/shop">Shop</HorizontalListItem>
            <HorizontalListItem to="/shop">Learn</HorizontalListItem>
            <HorizontalListItem to="/shop">Press</HorizontalListItem>
            <HorizontalListItem to="/shop">More</HorizontalListItem>
          </HeaderFlexItem>
        ) : (
          <HeaderFlexItem>
            <HorizontalListItem to="/shop">
              <button className="nav-btn open-btn">
                <i className="fas fa-bars"></i>
              </button>
            </HorizontalListItem>
          </HeaderFlexItem>
        )}
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        {viewWidth > 500 ? (
          <HeaderFlexItem>
            <HorizontalListItem to="/account">Account</HorizontalListItem>
            <HorizontalListItem to="/shop">Search</HorizontalListItem>
            <CartIcon />
          </HeaderFlexItem>
        ) : (
          <HeaderFlexItem>
            <HorizontalListItem to="/shop">
              <button className="nav-btn open-btn">
                <i className="fas fa-shopping-cart"></i>
              </button>
            </HorizontalListItem>
          </HeaderFlexItem>
        )}
      </HeaderContainer>
    </>
  );
};

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden,
});

export default withRouter(connect(mapStateToProps)(Header));
