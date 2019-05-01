import React from 'react';
import Loading from '../../components/Loading';
import Login from '../../components/Login';
import './style.css';

const Home = () => {
  return (
    <div id="landing">
      <span className="emoji">🌲</span>
      <h1>Wainwright (Beta)</h1>
      <p>Discover and explore beautiful British walks</p>
      <Login />
      <small>By signing up to Wainwright, you agree to our terms of service</small>
    </div>
  );
};

export default Home;