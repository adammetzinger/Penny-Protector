import sendRequest from "./send-request";

const BASE_URL = '/api/orders';

export function getAllBudgets() {
    return sendRequest(`${BASE_URL}`);
}