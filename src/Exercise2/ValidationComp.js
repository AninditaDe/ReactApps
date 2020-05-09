import React, { Component } from 'react'

class ValidationComp extends Component{
    render()
    {
        let txtLength = this.props.textLength;
        
        const styleValid = {
            position: 'absolute',
            fontStyle: 'inherit',
            color: 'green',
            top:240,
            left:0
          }
          const styleInValid = {
            position: 'absolute',
            fontStyle: 'inherit',
            color: 'red',
            top:240,
            left:0
          }
        if((txtLength < 5)&& (txtLength > 0)){
            return(
                <div style={styleInValid}>
                    Text too short !
                </div>
            );
        }
        else if(txtLength >= 5){
            return(
                <div style={styleValid}>
                    Text long enough.
                </div>
            );
        }
        else{
            return "";
        }
    
    }
}
export default ValidationComp;