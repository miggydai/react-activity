import React from "react";
import "./Inputs.css";

function Inputs(props) {
  const handleClick = (e) => {
    return alert("You clicked " + props.name + " - Php " + props.price);
  };
  return (
    <>
      <div className="container">
        <div className="box" onClick={handleClick}>
          <div>{props.name}</div>
          <div>Php {props.price}</div>
        </div>
      </div>
    </>
  );
}

export default Inputs;
