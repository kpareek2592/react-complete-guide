import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'


const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manual', age: 29 },
      { name: 'Steph', age: 26 }
    ],
    otherstate: 'some  other state value'
  });

  console.log(personsState);

  const switchNameHandler = () => {
    // console.log('Was Clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Silver';
    setPersonsState({
      persons: [
        { name: 'Silver', age: 28 },
        { name: 'Manual', age: 29 },
        { name: 'Roger', age: 30 }
      ],
      otherstate: personsState.otherstate
    });
  };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working.</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );

    // return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Does this work now'));
  }



  export default app;

  // state = {
  //   persons: [
  //     { name: 'Max', age: 28 },
  //     { name: 'Manual', age: 29 },
  //     { name: 'Steph', age: 26 }
  //   ],
  //   otherstate: 'some  other state value'
  // };

  // 