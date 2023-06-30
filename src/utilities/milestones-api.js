import sendRequest from "./send-request";
const BASE_URL = '/api/milestones';


//TRACK

//Index for Goal List
export async function getTrackGoalList() {
    return sendRequest(`${BASE_URL}/new`);
  }
  
// POST Create a milestone
export async function createGoalTrackForm(trackFormData) {
    return sendRequest(`${BASE_URL}/new`, 'POST', trackFormData);
  }
  