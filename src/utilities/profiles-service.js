import {getProfileByUserId} from '../utilities/profiles-api';

export async function checkExistingProfile(userId) {
    try {
        const profile = await getProfileByUserId(userId);
        return profile != null;
    } catch (error) {
        console.error('Failed to fetch existing profile:', error.message);
        throw error;
    }
}