import React from "react";
import { Switch, Route } from "react-router-dom";
import Announcement from "./components/announcement/announcement";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/hompage/homepage";
import ShopPage from "./pages/shop/shop";
import ScrollToTop from "./components/scrolltotop/scrolltotop";
import FooterSection from "./components/footer/footer-section";

function App() {
  return (
    <ScrollToTop>
      <Announcement />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
      <FooterSection/>
    </ScrollToTop>
  );
}

export default App;
