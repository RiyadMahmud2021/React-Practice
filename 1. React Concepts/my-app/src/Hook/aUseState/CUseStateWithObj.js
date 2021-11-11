// Form1 with useState() with object
// handelers, alert,e .preventDefault(), document.write(), distucturing, array distructuring, event, e.target.value
// -------------------------------------------------------------------------------------------------------
import React , {Fragment,useState} from 'react';

const Form1 = () => {
// 2nd Work: Creating HookState , For this using array distructuring,state object or property:Start
       const [user,setUser] = useState({Name:'', Email:'', PW:''}) // array distructuring
                                            // Here 'user' is the state name,
                                            // 'Name', 'Email', 'PW' is the object name property not object.
                                            // Here object name is implicated...... 
       const {Name, Email ,PW} = user  //distucturing
               
// 2nd Work: Creating State , For this creating constructor, calling super method, state object or property:End
   
// 3rd Work: Creating listener for state changing functions:Start  
       const handleNameChange = (e) =>{
           setUser({...user,Name: e.target.value}); // ... spread operator. 
                            // Here, its needed for add or merge object properties
                            // We can also merge this property by typing 
                            // useState can't "add or merge" object properties but "setState" can do it
       }   
       const handleEmailChange = (e) =>{        
           setUser({...user,Email: e.target.value}); 
       } 
       const handlePWChange = (e) =>{    
           setUser({...user,PW: e.target.value});
       } 
       const handleSubmit = (e) =>{
           alert( "Congratulation "+ Name + "," +" your form is submitted")
           e.preventDefault(); 
           document.write("Your Name:" + Name + "<br>" + "Email No:" + Email);  {/* Note: "break" tag syntax is different in different situation */}
   
           document.write("<br>");  {/* Note: "break" tag syntax is different in different situation */}
   
           document.write("<h1> You know your Password, Don't Forget it </h1>");
   

   
       }
// 3rd Work: Creating listener's state changing functions:End 
   
       return (
           <Fragment>
   
               {/* 1st work: Main Work ,what we will do and its static visualization creation:Start */} 
               <h1>Form1</h1>
               <form action=" " onSubmit={handleSubmit}> 
               <label>Name</label>
                   <input type="text" value={Name} onChange={handleNameChange}/> 
               <label>Email</label>
                   <input type="text" value={Email} onChange={handleEmailChange}/> 
               <label>Password</label> 
                   <input type="text" value={PW} onChange={handlePWChange}/>
                   
                   <br/>  
                   {/* Note: "break" tag syntax is different in different situation */}
   
                   <input type="submit" value="Submit"/> 
               </form> 
               {/* 1st work: Main Work ,what we will do and its static visualization creation:End */} 
   
           </Fragment>                        
       );
   }
export default Form1;
