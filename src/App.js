import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

class App extends Component {
  state = { 
    User: [
      {userName :'Bew', role: 'Beginner'}
    ]
  }
  nameChangedHandler = (event) =>{
    this.setState({
      User: [
        {userName : event.target.value, role: 'Beginner'}
      ]
    })
 }
  render(){
  return (
    <div className="App">
      <UserInput changed = {this.nameChangedHandler} currentname ={this.state.User[0].userName}/>
      <UserOutput
       name= {this.state.User[0].userName} role = {this.state.User[0].role}
       />
    </div>
  );
  }
}

export default App;
