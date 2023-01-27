import React from 'react'
import { useState } from 'react';
import "./Inputs.css"




const Inputs = (props) => {
    const [deleted, setDeleted] = useState();
    return (
        <>
       
        <div className="container">
            <div><b>{props.name}</b> - {props.price}</div>
              
             
             <div>
                 <button className="button">Delete</button>
             </div>
             </div>
        
        </>

    )
}

export default Inputs
