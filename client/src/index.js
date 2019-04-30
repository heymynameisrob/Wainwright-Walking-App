import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAEjRXJ1u8U58gWlZyv7PTYwgdlnN3giOY",
  authDomain: "node-api-24f2f.firebaseapp.com",
  databaseURL: "https://node-api-24f2f.firebaseio.com",
  projectId: "node-api-24f2f",
  storageBucket: "node-api-24f2f.appspot.com",
  messagingSenderId: "743563316456"
};
firebase.initializeApp(config);

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
