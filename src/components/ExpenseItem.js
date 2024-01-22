import React, { useState } from 'react';
import ExpenseDetails from './ExpenseDetails'

const initialExpenses = [
  { title: 'Food', amount: 10, locationOfExpenditure: 'Spices Restaurant', date: new Date(2024, 1, 18) },
  { title: 'Petrol', amount: 100, locationOfExpenditure: 'Shiva Pump', date: new Date(2024, 1, 18) },
  { title: 'Movies', amount: 200, locationOfExpenditure: 'SVF Mall', date: new Date(2024, 1, 18) },
];

const ExpenseItem = () => {
  const [expenses, setExpenses] = useState([...initialExpenses]);

  const handleDeleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const handleChangeAmountTo100 = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index].amount = 100;
    setExpenses(updatedExpenses);
  };

  return (
    <div className='expense-item'>
      <h2>Expense List</h2>
      {expenses.map((expense, index) => (
        <div key={index}>
          <ExpenseDetails
            title={expense.title}
            amount={expense.amount}
            location={expense.locationOfExpenditure}
            date={expense.date}
          />
          <button onClick={() => handleDeleteExpense(index)}>Delete</button>
          <button onClick={() => handleChangeAmountTo100(index)}>Change Amount to 100</button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseItem;
