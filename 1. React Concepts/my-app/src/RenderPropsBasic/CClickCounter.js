import React, { Component,Fragment } from 'react';

class ClickCounter extends Component { 

    render() {
        const { count, incrementCount } = this.props 
        return (  
             <Fragment>    
                
                <h1> { count } </h1>         
                <button  onClick={ incrementCount } disabled={ count === 20 ? true : false } > + </button> 
  
             </Fragment>      
        );     
    }
} 


export default ClickCounter;   
 