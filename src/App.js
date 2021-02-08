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

  // switchNameHandler = (newName) => {
  //   // console.log('Was Clicked');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Silver';
  //   this.setState({
  //     persons: [
  //       { name: 'Silver', age: 28 },
  //       { name: 'Manual', age: 29 },
  //       { name: newName, age: 30 }
  //     ],
  //     otherstate: 'some other value',
  //     showPersons: false
  //   });
  // };

  deletePersonHandler = (personIndex) => {
    //The below approach updates the array in an immutable fashion.
    //It creates a copy and then updates it.
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
    console.log(persons);
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { id: 'a1', name: 'Silver', age: 28 },
        { id: 'a2', name: event.target.value, age: 29 },
        { id: 'a3', name: 'Charlotte', age: 30 }
      ]
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click = {() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={persons.id}/>
          })}
          
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working.</p>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>

        {persons}
      </div>
    );
  };


  // return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Does this work now'));
}



export default App;
