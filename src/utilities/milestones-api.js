import sendRequest from "./send-request";
const BASE_URL = '/api/goals';


//TRACK

//Index for Goal List
export async function getTrackGoalList() {
    return sendRequest(`${BASE_URL}/track`);
  }
  
//Create a milestone
export async function createGoalTrackForm(trackFormData) {
    return sendRequest(`${BASE_URL}/track`, 'POST', trackFormData);
  }
  