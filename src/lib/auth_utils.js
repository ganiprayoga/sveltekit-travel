import { get, browserSet, browserGet } from '$lib/req_utils';

export async function isLoggedIn() {
    const islogin = browserGet('isloggedin')
    return (islogin !== null)
}


export async function setProfile() {
    const res_profile = await fetch(
        'http://hris-backend.kelolagroup.com/api/index.php/users/info',
        {
            headers: {
                DOLAPIKEY: localStorage.getItem('DOLAPIKEY')
            }
        }
    );
    const json_profile = await res_profile.json();
    const profile = {
        userName: json_profile.lastname,
        userID: json_profile.id,
        userGroup: json_profile.user_group_list[0].name
    }

    browserSet('name', json_profile.firstname + ' ' + json_profile.lastname);
    browserSet('isloggedin', true);
    browserSet('profile', JSON.stringify(profile));
}

export async function getProfile() {
    const profile = browserGet('profile')
    return profile
}