import React from 'react';
import './style.css';

const Loading = () => {
  return (
    <div className="loading__wrap">
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default Loading;