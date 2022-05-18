<script>
	import { onMount } from 'svelte';
	import { isLoggedIn, setProfile } from '$lib/auth_utils';

	onMount(async () => {
		if (await isLoggedIn()) {
			// window.location = '/profile'
		}
	});

	import { get, browserSet } from '$lib/req_utils';

	let username;
	let password;

	async function handleLogin() {
		const json = await get(fetch, 'http://hris-backend.kelolagroup.com/api/index.php/login?', {
			login: username,
			password
		});
		if (json.success.token) {
			browserSet('DOLAPIKEY', json.success.token);
			setProfile();

			// window.location = '/profile';
		}
	}
</script>

<div>
	<input type="text" bind:value={username} name="username" placeholder="Enter your username" />
	<input type="password" bind:value={password} name="password" placeholder="Enter your password" />

	<button on:click={handleLogin}>Login</button>
</div>
