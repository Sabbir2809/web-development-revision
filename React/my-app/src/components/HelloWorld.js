import React from 'react';

const HelloWorld = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
};

export default HelloWorld;

export const GoodBye = (props) => {
  return (
    <div>
      <h3>Good Bye, {props.text}</h3>
    </div>
  );
};
