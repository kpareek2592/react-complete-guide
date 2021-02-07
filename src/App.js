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

  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working.</p>
        <button onClick={() => this.switchNameHandler('Kaido')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
        click = {this.switchNameHandler.bind(this, 'Edward')}>My Hobbies: Racing</Person> 
        {/* Use the .bind syntax more */}
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  };
    

    // return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Does this work now'));
  }



  export default App;
