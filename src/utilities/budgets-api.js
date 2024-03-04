import sendRequest from "./send-request";

const BASE_URL = '/api/budgets';

export function getAllForUser() {
    return sendRequest(BASE_URL);
}

export function createBudget(budgets) {
    return sendRequest(BASE_URL, 'POST', budgets);
}

