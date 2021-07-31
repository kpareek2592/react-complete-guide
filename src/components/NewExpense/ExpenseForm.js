import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState('');
//   const [enteredAmount, setEnteredAmount] = useState('');
//   const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: '', 
    enteredAmount: '', 
    enteredDate: '' 
  });

  const titleChangeHandler = (event) => {
    setUserInput({
        ...userInput,                       // This spread operator is used so that other state variables are not lost as we are updating only one
        enteredTitle: event.target.value,
    })
  };

  const amountChangeHandler = event => {
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // })

    //  Prefer this over the above commented way to update the state as if we have many state updates then as react is scheduling these updates
    //  for later execution we may depend on an outdated value of the state. This makes us operate on latest states of the data
    setUserInput((prevState) => {
        return { ...prevState, enteredAmount: event.target.value };
    })
  };

  const dateChangeHandler = (event) => {
    setUserInput( (prevState) => {
        return { ...prevState, enteredDate: event.target.value };
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title: userInput.enteredTitle,
        amount: userInput.enteredAmount,
        date: new Date(userInput.enteredDate)
    };

    console.log(expenseData);
    setUserInput({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });
    console.log(userInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
