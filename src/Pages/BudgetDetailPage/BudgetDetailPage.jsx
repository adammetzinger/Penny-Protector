import { useParams } from "react-router-dom"
import * as budgetsAPI from "../../utilities/budgets-api"
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm"
import ExpenseItem from "../../components/ExpenseItem/ExpenseItem";

export default function BudgetDetailPage({ budgets, setBudgets }) {
    const {budgetId} = useParams();

    
    const budget = budgets.find(b => b._id === budgetId);
    if (!budget) return null;

    const expense = budget.expenses.map(e => 
        <ExpenseItem expense={e} budgetId={budgetId} budgets={budgets} setBudgets={setBudgets} />
    )
    
    return (
        <>
            <h1>{budget.title}</h1>
            <h1>{budget.date}</h1>
            <h1>{budget.budget}</h1>
            <ExpenseForm 
            budgets={budgets} 
            setBudgets={setBudgets} 
            budgetId={budgetId} 
            />
            {expense}
        </>
    )
}