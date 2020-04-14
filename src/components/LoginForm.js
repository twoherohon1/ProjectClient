import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import './LoginForm.css'
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Button } from 'react-bootstrap';

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
        <h1>Medicine Shop</h1>
        <h1>Can Buy Price Member</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in</p>
        <img id="photo" className="pic" src={firebase.auth().currentUser.photoURL} />
        <div style={{flexDirection:'row' }}>
          <Button variant="primary" style={{margin:10}} onClick={() => props.history.push('/home')}>Home</Button>
        <Button variant="warning" onClick={() => firebase.auth().signOut()}>Sign-out</Button>
        </div>
        
      </div>
    );
  }

}

export default LoginForm;







