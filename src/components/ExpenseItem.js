import ExpenseDetails from "./ExpenseDetails";
import React from "react";

const initialExpenses = [
  { title: 'Food', amount: 10, locationOfExpenditure: 'Spices Restaurant', date: new Date(2024, 1, 18) },
  { title: 'Petrol', amount: 100, locationOfExpenditure: 'Shiva Pump', date: new Date(2024, 1, 18) },
  { title: 'Movies', amount: 200, locationOfExpenditure: 'SVF Mall', date: new Date(2024, 1, 18) },
];

const ExpenseItem = () => {
    const [expenses, setExpenses] = React.useState([...initialExpenses]);
  
    const handleDeleteExpense = (index) => {
      const updatedExpenses = [...expenses];
      updatedExpenses.splice(index, 1);
      setExpenses(updatedExpenses);
    };
    const handleAmountExpense = (index) => {
      const updatedExpenses = [...expenses];
      updatedExpenses[index].amount = 100;
      setExpenses(updatedExpenses);
    };
  
    return (
      <div className='expense-item'>
        <h2>Expense item!</h2>
        {expenses.map((expense, index) => (
          <div key={index}>
            <ExpenseDetails
              title={expense.title}
              amount={expense.amount}
              location={expense.locationOfExpenditure}
              date={expense.date}
            />
            <button onClick={() => handleDeleteExpense(index)}>Delete</button>
            <button onClick={() => handleAmountExpense(index)}>Change Amount to 100</button>

          </div>
        ))}
      </div>
    );
  };
  
  export default ExpenseItem;