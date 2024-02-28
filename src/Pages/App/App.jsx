import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import BudgetsPage from '../BudgetsPage/BudgetsPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      { user ?
          <Routes>
            {/* Route components in here */}
            <Route path='/Budgets' element={<BudgetsPage />}/>
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
