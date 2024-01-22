import React from 'react';

const ExpenseDetails = (props) => {
  return (
    <div className='expense-details'>
      <h2>{props.title}</h2>
      <p>Rs {props.amount}</p>
      <p>Location: {props.location}</p>
      <p>Date: {props.date.toDateString()}</p>
    </div>
  );
};

export default ExpenseDetails;

