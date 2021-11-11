// UseEffect After Render
// Counter with UseEffectAfterRender, prevState, useState, useEffect  
// Codevolution 
import React, { Fragment,useState,useEffect } from 'react';

const ConditionallyRunEfffect = () => {

    const [count, setCount] = useState(0); 
    const [name, setName] = useState('');

    const handleName = (e) =>{
        setName(e.target.value);            
    }
    const increment = () => {
        setCount((prevCount) => prevCount +1); 
    } 
    useEffect(() => { 
        document.title = `You clicked ${count} times`;   
        console.log("UseEffect"); 
    },[count])  // useEffect running will be allow for count, for name will be stop
                // useEffect will run after every render. Here, obviously it will run for count, not for name.
                // Because,we fixed count state in dependency of useEffect.  
         
     
    return (  
                                
        <Fragment>  
             
                <h1>{count}</h1>
                <input text='text' value = {name} onChange={handleName}/>  
                <button onClick={increment}>Incre</button> 
                              
        </Fragment>  

    );
} 

export default ConditionallyRunEfffect;  