/*
*map state to props is used when we have to get the data from the store and update the view is like this.state
*map dispatch to props is used to change the store state value of the reducer is like setState()
*/

import React from 'react';
import './App.css';
import { setCurrentUser } from './redux/user/user.actions'
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/Header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';


class App extends React.Component {



  unsubscribeFromAuth = null

  componentDidMount() {
    /*
    */
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })

        })
      }
      // setCurrentUser(userAuth)
      else {
        setCurrentUser(null)
      }

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />

        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

/*
* here dispatch is the function to dispatch the object to dispatch in reducer
*/
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))//here user is payload nd setCurrentUser=(user)=>{}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);