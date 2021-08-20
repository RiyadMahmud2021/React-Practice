//Form.js
//Focusing on Controlled Component and calss component with state 
//---------------------------------------------------------------

import React, { Component,} from 'react';

class Form extends Component {

    constructor(props){
        super(props);
    
        this.state = {
            value: "",      // state object or property
        } 
    }


    handleChange = (event) => {
        // console.log(Event); // no need to pasing parameter
        // console.log(event); // pass parameter 'event'
        // console.log(event.target.value); // no graphical change on interface,
                                            // so we need to use setSTate to change state
        this.setState({value: event.target.value.toLowerCase().substr(0,10)}); // we are passing event because here happening an event
                        //Here,this event is "Someone typing on input section and input section getting changed (state getting changed)"
    }

    render() {
        return (
            <div>
                <form>
                    <h1>Controlled Component</h1>
                    <h2>Here,this event is "Someone typing on input section and input section getting changed (state getting changed)"</h2>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </form>
            </div>
        );
    }
}

export default Form;
