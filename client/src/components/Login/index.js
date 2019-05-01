import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import GLogo from '../../static/Google_Logo.svg';
import './style.css';

const provider = new firebase.auth.GoogleAuthProvider();

class Login extends Component {
  loginWithGoogle = () => {
    firebase.auth().signInWithRedirect(provider)
      .then(() => {
        return <Redirect to="/dashboard" />
      })
      .catch(err => { console.log(err.message) });
  }
  render() {
    return (
      <div style={{ width: '100%' }}>
        <button className="g-button" onClick={this.loginWithGoogle}>
          <img src={GLogo} alt="" />
          <span>Sign in with Google</span>
        </button>
      </div>
    );
  }
}

export default Login;