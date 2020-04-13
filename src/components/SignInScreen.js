// React core
import React, { Component } from 'react';

// Firebase.
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Styles
import './SignInScreen.css'; // This uses CSS modules.

// Initialize Firebase
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

// Instantiate a Firebase app.
firebase.initializeApp(firebaseConfig);

class SignInScreen extends Component {

  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google , Facebook , Etc as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccess: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div className="container">
          <h1>Medicine Shop</h1>
          <h1>Please sign-in</h1>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div className="container">
        <h1>Pharmacy</h1>
        <h1>Store</h1>
        <p>Welcome to shop {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
          <img id="photo" className="pic" src={firebase.auth().currentUser.photoURL}/>
        <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
      </div>
    );
  }
}

export default SignInScreen;