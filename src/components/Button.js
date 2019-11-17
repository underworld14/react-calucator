import React from "react";

const Button = props => {
  return (
    <div className={`columns-${props.cols}`} >
      <button className="button-calc" onClick={() => props.action(props.symbol)} > {props.symbol} </button>
    </div>
  );
};

export default Button;
