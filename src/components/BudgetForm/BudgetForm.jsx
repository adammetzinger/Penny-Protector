import { useState } from "react";

export default function BudgetForm({ handleCreateBudget }) {
    const [newBudget, setNewBudget] = useState({
        title: '',
        date: '',
        budget: '',
    })

    async function handleSubmit(evt) {
        evt.preventDefault();
        handleCreateBudget(newBudget);
        setNewBudget({
            title: '',
            date: '',
            budget: '',
        })
    }

    function handleChange(evt) {
        const formNewBudget = {...newBudget, [evt.target.name]: evt.target.value};
        setNewBudget(formNewBudget);
    }

    return (
        <form className="BudgetForm" onSubmit={handleSubmit}>
            <label>Title:</label>
            <input 
            name='title'
            value={newBudget.title}
            onChange={handleChange}
            required
            />
            <label>Date for Budget:</label>
            <input 
            name='date'
            value={newBudget.date}
            onChange={handleChange}
            required
            />
            <label>Budget:</label>
            <input 
            name='budget'
            value={newBudget.budget}
            onChange={handleChange}
            type="number"
            required
            />
            <button type="Submit">Submit New Budget</button>
        </form>
    )
}