<script context="module">
    import {isLoggedIn, getProfile} from '$lib/auth_utils';

    export async function load({params}) {
        const status = await isLoggedIn();

        return {
            props: {
                loginStatus: status
            }
        };
    }
</script>

<script>
    import {page} from '$app/stores'

    import Transition from '$lib/components/transition.svelte'
    import '$lib/style/global.scss';
    import Nav from '$lib/components/Nav.svelte';
    import {browser} from '$app/env';

    export let loginStatus;
    let loginData;
    let loginInfo;

    if (browser) {
        loginData = localStorage.getItem('profile');

        loginInfo = {
            loginStatus: loginStatus,
            loginData: loginData
        };
    }
</script>

<div class="bg-base-100">
    <Nav/>
    <main>
        <Transition url="{$page.url}">
            <slot/>
        </Transition>
    </main>
</div>
