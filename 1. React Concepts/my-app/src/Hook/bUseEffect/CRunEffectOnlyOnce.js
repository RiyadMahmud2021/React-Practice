import React,{useState, useEffect, Fragment} from 'react';

const RunEffectOnlyOnce = () => {
 
    const [x, setX] = useState(0);
    const [y, setY] = useState(0); 

    const LogMousePosition = (e) =>{
        console.log('Mouse Event'); 
        setX(e.clientX); // clientX, clientY are built in attribute for mouseevent.  
        setY(e.clientY);  
    }  
 
    useEffect(() =>{ 
        console.log('useEffect'); 
        window.addEventListener('mousemove',LogMousePosition);     
    },[]) // For blank [] useEffact will run only once          
  
    return(   
        <Fragment>  
                   <h1>X : {x}</h1>   
                   <h1>Y : {y}</h1>       

        </Fragment>
    ); 
}

export default RunEffectOnlyOnce;
