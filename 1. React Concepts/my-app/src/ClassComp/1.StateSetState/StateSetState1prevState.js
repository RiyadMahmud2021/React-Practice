import React, { Component,Fragment } from 'react';

class StateSetState1prevState extends Component {

     constructor(props){
        super(props);
    
        this.state = { 
            count: 0,        
        } 
    } 
 
    incrementCount = () => {
        this.setState( prevState => {
            return {count : prevState.count + 1 } 
        })  
    }     
             

    render() {
         
        return (
             <Fragment>   

                <h1> { this.state.count } </h1>        
                <button  onClick={ this.incrementCount } disabled={this.state.count === 5 ? true : false } > + </button> 
  
             </Fragment>      
        );
    }
}


export default StateSetState1prevState;   
 