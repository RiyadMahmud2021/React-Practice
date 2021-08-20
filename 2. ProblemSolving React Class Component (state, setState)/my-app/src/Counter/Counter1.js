// Counter.js
// previous state , state, setState, onClick, disable, taranary operator, ===
// Ternary operator syntax: condition ? exprIfTrue : exprIfFalse 
// Codevolution
//---------------------------------------------------------------------------- 
 
import React, { Component, Fragment } from 'react';

class Counter1 extends Component {
  constructor(props){
    super(props);

    this.state = {
        count: 0,      // state object or property
    } 
}

incrementCount = () => {
    for(let i=0; i<5; i++){ 
        this.setState((prevState) => {
                return{
                    count: prevState.count + 1 // 
                }
        }) 
    }
}        


render() {
     
    return (
         <Fragment>   
            <br/> 
            <button className="butt1"> { this.state.count } </button>      
            <button className="butt" onClick={ this.incrementCount } disabled={this.state.count === 50 ? true : false } > + </button> 

        </Fragment> 
    );
}
}

export default Counter1;
