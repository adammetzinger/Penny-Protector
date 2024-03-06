const express = require('express');
const router = express.Router();
const budgetsCtrl = require('../../controllers/api/budgets');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
// all routes start with '/api/budgets'

router.get('/', ensureLoggedIn,budgetsCtrl.getAllForUser);

router.post('/', ensureLoggedIn,budgetsCtrl.create);

router.get('/:budgetId', ensureLoggedIn,budgetsCtrl.getBudget);

module.exports = router;