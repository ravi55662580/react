import React, { useState } from 'react';
import ExpenseItem from './components/ExpenseItem';
import ExpenseForm from './components/ExpenseForm';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <div>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseItem expenses={expenses} />
    </div>
  );
};

export default App;
