import sendRequest from "./send-request";
const BASE_URL = '/api/profiles';


//Index - Retrieve Goal List
export async function getProfileList() {
  return sendRequest(`${BASE_URL}/profile`);
}


//Create a Profile
export async function createProfile(profileFormData) {
    return sendRequest(`${BASE_URL}/new`, 'POST', profileFormData);
  }


  //Delete - Items on a profile
  export async function deleteGoal(profileId, goalId) {
    return sendRequest(`${BASE_URL}/${profileId}/goals/${goalId}`, 'DELETE');
  }
