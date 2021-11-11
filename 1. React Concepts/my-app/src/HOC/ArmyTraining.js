import React, { Component } from 'react';

const ArmyTraining = (Men,Shot) =>{
    class NewMan extends Component {
        state = {
            gunfire: 0, 
        };
    
        handleGunfire = () =>{
            this.setState({ gunfire: this.state.gunfire + Shot});
        }  
        render() {
            return(
                <div>
                    <Men 
                    HOCGunName="M4-A1" 
                    HOCGunName1="AK-47"
                    HOChandleGunfire = {this.handleGunfire} 
                    HOCgunfire={this.state.gunfire}   
                    {...this.props}  
                    /> 
                </div>   
            );
        } 
    }
    return NewMan; 
} 

export default ArmyTraining; 