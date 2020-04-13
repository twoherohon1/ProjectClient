import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const firebaseConfig = {
    apiKey: "AIzaSyDq-5ifSogscSWdRcqorSLbmKEBZKZ3_IE",
    authDomain: "authen-6c28d.firebaseapp.com",
    databaseURL: "https://authen-6c28d.firebaseio.com",
    projectId: "authen-6c28d",
    storageBucket: "authen-6c28d.appspot.com",
    messagingSenderId: "326880503773",
    appId: "1:326880503773:web:d4a82b9a0dbc01462a3834",
    measurementId: "G-H20XVGTP3X"
};

firebase.initializeApp(firebaseConfig);

class LoginForm extends Component {

  state = {
    isSignedIn: false 
  };

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div className="container">
          <h1>Medicine Shop</h1>
          <p>Please sign-in</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div className="container">
        <h1>Medicine Shop</h1>
        <h1>Can Buy Price Member</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in</p>
          <img id="photo" className="pic" src={firebase.auth().currentUser.photoURL}/>
        <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
      </div>
    );
  }
}

export default LoginForm;







