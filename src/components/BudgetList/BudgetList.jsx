export default function BudgetList({ budgets }) {
    const budget = budgets.map(budgeit => 
        <BudgetListItem key={budgeit.id} budget={budgeit} />
        );
    return (
        <main>
            {budget}
        </main>
    )
}