import { useState } from "react"

export default function ExpenseForm() {
    const [newExpense, setNewExpense] = useState({
        title: '',
        cost: '',
        comment: '',
    })

    async function handleSubmit(evt) {
        evt.preventDefault();
        handleCreateExpence(newExpense);
        setNewExpense({
            title: '',
            cost: '',
            comment: '',  
        })
    }

    function handleCreateExpence(evt) {
        const formNewExpence = {...newExpense, [evt.target.name]: evt.target.value};
        setNewExpense(formNewExpence);
    }

    return (
        <h1>Expence</h1>
    )
}