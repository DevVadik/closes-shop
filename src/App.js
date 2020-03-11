import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";

import Header from "./components/header/header.component";

import { selectCurrentUser } from "./redux/user/user.selector";

import { checkUserSecssion } from "./redux/user/user.actions";

const App = ({ checkUserSecssion, currentUser }) => {
  useEffect(() => {
    console.log("useEffect");
    checkUserSecssion();
  }, [checkUserSecssion]);

  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/shop' component={ShopPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
          }
        />
        <Route exact to='checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSecssion: () => dispatch(checkUserSecssion())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
