//Counter.js
//Functional Component, useState, Array Distructuring,inreament, decreament
//Codevolution
//-------------------------------------------------------
import React, { Fragment ,useState } from 'react';

const AUseState = () => {
    const [count,setCount] = useState(0); // Here, it is Array Distructuring
                    // Where you will use hooks???
                        //-> only call hook at the top level
                        //-> don't call inside loop,conditions or nested function 
                        //-> only call hooks from React Functions
                        //-> Call them from within React functional components and not just any regular js functions 

    const increament = () => {
        setCount(count + 2);
    }
    const decreament = () => {
        setCount(count - 1);
    }

    return (
        <Fragment>
            <h1>Counter</h1> 
             Count: {count} <br/>  
            <button onClick={decreament} disabled = { count === 0? true : false}> - </button>  
            <button onClick={increament} disabled = { count === 6? true : false}> + </button> 
        </Fragment> 
    );
}

export default AUseState;