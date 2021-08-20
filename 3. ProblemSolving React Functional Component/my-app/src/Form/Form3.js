// Form3 with useState() with object and only one handlerChange
// handelers, alert,e .preventDefault(), document.write(), distucturing, array distructuring, event,
// e.target.value, e.target.name (file or field name), substr(0,10) 
// [e.target.name]: e.target.value 
// -------------------------------------------------------------------------------------------------------

import React , {Fragment,useState} from 'react';

const Form3 = () => {
    const [user,setUser] = useState({Name:'', Email:'', PW:''}) // array distructuring
                            // Here 'user' is the state name,
                            // 'Name', 'Email', 'PW' is the object name property not object.
                            // Here object name is implicated...... State's property are setted with object
                            // So object property are state's property 

    const {Name, Email , PW} = user  //distucturing
                            
 
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value}); // ... spread operator.
                    // Think for this line, why and when need to use [] and not []
                                             // Here, its needed for add or merge object properties
                                             // We can also merge this property by typing 
                                             // useState can't "add or merge" object properties but "setState" can do it
    }; 

    const handleSubmit = (e) =>{

        alert( "Congratulation "+ Name + "," +" your form is submitted")
        e.preventDefault();    

        document.write("Your Name:" + Name + "<br>" + "Email No:" + Email);  {/* Note: "break" tag syntax is different in different situation */}

        document.write("<br>");  {/* Note: "break" tag syntax is different in different situation */}

        document.write("<h1> You know your Password, Don't Forget it </h1>");

}
    return ( 
        <Fragment>
             <h1>Form3</h1>
           <form action=" " onSubmit={handleSubmit}> 
           <label>Name</label>
               <input type="text" id="text" name="Name"  value={Name} onChange={handleChange}/> 
{/* "value" for controlling field value, "name" for field name, "type" for field type, "id" for style or css adding */}
           <label>Email</label>
               <input type="email" id="email" name="Email" value={Email} onChange={handleChange}/> 
           <label>Password</label> 
               <input type="password" id="password" name="PW" value={PW} onChange={handleChange}/>
                  
               <br/> 
               {/* Note: "break" tag syntax is different in different situation */}

               <input type="submit" value="Submit"/> 
           </form> 
           {/* 1st work: Main Work ,what we will do and its static visualization creation:End */} 

        </Fragment>
    );
}

export default Form3;
