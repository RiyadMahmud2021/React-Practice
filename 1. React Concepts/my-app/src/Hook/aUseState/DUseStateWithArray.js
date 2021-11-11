// Random Number output in Array
// useState with array , array distructuring, react map function, react list 
// Math.floor(),Math.random(), handeler onClick
import React, { Fragment, useState } from 'react';

const RandomNumberInArray = () => {

    const [items,setItems] = useState([]) 

    const addItem = () =>{
        setItems([...items, {  // No another array for storing value,because we didnot give any value
            id: items.length,  // in input, random Math.function is built in js,
            value: Math.floor(Math.random() * 10) + 1 // So,item is the storing array 
        }])
    }  
                                          
    return (                                                                       
        <Fragment>
            <button onClick={addItem}>Add a number</button>
            <ul> 
                {items.map((item) => ( // Using map function for  react js [different from general map fun]
                                       // Item is passing variable for mapping
                        <li key={item.id}> {item.value} </li>  // Output will be stored as array
                ))  
                }                                                       
            </ul>    
        </Fragment>   
    ); 
}

export default RandomNumberInArray;

 

//                       Notes: useState
// 1. The useState hook lets you add state to functional component
// 2. In classes, the state is alwayes an object
// 3. With the susState hook, the state doesn't have to be an object
// 4. The useState hook returns an array with 2 elements
// 5. The first element is the current value of the state 
// 6. And the second element is a state setter function   