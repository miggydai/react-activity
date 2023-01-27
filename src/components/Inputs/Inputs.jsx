import React from 'react'
import { useState } from 'react';
import "./Inputs.css"

const handleClick = (e) => {
    alert("hi")
}

const Inputs = (props) => {
    const [deleted, setDeleted] = useState();
    return (
        <>
        <div className="container">
            <div className='box' onClick={handleClick}>
            <div>{props.name}</div>
              <div>
              </div>
              {props.price}
            </div>
           
             </div>
        
        </>

    )
}

export default Inputs
