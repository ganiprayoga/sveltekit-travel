import { get, browserSet, browserGet } from '$lib/req_utils';

export async function isLoggedIn() {
    const islogin = browserGet('isloggedin')
    return (islogin !== null)
}


export async function setProfile() {
    const res_profile = await fetch(
        `${import.meta.env.VITE_API_URL}users/info`,
        {
            headers: {
                DOLAPIKEY: localStorage.getItem('DOLAPIKEY')
            }
        }
    );
    const json_profile = await res_profile.json();
    console.log(json_profile)
    const profile = {
        userName: json_profile.lastname,
        userID: json_profile.id
    }

    browserSet('name', json_profile.firstname + ' ' + json_profile.lastname);
    browserSet('isloggedin', true);
    browserSet('profile', JSON.stringify(profile));
}

export async function getProfile() {
    const profile = browserGet('profile')
    return profile
}