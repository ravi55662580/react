import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    console.log('Title:', newTitle);
    setTitle(newTitle);
  };

  const handleAmountChange = (e) => {
    const newAmount = e.target.value;
    console.log('Amount:', newAmount);
    setAmount(newAmount);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    console.log('Date:', newDate);
    setDate(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      title: title,
      amount: +amount, // Convert amount to a number
      date: new Date(date),
    };

    // Pass the new expense data to the parent component (App.js)
    onAddExpense(newExpense);

    // Clear the form fields after submitting
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onChange={(e) => console.log('Form Changed')}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={handleDateChange} />
      </div>
      <button type="submit" onClick={handleSubmit}>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
