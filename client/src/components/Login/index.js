import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

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
      <div>
        <h1>Login</h1>
        <button onClick={this.loginWithGoogle}>Login</button>
      </div>
    );
  }
}

export default Login;