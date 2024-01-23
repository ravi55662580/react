import React,{useState} from 'react';

import NewExpense from './components/NewExpense';
import Expenses from './components/Expenses';


  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Food',
      amount: 10,
      date: new Date(2024, 7, 14),
    },
    { id: 'e2', title: 'Petrol', amount: 100, date: new Date(2023, 2, 12) },
    {
      id: 'e3',
      title: 'Movies',
      amount: 200,
      date: new Date(2023, 2, 28),
    },
    {
      id: 'e4',
      title: 'Movies',
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;