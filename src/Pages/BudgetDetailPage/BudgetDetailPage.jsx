import * as budgetsAPI from '../../utilities/budgets-api'
import { useParams } from "react-router-dom"
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm"

export default function BudgetDetailPage({ budgets, setBudgets }) {
    // const [budget, setBudget] = useState(null)
    const {budgetId} = useParams();
    
    const budget = budgets.find(b => b._id === budgetId);
    if (!budget) return null;

    async function handleSubmit(evt) {
        evt.preventDefault();
        const updatedBudget = await budgetsAPI.createExpence(/* expense data, budget._id */)
        const updatedBudgets = budgets.map(b => b._id === updatedBudget._id ? updatedBudget : b);
        setBudgets(updatedBudgets);
    }

    return (
        <>
            <h1>{budget.title}</h1>
            <h1>{budget.date}</h1>
            <h1>{budget.budget}</h1>
        </>
    )
}