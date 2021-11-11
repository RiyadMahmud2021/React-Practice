import React,{useState} from 'react';
import HookCounter from './HookCounter';

const UseEffectWithCleanUp = () => {
    const [display,setDisplay] = useState(true)
                            // display is noy js attribute, we can take state name any.
                            // Here, "true" means display boolean and it is open firstly. 
                            //"false" means display isn't open firstly.    
 
    const handleToggleDisplay = () =>{
        setDisplay( display => !display); // disaplay =>!dispaly like prevState func.   
     }
    return ( 
        <div>
            <button onClick={handleToggleDisplay}>Toggle Display</button> 
            {display && <HookCounter/>}  {/* Calling state and the other component for render */} 
         </div>
    ); 
}   

export default UseEffectWithCleanUp; 
