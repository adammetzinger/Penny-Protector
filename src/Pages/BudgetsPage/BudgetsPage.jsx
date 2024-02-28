import BudgetList from '../../components/BudgetList/BudgetList'
import Budgets from '../../../models/budget'

export default function BudgetsPage({ user }) {
    return(
        <>
          <BudgetList  budgets={Budgets.filter(budget => budget.user = user)} />  
        </>
    );
}