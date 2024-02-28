const Budget = require('../../models/budget');

module.exports = {
    getAllBudgets,
};

async function getAllBudgets(req, res) {
    const budget = await Budget.find({user: req.user._id});
    res.json(budget);
}