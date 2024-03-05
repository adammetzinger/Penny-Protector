import { useState } from "react"
import * as expensesAPI from "../../utilities/expenses-api"

export default function ExpenseForm({ budgets, setBudgets, budgetId}) {
    const [newExpense, setNewExpense] = useState({
        title: '',
        cost: '',
        comment: '',
    })

    async function handleSubmit(evt) {
        evt.preventDefault();
        const updatedBudget = await expensesAPI.createExpense(/* expense data, budget._id */budgetId, newExpense);
        const updatedBudgets = budgets.map(b => b._id === updatedBudget._id ? updatedBudget : b);
        setBudgets(updatedBudgets);
        setNewExpense({
            title: '',
            cost: '',
            comment: '',
        });
    }

    function handleChange(evt) {
        const formNewExpense = {...newExpense, [evt.target.name]: evt.target.value};
        setNewExpense(formNewExpense);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
            name="title"
            value={newExpense.title}
            onChange={handleChange}
            />
            <label>Comment:</label>
            <input
            name="comment"
            value={newExpense.comment}
            onChange={handleChange}
            />
            <label>Cost:</label>
            <input
            name="cost"
            type="number"
            value={newExpense.cost}
            onChange={handleChange}
            />
            <button type="Submit">Submit New Budget</button>
        </form>
    )
}