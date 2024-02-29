import { useEffect } from 'react';
import * as budgetsAPI from '../../utilities/budgets-api'
import BudgetListItem from '../BudgetListItem/BudgetListItem'

export default function BudgetList({ budgets, setBudgets }) {
    const budgetItems = budgets.map(budget => 
        <BudgetListItem key={budget._id} budget={budget} />
    );
    
    useEffect(function() {
        async function getBudgets() {
            const allBudgets = await budgetsAPI.getAllForUser()
            setBudgets(allBudgets)
        }
        getBudgets();
    }, [])

    return (
        <main>
            {budgetItems}
        </main>
    )
}