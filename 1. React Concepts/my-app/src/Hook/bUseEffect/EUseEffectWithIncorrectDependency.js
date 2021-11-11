// Use Effect With Incorrect Dependency
// 

import React, { Fragment,useState,useEffect } from 'react';

const EUseEffectWithIncorrectDependency = () => {

    const [count, setCount] = useState(0);  

    var ticking = () => {
        // setCount(count + 1); // If you use this syntax, you need ---------------- (i) 
        setCount((prevCount) => prevCount + 1);   // If you use prevState no need  ----- (i)  
    }
    useEffect(() => {
         console.log("UseEffect"); 
         const interval = setInterval(ticking,1000);               
         
         return () => { 
             clearInterval(interval); 
         }
    }, [])  // -------------------- [count] to write ------------- (i) 
    return (  
        <Fragment>                       
            <h1> CountUp: {count} </h1>         
        </Fragment> 
    );
}

export default EUseEffectWithIncorrectDependency;  