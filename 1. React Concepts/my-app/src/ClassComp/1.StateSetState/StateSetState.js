// Counter.js
// state, setState, onClick, disable, taranary operator, === 
// Codevolution, Anisul Islam 
//-----------------------------------------
import React, { Component,Fragment } from 'react';

class StateSetState extends Component {

    // 2nd Work: Creating State , For this creating constructor, calling super method, state object or property:Start
    constructor(props){
        super(props);
    
        this.state = { 
            count: 0,      // state object or property
        } 
    } 
 
    // 2nd Work: Creating State , For this creating constructor, calling super method, state object or property:End


    // 3rd Work: Creating listener's state changing functions:Start 
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1 ,
        })
    }  

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1 ,
        })
    } 
    // 3rd Work: Creating listener's state changing functions:End


    render() {
         
        return (
             <Fragment>   

                {/* 1st work: Main Work ,what we will do and its static visualization creation:Start */} 
                <button className="butt" onClick={ this.decrementCount } disabled={this.state.count === 0 ? true : false }> - </button>
                <button className="butt1"> { this.state.count } </button>       
                <button className="butt" onClick={ this.incrementCount } disabled={this.state.count === 5 ? true : false } > + </button> 
                {/* 1st work: Main Work ,what we will do and its static visualization creation:End */} 

            </Fragment> 
        );
    }
}


export default StateSetState; 
 