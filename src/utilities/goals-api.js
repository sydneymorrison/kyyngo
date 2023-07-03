import sendRequest from "./send-request";
const BASE_URL = '/api/goals';


//GOALS

//Index - Retrieve Goal List = /api/goals/
export async function getGoalList() {
  return sendRequest(`${BASE_URL}/`);
}

//Create a Goal - /api/goals/new
export async function createGoal(formData) {
    return sendRequest(`${BASE_URL}/new`, 'POST', formData);
  }


//Update a Goal -/api/goals/:id
export async function updateGoal(goalId, formData) {
  return sendRequest(`${BASE_URL}/${goalId}`, 'PUT', formData);
}


//Delete a Goal - api/goals/:id
export async function deleteGoal(goalId) {
  return sendRequest(`${BASE_URL}/${goalId}`, 'DELETE');
}

//Index SHOW - Get Goal by single Id /api/goals/:id
export async function getGoalById(goalId) {
  return sendRequest(`${BASE_URL}/${goalId}`);
}


//Return View (form to edit post) - /api/goals/:id/edit
export async function editGoal(goalId) {
  return sendRequest(`${BASE_URL}/${goalId}/edit`);
}



//CREATED NOW

//Create a Comment - /api/goals/:id/comments
// export async function createComment(id, formData) {
//   return sendRequest(`${BASE_URL}/${id}/comments`, 'POST', {id, formData });
// }






