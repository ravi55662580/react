import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const handleTitleChange = (event) => {
    setUserInput({ ...userInput, title: event.target.value });
  };

  const handleAmountChange = (event) => {
    setUserInput({ ...userInput, amount: event.target.value });
  };

  const handleDateChange = (event) => {
    setUserInput({ ...userInput, date: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newExpense = {
      title: userInput.title,
      amount: userInput.amount,
      locationOfExpenditure: 'Unknown',
      date: new Date(userInput.date)
    };

    onAddExpense(newExpense);

    setUserInput({
      title: '',
      amount: '',
      date: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={userInput.title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={userInput.amount} onChange={handleAmountChange} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={userInput.date} onChange={handleDateChange} />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
