const express = require('express');
const router = express.Router();
const expensesCtrl = require('../../controllers/api/expenses');
// all routes start with '/api'

router.post('/budgets/:budgetId/expenses', expensesCtrl.createExpense);

router.delete('/expenses/:expenseId', expensesCtrl.deleteExpense);

module.exports = router;