import { Link } from "react-router-dom";

export default function BudgetListItem({ budget }) {
    const totalExpense = budget.expenses.reduce((total, expense) => {
        return total + expense.cost
    }, 0)

    const budgetLeft = budget.expenses.reduce((left, expense) => {
        return left - expense.cost
    }, budget.budget)

    return (
        <Link to={`/budgets/${budget._id}`} className="BudgetLink">
            <main className="BudgetItem">
                <div>Title: {budget.title}</div>
                <div>Date for Budget: {budget.date}</div>
                <div>Budget: {budget.budget}</div>
                <div>Total Expenses: {totalExpense}</div>
                <div>Total Budget Left: {budgetLeft}</div>
            </main>
        </Link>
    );
}