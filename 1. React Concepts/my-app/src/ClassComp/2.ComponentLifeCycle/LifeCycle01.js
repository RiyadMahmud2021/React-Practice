// We will see order of execution with child Component sequence
// Codevolution
import React, { Component } from 'react';
import LifeCycle02 from './LifeCycle02';  
 
 class LifeCycle01 extends Component {  

    constructor(){
        super();

        this.state = { 
            name: 'Riyad'
        }
        console.log('LifeCycle01 constructor')                  // Firstly presents   
    }
   
    static getDerivedStateFromProps(props, state){ 
        console.log('LifeCycle01 getDerivedStateFromProps');    // Secondly presents
    } 
    
    componentDidMount(){
        console.log('LifeCycle01 componentDidMount');  // Sixthly presents 
    }

      render() {
          console.log('LifeCycle01 Render');  // Thirsdly presents 
         return (     
             <div> 
                 <LifeCycle02/>   {/* Must put it in div tag  */} {/* Fourtly presents */} 
                  LifeCycle01
                 <LifeCycle02/>   {/* Must put it in div tag  */} {/* Fifthly presents  */} 
            </div> 
             
         );
     }
 }
 
 export default LifeCycle01;
 