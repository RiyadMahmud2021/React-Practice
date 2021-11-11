// UseEffect After Render
// Counter with UseEffectAfterRender, prevState, useState, useEffect 
// 
import React, { Fragment,useState,useEffect } from 'react';

const UseEffectAfterRender = () => {

    const [count, setCount] = useState(0);  

    var increment = () => {
        setCount((prevCount) => prevCount +1); 
    }
    useEffect(() => {
        document.title = `You clicked ${count} times`;  // Effect code or mounting code 
        console.log("UseEffect");        
    })
    return ( 
        <Fragment>                 
            <h1>{count}</h1> 
            <button onClick={increment}>Incre</button>
        </Fragment> 
    );
}

export default UseEffectAfterRender;
