import React, { Component } from 'react';
import './UserOutput.css';

class UserOutput extends Component{
    render()
    {
        return(
        <div className='UserOutput'>
            <p>Hi I am {this.props.name} learning React.</p>
            <p>I love React!</p>
        </div>);
    }
}
export default UserOutput;