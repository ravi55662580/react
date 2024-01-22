import React, { useState } from 'react';

const ExpenseForm = () => {
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

    // Create an object based on the user's input
    const formData = {
      title: userInput.title,
      amount: userInput.amount,
      date: userInput.date
    };

    // Log the object on the screen (you might want to do something more meaningful)
    console.log(formData);
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;
