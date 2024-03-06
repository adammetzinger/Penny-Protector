const express = require('express');
const router = express.Router();
const expensesCtrl = require('../../controllers/api/expenses');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
// all routes start with '/api'

router.post('/budgets/:budgetId/expenses', ensureLoggedIn,expensesCtrl.createExpense);

router.delete('/expenses/:expenseId', ensureLoggedIn,expensesCtrl.deleteExpense);

module.exports = router;