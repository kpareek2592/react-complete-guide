import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'Silver'
  }

  nameChangedHandler = (event) => {
    this.setState({ username: event.target.value })
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
        <ol>
          <li>Create TWO new components: UserInput and UserOutputCreate TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphsUserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it therePass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (the username) and pass the username to the UserOutput componentAdd state to the App component (the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (an event-handler method)Add a method to manipulate the state (an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change eventPass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutputEnsure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting usernameAdd two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheetsAdd styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput changed={this.nameChangedHandler} currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName='Ray' />
      </div>
    );
  };


  // return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Does this work now'));
}



export default App;
