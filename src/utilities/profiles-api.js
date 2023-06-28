import sendRequest from "./send-request";
const BASE_URL = '/api/profiles';



//Create a Profile
export async function createProfile(profileFormData) {
    return sendRequest(`${BASE_URL}/new`, 'POST', profileFormData);
  }


