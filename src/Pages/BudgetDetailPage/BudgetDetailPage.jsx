import { useParams } from "react-router-dom"
import './BudgetDetailPage.css';
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm"
import ExpenseItem from "../../components/ExpenseItem/ExpenseItem";

export default function BudgetDetailPage({ budgets, setBudgets }) {
    const {budgetId} = useParams();

    
    const budget = budgets.find(b => b._id === budgetId);
    if (!budget) return null;

    const expense = budget.expenses.map(e => 
        <ExpenseItem expense={e} budgetId={budgetId} budgets={budgets} setBudgets={setBudgets} />
    )

    const totalExpense = budget.expenses.reduce((total, expense) => {
        return total + expense.cost
    }, 0)
    
    return (
        <>
            <h1>Title: {budget.title}</h1>
            <h1>Date of Budget: {budget.date}</h1>
            <h1>Budget: {budget.budget}</h1>
            <h1>Total Expenses: {totalExpense}</h1>
            <ExpenseForm 
            budgets={budgets} 
            setBudgets={setBudgets} 
            budgetId={budgetId} 
            />
            {expense}
        </>
    )
}