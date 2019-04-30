import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Top = (props) => {
  return (
    <nav role="navigation">
      <Link to="/search"><input type="search" placeholder="Try 'Peak District'" /></Link>
      <img src={props.avatar} alt={props.name} />
    </nav>
  );
};

export default Top;