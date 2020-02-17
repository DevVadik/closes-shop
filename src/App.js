import React from 'react';
import { Route, Switch } from 'react-router-dom';


import './App.css';

import HomePage from "./pages/homepage/homepage.component"
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';

import { auth } from "./firebase/firebase.util"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currntUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currntUser: user})
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currntUser={this.state.currntUser}/>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />

        </Switch>
      </div>
    );
  }
}

export default App;
