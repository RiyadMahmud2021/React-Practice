// Functional Component, useState, previues state, array distructuring, inreament
// Codevolution

import React, { Fragment, useState } from 'react';

const BUseStatePrevState = () => {

    const [count,setCount] = useState(0)
    
    const reset = () => { 
        setCount(0);
    } 

    const increament = () => {

        for(let i=0; i<5; i++){ // setCount(count + 1); // 1 increasing at a time,take present value in count and increase 1.
                                // setCount(count + i); // will be 5-1=4 increasing at a time                        
            setCount((prevCount) => prevCount + 1); //  In setCount, here is a unnamed function. 
                                                    // "prevCount" is a argument here. Used as a callback function.
                                                    //  It contains previous value perfectly.                
        }
    }
  
    return (
        <Fragment>
            <h1>Counter2</h1>
             Count: {count} <br/>
            <button onClick={reset}> Reset </button>  
            <button onClick={increament} disabled = { count === 50? true : false}> + </button>
        </Fragment>
    );
}
export default BUseStatePrevState;  