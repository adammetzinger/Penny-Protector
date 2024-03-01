import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import BudgetsPage from '../BudgetsPage/BudgetsPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import BudgetDetailPage from '../BudgetDetailPage/BudgetDetailPage'
import * as budgetsApi from '../../utilities/budgets-api'


export default function App() {
  const [user, setUser] = useState(getUser());
  const [budgets, setBudgets] = useState([]);

  useEffect(function() {
    if (user) {
      budgetsApi.getAllForUser().then(budgets => setBudgets(budgets));
    } else {
      setBudgets([]);
    }
  }, [user]);

  async function handleCreateBudget(newBudget) {
    const budget = await budgetsApi.createBudget(newBudget);
    setBudgets([...budgets, budget]);
  }

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      { user ?
          <Routes>
            {/* Route components in here */}
            <Route path="/budgets" element={<BudgetsPage budgets={budgets} user={user} handleCreateBudget={handleCreateBudget} setBudgets={setBudgets} />}/>
            <Route path='/budgets/:budgetId' element={<BudgetDetailPage budgets={budgets} setBudgets={setBudgets} />} />
          </Routes>
          :
          <Routes>
            {/* Route components in here */}
            <Route path='/auth' element={<AuthPage setUser={setUser}/>}/>
          </Routes>
      }
    </main>
  );
}
