import sendRequest from "./send-request";
const BASE_URL = '/api/goals';


//Create a Goal
export async function createGoal(formData) {
    return sendRequest(`${BASE_URL}/new`, 'POST', formData);
  }

