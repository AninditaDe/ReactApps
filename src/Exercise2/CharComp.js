import React, { Component } from 'react'
import './CharComp.css'

class CharComp extends Component{
    render()
    {
        return(
            <div className='CharComp' onClick ={this.props.deleteBlock}>
                {this.props.singleChar}
            </div>
        );
    }
}
export default CharComp;