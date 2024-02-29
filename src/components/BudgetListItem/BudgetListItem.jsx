export default function BudgetListItem({ budget }) {
    return (
        <main>
            <div>{budget.title}</div>
            <div>{budget.date}</div>
            <div>{budget.budget}</div>
        </main>
    );
}