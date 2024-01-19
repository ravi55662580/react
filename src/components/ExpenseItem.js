import ExpenseDetails from "./ExpenseDetails";


const expenses = [
    { title: 'Food', amount: 10, locationOfExpenditure: 'Spices Restaurant', date: new Date(2024, 1, 18) },
    { title: 'Petrol', amount: 100, locationOfExpenditure: 'Shiva Pump', date: new Date(2024, 1, 18) },
    { title: 'Movies', amount: 200, locationOfExpenditure: 'SVF Mall', date: new Date(2024, 1, 18) },
    // Add more expenses as needed
];

const ExpenseItem = () => {
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
                </div>
            ))}
        </div>
    );
}
export default ExpenseItem;