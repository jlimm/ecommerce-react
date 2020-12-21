import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Announcement from "./components/announcement/announcement";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/hompage/homepage";
import ShopPage from "./pages/shop/shop";
import ScrollToTop from "./components/scrolltotop/scrolltotop";
import FooterSection from "./components/footer/footer-section";
import AccountPage from "./pages/accountpage/accountpage";
import { authService } from "./firebase";
import Login from "./components/auth/login/login";
import Register from "./components/auth/register/register";

function App() {
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
        console.log("setuser null!");
      }
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  return (
    <ScrollToTop>
      <Announcement />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/account">
          <AccountPage
            refreshUser={refreshUser}
            userObj={userObj}
            isLoggedIn={Boolean(userObj)}
          />
        </Route>
        <Route path="/account/login" component={Login} />
        <Route path="/account/register"  >
          <Register refreshUser={refreshUser} userObj={userObj}/>
        </Route>

      </Switch>
      <FooterSection />
    </ScrollToTop>
  );
}

export default App;
