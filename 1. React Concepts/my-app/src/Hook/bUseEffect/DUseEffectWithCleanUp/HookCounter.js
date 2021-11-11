// useEffect with cleanup 
// useState, useEffect, window.addEventListener(), window.removeEventListener(), 
// Codevolution and Md Bulbul Ahmed
// 

import React,{useState, useEffect, Fragment} from 'react';

const HookCounter = () => {
 
    const [x, setX] = useState(0);
    const [y, setY] = useState(0); 

    const LogMousePosition = (e) =>{
        // console.log('Mouse Event'); 
        setX(e.clientX); // clientX, clientY are built in attribute for mouseevent.  
        setY(e.clientY);  
    }  
  
    useEffect(() =>{ 
        console.log('useEffect'); 
        window.addEventListener('mousemove',LogMousePosition);   
        // Mounting  code //Before toggle it will be run
         
        return () => {  
              console.log("Component Effect is Unmounted or useEffect_cleanup successfully cleaned the targeted effect"); 
              window.removeEventListener('mousemove',LogMousePosition); // When you click toggle button it will run
        } // Note: *** If we don't give this method to return. .......(see below) 
    },[]) // For blank [] useEffact will run only once            
  
    return(     
        <Fragment>  
                   <h1>X : {x}</h1>   
                   <h1>Y : {y}</h1>       

        </Fragment>
    ); 
}

export default HookCounter; 


      

//                                          From the above:
//  ----------------------------------------------------------------------------------
//  This "warning" will show.If we put the method to return, we can unmount component sucessfully.
//                                                             React state can perform properly.
 
//  Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates
//  a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect
//  cleanup function.        
//  --------------------------------------------------------------------------------- 