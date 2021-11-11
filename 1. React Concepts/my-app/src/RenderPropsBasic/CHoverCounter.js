import React, { Component,Fragment } from 'react';

class HoverCounter extends Component {
         

    render() {
        const { count, incrementCount } = this.props 
        return (
             <Fragment>   

                <h1> {  count } </h1>        
                <button  onMouseOver={ incrementCount } disabled={ count === 1000 ? true : false } > + </button> 
  
             </Fragment>      
        );
    }
}


export default HoverCounter;   
 