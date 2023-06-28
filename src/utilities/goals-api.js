import sendRequest from "./send-request";
const BASE_URL = '/api/goals';


//Index - Retrieve Goal List
export async function getGoalList() {
  return sendRequest(`${BASE_URL}/`);
}

//Create a Goal
export async function createGoal(formData) {
    return sendRequest(`${BASE_URL}/new`, 'POST', formData);
  }

