import sendRequest from "./send-request";
const BASE_URL = '/api/profiles';


//Index - /api/profiles/profile - Retrieve Goal List
export async function getProfileList() {
  return sendRequest(`${BASE_URL}/profile`);
}

//Show - Profile by ProfileId /api/profiles/profile/:profileId
export async function getProfileByProfileId(profileId) {
  return sendRequest(`${BASE_URL}/profile/${profileId}`);
}


//Show - Profile by UserId /api/profiles/profile/:userId
export async function getProfileByUserId(userId) {
  return sendRequest(`${BASE_URL}/profile/${userId}`);
}


//CREATE - /api/profiles/new (Create a profile)
export async function createProfile(profileFormData) {
    return sendRequest(`${BASE_URL}/new`, 'POST', profileFormData);
  }


  //Delete - Items on a profile
  export async function deleteGoal(profileId, goalId) {
    return sendRequest(`${BASE_URL}/${profileId}/goals/${goalId}`, 'DELETE');
  }


  //Fetch Existing Profile 
  export async function fetchExistingProfile(userId) {
    return sendRequest(`${BASE_URL}/existing-profile`, 'POST', { userId });
  }

  
