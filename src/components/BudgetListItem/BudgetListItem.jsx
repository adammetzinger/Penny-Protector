import { Link } from "react-router-dom";

export default function BudgetListItem({ budget }) {
    return (
        <Link to={`/budgets/${budget._id}`} className="BudgetLink">
            <main className="BudgetItem">
                <div>Title: {budget.title}</div>
                <div>Date for Budget: {budget.date}</div>
                <div>Budget: {budget.budget}</div>
            </main>
        </Link>
    );
}