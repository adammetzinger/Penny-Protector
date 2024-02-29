const Budget = require('../../models/budget');

module.exports = {
    getAllForUser,
    create,
    getBudget,
};

async function getAllForUser(req, res) {
    const budgets = await Budget.find({user: req.user._id});
    res.json(budgets);
}

async function create(req, res) {
    req.body.user = req.user._id
    const budget = await Budget.create(req.body);
    res.json(budget)
}

async function getBudget(req, res) {
    const budget = await Budget.findOne({_id: req.params.budgetId});
    res.json(budget);
}