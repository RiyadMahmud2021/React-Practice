import React, { Component } from 'react';

class LifeCycle02 extends Component {

    constructor(){
        super();

        this.state = {
            name: 'Riyad'
        }
        console.log('LifeCycle02 constructor')
    }    
                                 
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle02 getDerivedStateFromProps');   
    } 
     
    componentDidMount(){
        console.log('LifeCycle02 componentDidMount'); 
    }

      render() {
          console.log('LifeCycle02 Render');  
         return (
             <div> 
                 LifeCycle02
             </div>  
         );
     }
 }
 
   
export default LifeCycle02;
