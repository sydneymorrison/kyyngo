import sendRequest from "./send-request";
// const BASE_URL = '/api/goals';
const BASE_URL = '/api/comments';

// POST - Create a Comment - /api/comments/:id/comments
export async function createComment(id, formData) {
    return sendRequest(`${BASE_URL}/${id}/comments`, 'POST', {id, formData });
  }

// GET // View comments for a post - /
export async function getCommentsById(id) {
  return sendRequest(`${BASE_URL}/${id}/comments`);
}
