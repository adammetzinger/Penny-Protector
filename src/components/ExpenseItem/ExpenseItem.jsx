import * as expensesAPI from '../../utilities/expenses-api'

export default function ExpenseItem({ expense, budgetId, budgets, setBudgets}) {
   
    async function handleDelete(evt) {
        evt.preventDefault();
        const updatedBudget = await expensesAPI.deleteExpense(expense._id);
        const updatedBudgets = budgets.map(b => b._id === updatedBudget._id ? updatedBudget : b)
        setBudgets(updatedBudgets);
    }

    return (
        <>
            {expense && 
            <>
            <h1>{expense.title}</h1>
            <h1>{expense.comment}</h1>
            <h1>{expense.cost}</h1>
            <button onClick={handleDelete} >Delete</button>
            </>
            }
        </>
    )
}