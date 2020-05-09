import React, { Component } from 'react';

class UserInput extends Component{
      render(){
        const styleForUserInput = {
            position: 'absolute',
            fontStyle: 'inherit',
            color: 'blue',
            top:5,
            left:0
          }
    return(
        <div>
        <input style ={styleForUserInput} type ='text' onChange={this.props.changed} value={this.props.currentname}/>
        </div>
    );
      }
}

export default UserInput;