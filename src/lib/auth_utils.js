import { get, browserSet, browserGet } from '$lib/req_utils';

export async function setProfile() {
    console.log('Setting profile local data');
    const res_profile = await fetch(
        'http://hris-backend.kelolagroup.com/api/index.php/users/info',
        {
            headers: {
                DOLAPIKEY: localStorage.getItem('DOLAPIKEY')
            }
        }
    );
    const json_profile = await res_profile.json();

    browserSet('name', json_profile.firstname + ' ' + json_profile.lastname);
    browserSet('isloggedin', true);
    browserSet('profile', {
        name: json_profile.firstname,
        id: json_profile.id,
        group: json_profile.user_group_list.name
    });
}

export async function isLoggedIn() {
    const islogin = browserGet('isloggedin')
    
    console.log(islogin !== null)
    return (islogin !== null)
}