const express = require('express');
const router = express.Router();
const budgetsCtrl = require('../../controllers/api/budgets');
// all routes start with '/api/budgets'


router.get('/', budgetsCtrl.getAllForUser);

router.post('/', budgetsCtrl.create);

router.get('/:budgetId', budgetsCtrl.getBudget)

module.exports = router;