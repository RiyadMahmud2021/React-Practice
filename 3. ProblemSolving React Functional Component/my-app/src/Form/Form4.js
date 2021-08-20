// Form4 (Live Changing Display or Show) with useState() with object and only one handlerChange 
// handelers, distucturing, array distructuring, event,
// e.target.value, e.target.name (file or field name), substr(0,10) 
// [e.target.name]: e.target.value 
// -------------------------------------------------------------------------------------------------------

import React , {Fragment,useState} from 'react';

const Form3 = () => {
    const [user,setUser] = useState({firstName:'', lastName:''}) // array distructuring // useState take parameter
                        // and return 2 thinks .Frist is state and second is state changing function.
                        // Here 'user' is the state name,
                        // firstName, lastName is the object name property not object.
                        // Here object firstName, lastName is implicated...... State's property are setted with object
                        // So object property are state's property 
        
    const {firstName,lastName} = user  //distucturing     
                            
 
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
        e.preventDefault();    
        // ... spread operator.
                    // Think for this line, why and when need to use [] and not []
                                             // Here, its needed for add or merge object properties
                                             // We can also merge this property by typing 
                                             // useState can't "add or merge" object properties but "setState" can do it
    }; 

return ( 
    <Fragment>
         <h1>Form4</h1> 
       <form> 

       <label>firstName</label> 
           <input type="text" 
            id="firstName" 
            name="firstName"  
            value={firstName} 
            onChange={handleChange}/> 
            
{/* "value" for controlling field value, "name" for field name, "type" for field type, "id" for style or css adding */}
            <br/>
       <label>lastName</label>
           <input type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}/> 
 
             
           <br/> 
           {/* Note: "break" tag syntax is different in different situation */}

            
           
        <h2>{JSON.stringify(user)}</h2>
       </form> 
       {/* 1st work: Main Work ,what we will do and its static visualization creation:End */} 

    </Fragment> 
    );
}

export default Form3;