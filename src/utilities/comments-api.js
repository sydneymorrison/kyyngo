import sendRequest from "./send-request";
const BASE_URL = '/api/goals';

//Create a Comment - /api/goals/:id/comments
export async function createComment(goalId, formData) {
    return sendRequest(`${BASE_URL}/${goalId}/comments`, 'POST', {goalId, formData });
  }

