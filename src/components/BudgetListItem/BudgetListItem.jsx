export default function BudgetListItem({ budget }) {
    return (
        <main className="BudgetItem">
            <div>Title: {budget.title}</div>
            <div>Date for Budget: {budget.date}</div>
            <div>Budget: {budget.budget}</div>
        </main>
    );
}