import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';
import EventListenerComp from './Exercise2/EventListenerComp';
import ValidationComp from './Exercise2/ValidationComp';
import CharComp from './Exercise2/CharComp'

class App extends Component {
  state = { 
    User: [
      {userName :'Bew', role: 'Beginner'}
    ],
    userInput : '',
    LenghtOfText : ''
  }
  nameChangedHandler = (event) =>{
    this.setState({
      User: [
        {userName : event.target.value, role: 'Beginner'}
      ]
    })
 }
 lengthHandler = (event) =>{
  this.setState({
    userInput: event.target.value,
    //LenghtOfText : event.target.value.length
  })
 }
 deleteHandler = (index) =>
 {
  const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
 }
  render(){
    const charComponent = 
       this.state.userInput.split('').map((i, index) => {
        return <CharComp 
        singleChar = {i}
        key = {index}
        deleteBlock = {() => this.deleteHandler(index)}
        />
      })
    
  return (
    <div className="App">
      <UserInput changed = {this.nameChangedHandler} currentname ={this.state.User[0].userName}/>
      <UserOutput
       name= {this.state.User[0].userName} role = {this.state.User[0].role}
       />
       <EventListenerComp changed = {this.lengthHandler} userInput = {this.state.userInput} 
       textLength = {this.state.userInput.length}/>
       <ValidationComp textLength = {this.state.userInput.length}/>
       {charComponent}
    </div>
  );
  }
}

export default App;
