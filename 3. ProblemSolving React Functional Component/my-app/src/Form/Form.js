// Form with useState()
// handelers, alert, e.preventDefault(), document.write(), object reaction in handler ,event, e.target.value, substr(0,10)
// -------------------------------------------------------------------------------------------------------
import React, {Fragment,useState} from 'react';

const Form = () => {

    // 2nd Work: Creating HookState , For this using array distructuring,state object or property:Start
    const [Name,setName] = useState("")
    const [Phone,setPhone] = useState("")
    const [PW,setPW] = useState("")
    // 2nd Work: Creating State , For this creating constructor, calling super method, state object or property:End

    // 3rd Work: Creating listener for state changing functions:Start 
    const handleNameChange = (e) =>{
        setName(e.target.value); 
    }  
    const handlePhoneChange = (e) =>{       
        setPhone(e.target.value); 
    }
    const handlePWChange = (e) =>{    
        setPW(e.target.value.substr(0,10));
    }
    const handleSubmit = (e) =>{
        alert( "Congratulation "+ Name + "," +" your form is submitted")
        e.preventDefault(); 
        document.write("Your Name:" + Name + "<br>" + "Phone No:" + Phone);  {/* Note: "break" tag syntax is different in different situation */}

        document.write("<br>");  {/* Note: "break" tag syntax is different in different situation */}

        document.write("<h1> You know your Password, Don't Forget it </h1>");

        var userInfo = { // object creation for keeping all information of a person in a object
            Name: Name,
            Phone: Phone,
            Password: PW,
        }
       console.log(userInfo);

    }
    // 3rd Work: Creating listener's state changing functions:End 

    return (
        <Fragment>
            <h1>Form</h1>
            {/* 1st work: Main Work ,what we will do and its static visualization creation:Start */} 
            <form action=" " onSubmit={handleSubmit}> 
            <label>Name</label>
                <input type="text" value={Name} onChange={handleNameChange}/> 
            <label>Phone</label>
                <input type="text" value={Phone} onChange={handlePhoneChange}/> 
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

export default Form; 

//                                 Thinking for Problem Solving by React js: 
// ------------------------------------------------------------------------------------------------------
// 1. Normal Thinking about a problem
// 2. Normal interface Design
// 3. Thinking about: 
//    - Firstly,need state changing???  ==> React Hook State or React State
//    - Secondly,happening event??? ==> e               
//    - Thirdly,need handler to state change or extra activities??? ==> handerler with arrow function
//    - Fourthly,need handler to do extra activities??? ==> handerler with arrow function
//                        *Must Use Meaning Full Handler Name 
// 4. Apply These
// ------------------------------------------------------------------------------------------------------ 