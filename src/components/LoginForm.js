import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import './LoginForm.css'
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Button } from 'react-bootstrap';
import firebaseConfig from '../config'
// const firebaseConfig = {
//   apiKey: "AIzaSyCZYkIS8lIRGaH_OnQiSNzjHKteaVW2S7c",
//   authDomain: "miniproject-cf0cb.firebaseapp.com",
//   databaseURL: "https://miniproject-cf0cb.firebaseio.com",
//   projectId: "miniproject-cf0cb",
//   storageBucket: "miniproject-cf0cb.appspot.com",
//   messagingSenderId: "261176928598",
//   appId: "1:261176928598:web:df2e8a3913b019f6ad4ef7",
//   measurementId: "G-VSJ5DJXQ8V"
// };

firebase.initializeApp(firebaseConfig);

const uiConfig = {
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

const LoginForm = (props) => {

  const [isSignedIn, setIsSignedIn] = useState(false)

  const unregisterAuthObserver = () => {
    firebase.auth().onAuthStateChanged(
      (user) => setIsSignedIn(!!user));
  }

  useEffect(() => {
    unregisterAuthObserver();

    return () => {
    unregisterAuthObserver();
    }
  }, []);

  if (!isSignedIn) {
    return (
      <div className="container">
        <h1>Medicine Shop</h1>
        <p>Please sign-in</p>

        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        <Button variant="primary" onClick={() => props.history.push('/home')}>Guest</Button>
      </div>
    )
  }
  else {
    return (
      <div className="container">
        <h1>Hero's Pharmacy</h1>
        <h2>Medicine Shop</h2>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in</p>
        <img id="photo" className="pic" src={firebase.auth().currentUser.photoURL} />
        <div style={{flexDirection:'row' }}>
          <Button variant="primary" style={{margin:10}} onClick={() => props.history.push('/home')}>Home</Button>
        <Button variant="warning" onClick={() => firebase.auth().signOut()}>Sign-out</Button>
        <p>Please go to HomePage</p>
        </div>
        
      </div>
    );
  }

}

export default LoginForm;







