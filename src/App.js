import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Announcement from "./components/announcement/announcement";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/hompage/homepage";
import ShopPage from "./pages/shop/shop";
import ScrollToTop from "./components/scrolltotop/scrolltotop";
import FooterSection from "./components/footer/footer-section";
import AccountPage from "./pages/accountpage/accountpage";
import { authService, createUserProfileDocument } from "./firebase";
import Login from "./components/auth/login/login";
import Register from "./components/auth/register/register";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
import PageOveray from "./pages/page-overay/page-overay";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user-selectors";
import CheckOutPage from "./pages/checkout/checkout";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = authService.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <ScrollToTop>
        <PageOveray />
        <Announcement />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckOutPage}/>
          <Route
            exact
            path="/account"
            render={() =>
              this.props.currentUser ? (
                <AccountPage />
              ) : (
                <Redirect to="/account/login" />
              )
            }
          />
          <Route
            path="/account/login"
            render={() =>
              this.props.currentUser ? <Redirect to="/account" /> : <Login />
            }
          />
          <Route
            path="/account/register"
            render={() =>
              this.props.currentUser ? <Redirect to="/account" /> : <Register />
            }
          />
        </Switch>
        <FooterSection />
      </ScrollToTop>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
