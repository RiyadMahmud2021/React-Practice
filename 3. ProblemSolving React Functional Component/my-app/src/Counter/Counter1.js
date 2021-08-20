// Functional Component, useState, Array Distructuring,inreament, decreament
import React, { Fragment ,useState } from 'react';

const Counter1 = () => {


    const [count,setCount] = useState(0)

    const reset = () => {
        
        setCount(0);

    }

    const increament = () => {
        
        setCount(count + 1);

    }
    const decreament = () => {

        setCount(count - 1);
        
    }


    return (
        <Fragment>
            <h1>Counter1</h1>
            Count: {count} <br/>
            <button onClick={decreament} disabled = { count === 0? true : false}> - </button>  
            <button onClick={reset}> Reset </button>  
            <button onClick={increament} disabled = { count === 5? true : false}> + </button>
        </Fragment>
    );
}

export default Counter1;
