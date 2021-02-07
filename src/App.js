import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manual', age: 29 },
      { name: 'Steph', age: 26 }
    ],
    otherstate: 'some  other state value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was Clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Silver';
    this.setState({
      persons: [
        { name: 'Silver', age: 28 },
        { name: 'Manual', age: 29 },
        { name: newName, age: 30 }
      ],
      otherstate: 'some other value'
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Silver', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Charlotte', age: 30 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working.</p>
        <button 
          style = {style} onClick={() => this.switchNameHandler('Kaido')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Edward')}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        {/* Use the .bind syntax more */}
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  };


  // return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Does this work now'));
}



export default App;
