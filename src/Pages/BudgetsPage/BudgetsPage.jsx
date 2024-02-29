import NewBudgetForm from '../../components/BudgetForm/BudgetForm'
import BudgetList from '../../components/BudgetList/BudgetList'

export default function BudgetsPage({ budgets, user, handleCreateBudget, setBudgets }) {
    return(
        <>
          <NewBudgetForm handleCreateBudget={handleCreateBudget} />
          <BudgetList budgets={budgets} user={user} setBudgets={setBudgets} />
        </>
    );
}