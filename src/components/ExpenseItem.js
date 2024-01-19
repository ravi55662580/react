const expenses = [
    { title: 'Food', amount: 10, locationOfExpenditure: 'Spices Restaurant' },
    { title: 'Petrol', amount: 100, locationOfExpenditure: 'Shiva Pump' },
    { title: 'Movies', amount: 200, locationOfExpenditure: 'SVF Mall' },
    
];

function ExpenseItem() {
    return (
        <div>
            <h2>Expense item!</h2>
            {expenses.map((expense, index) => (
                <div key={index}>
                    <p>{expense.title} Rs {expense.amount} in {expense.locationOfExpenditure}</p>
                </div>
            ))}
        </div>
    );
}
export default ExpenseItem;