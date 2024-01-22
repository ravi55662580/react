import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const [expenses, setExpenses]= useState([]);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div>
      <ExpenseForm onAddExpense={addExpenseHandler}/>
      <ExpenseItem expenses={expenses}/>
    </div>
  );
};

export default App;
