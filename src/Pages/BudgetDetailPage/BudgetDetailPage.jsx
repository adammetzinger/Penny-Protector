import { useEffect, useState } from "react"
import * as budgetsAPI from '../../utilities/budgets-api'
import { useParams } from "react-router-dom"

export default function BudgetDetailPage({ budgets }) {
    const [budget, setBudget] = useState(null)
    const {budgetId} = useParams();

    useEffect(function() {
        const budget = budgets.find(b => b._id === budgetId);
        console.log(budget.title)
        if (budget) setBudget(budget);
    }, [budgetId, budgets])

    return (
        <h1>{budget.budget}</h1>
    )
}