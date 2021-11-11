import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div>
                <h1> {this.props.render(true)}</h1> {/* See AppRender.js for props value */}
            </div>
        );
    }
} 

export default User;