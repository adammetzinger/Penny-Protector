import { useParams } from "react-router-dom"
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm"

export default function BudgetDetailPage({ budgets, setBudgets }) {
    // const [budget, setBudget] = useState(null)
    const {budgetId} = useParams();
    
    const budget = budgets.find(b => b._id === budgetId);
    if (!budget) return null;

    return (
        <>
            <h1>{budget.title}</h1>
            <h1>{budget.date}</h1>
            <h1>{budget.budget}</h1>
            <ExpenseForm budgets={budgets} setBudgets={setBudgets} budgetId={budgetId} />
        </>
    )
}