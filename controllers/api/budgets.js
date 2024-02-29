const Budget = require('../../models/budget');

module.exports = {
    getAllForUser,
    create,
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