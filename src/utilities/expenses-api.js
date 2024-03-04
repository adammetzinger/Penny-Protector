import sendRequest from "./send-request";

const BASE_URL = '/api';

export function createExpense(budgetId, expenseData) {
    return sendRequest(`${BASE_URL}/budgets/${budgetId}/expenses`, 'POST', expenseData);
}

export function deleteExpense(expenseId) {
    return sendRequest(`${BASE_URL}/expenses/${expenseId}`, 'DELETE');
}