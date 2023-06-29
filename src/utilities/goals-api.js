import sendRequest from "./send-request";
const BASE_URL = '/api/goals';


//GOALS

//Index - Retrieve Goal List
export async function getGoalList() {
  return sendRequest(`${BASE_URL}/`);
}

//Create a Goal
export async function createGoal(formData) {
    return sendRequest(`${BASE_URL}/new`, 'POST', formData);
  }


//TRACK

//Create a milestone
export async function createGoalTrackForm(trackFormData) {
  return sendRequest(`${BASE_URL}/track`, 'POST', trackFormData);
}
