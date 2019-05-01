import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Top = (props) => {
  return (
    <nav role="navigation">
      {/* Will open settings menu eventuall */}
      <img src={props.avatar} alt={props.name} />
    </nav>
  );
};

export default Top;