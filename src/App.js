import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import './App.css';

import HomePage from "./pages/homepage/homepage.component"
import ShopPage from './pages/shop/shoppage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';

import Header from './components/header/header.component';


import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
/* import { selectCollectionsForPreview} from './redux/shop/shop.selectors'; *///add to Firebase

import { auth, createUserProfileDocument/* , addCollectionAndItems */ /*add to Firebase*/ } from "./firebase/firebase.util";

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {


    const {setCurrentUser} = this.props


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
        
      } else {
        setCurrentUser( userAuth )
      }
    })
   /*  addCollectionAndItems('collections', collectionsArray.map(({title, items}) => ({title, items}))) *///add to Firebase
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUpPage/>) } />
          <Route exact to="checkout" component={CheckoutPage}/>

        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
 /*  collectionsArray: selectCollectionsForPreview *///add to Firebase
  
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
