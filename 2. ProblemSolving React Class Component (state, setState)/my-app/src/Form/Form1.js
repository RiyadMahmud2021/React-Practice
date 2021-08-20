// From with alert,event,event.preventDefault(),onSubmit(),onChange()
// No need binding when you will use arrow functions,but for normal function,must need to use binding
// Anisul Islam 
//-----------------------------------------------------
import React, { Component,Fragment,button } from 'react';

class Form1 extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        essay: '', 
      }; 
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this); // No need binding when you will use arrow functions,
                                                          // but for normal function,must need to use binding
    } 
     
  handleChange = (event) => {
   this.setState({essay: event.target.value}); // No need binding when you will use arrow functions,
                                               // but for normal function,must need to use binding
 }
 
  handleSubmit = (e) => {
   alert('Its your Eassy: ' + this.state.essay); // Herte alert is javascript alert, here not using plugin or react-bootstrap
   e.preventDefault(); //Here Event is changing white area to text and event.preventDefault() using for preventing form's writing
 }
  
  render() {  
  return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <label> 
            <h1>Write the Essay Here</h1>
            <textarea value={this.state.essay} onChange={this.handleChange} />
          </label> <br/>
          <input type="submit" value="Submit"/> 
      </form>
      </Fragment>
    );
  }
}

export default Form1;  