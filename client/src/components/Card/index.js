import React from 'react';
import './style.css';

const Card = (props) => {
  return (
    <div className={`card card__${props.colour}`} >
      <p>{props.name}</p>
    </div>
  );
};

export default Card;