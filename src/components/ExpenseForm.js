import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setEnteredTitle(newTitle);
  };

  const handleAmountChange = (e) => {
    const newAmount = e.target.value;
    setEnteredAmount(newAmount);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setEnteredDate(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      title: enteredTitle,
      amount: +enteredAmount, // Convert amount to a number
      date: new Date(enteredDate),
    };

    // Pass the new expense data to the parent component (App.js)
    onAddExpense(newExpense);

    // Clear the form fields after submitting
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form>
      <div>
        <label>Title:</label>
        <input type="text" value={enteredTitle} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={enteredAmount} onChange={handleAmountChange} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={enteredDate} onChange={handleDateChange} />
      </div>
      <button type="submit" onClick={handleSubmit}>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
