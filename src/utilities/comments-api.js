import sendRequest from "./send-request";
// const BASE_URL = '/api/goals';
const BASE_URL = '/api/comments';

//Create a Comment - /api/goals/:id/comments
export async function createComment(id, formData) {
    return sendRequest(`${BASE_URL}/${id}/comments`, 'POST', {id, formData });
  }

