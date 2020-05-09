import React, { Component } from 'react';
import './EventListenerComp.css'

class EventListenerComp extends Component{
    render(){
        return(
        <div className='EventListenerComp'>
        <div>
            <span>Exercise - 2</span>
            <br/>
            <input type='text'onChange ={this.props.changed} value={this.props.userInput}/>
            <span>Length {this.props.textLength}</span> 
        </div>
        </div>
        );
    }
}
export default EventListenerComp