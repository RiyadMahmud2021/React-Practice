import React, { Component } from 'react';
import ArmyTraining from './ArmyTraining'; 

class Rokon extends Component { 
     
    render() {
        return (     
            <div>
                <h1>Camp: {this.props.Camp}</h1>
                <button onMouseOver={this.props.HOChandleGunfire}>
                    Gun : {this.props.HOCGunName},    
                    Rokon Gunfire: {this.props.HOCgunfire} 
                </button>
            </div>
        );
    }
}  
export default ArmyTraining(Rokon,5);    
