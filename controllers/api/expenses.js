const Budget = require('../../models/budget');

module.exports = {
    createExpense,
    deleteExpense,
};

async function createExpense(req, res) {
    try {
        const budget = await Budget.findOne({_id: req.params.budgetId});
        if (!budget) return res.status(401).json('Unauthorized');
        budget.expenses.push(req.body);
        await budget.save();
        res.json(budget);
    } catch (err) {
        console.log(err);
        res.status(400).json('Create Expense Failed');
    }
}

async function deleteExpense(req, res) {
    const budget = await Budget.findOne({'expenses._id': req.params.expenseId, user: req.user._id});
    console.log(`the budget ${budget}`);
    if (!budget) return res.status(401).json('Unauthorized');
    budget.expenses.remove(req.params.expenseId);
    await budget.save();
    res.json(budget);
}