<script context="module">
	import { onMount } from 'svelte';
	import { isLoggedIn } from '$lib/auth_utils';
</script>

<script>
	onMount(async () => {
		if (await isLoggedIn()) {
			window.location = '/profile';
		}
	});

	import { setProfile } from '$lib/auth_utils';
	import { get, browserSet } from '$lib/req_utils';

	let username;
	let password;
	let signinLoad = false;
	let customError = '';

	async function handleLogin() {
		try {
			signinLoad = true;
			const json = await get(fetch, `${import.meta.env.VITE_API_URL}login?`, {
				login: username,
				password
			});
			if (json.success.token) {
				browserSet('DOLAPIKEY', json.success.token);
				console.log('token sukses');
				await setProfile();

				window.location = '/profile';
			}
		} catch (err) {
			console.log('Terjadi kesalahan: ' + JSON.stringify(err));
			customError = 'Ops! Username or password is incorrect.';
			signinLoad = false;
		}
	}
</script>

<svelte:head>
	<title>Login to TravelApp</title>
</svelte:head>

<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-md w-full space-y-8">
		<div>
			<div class="mx-auto h-12 w-auto mb-4">
				<h1 class="text-center text-4xl font-extrabold text-primary">TravelApp</h1>
			</div>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
				Sign in to your account
			</h2>
			<p class="mt-2 text-center text-sm text-gray-600">
				<!-- Or
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a> -->
			</p>
		</div>
		<form class="mt-8 space-y-6" on:submit={handleLogin} method="dialog">
			<input type="hidden" name="remember" value="true" />
			<div class="rounded-md shadow-sm -space-y-px">
				<div>
					<label for="username" class="sr-only">Username</label>
					<input
						id="username"
						name="username"
						type="text"
						autocomplete="username"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Username"
						bind:value={username}
					/>
				</div>
				<div>
					<label for="password" class="sr-only">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Password"
						bind:value={password}
					/>
				</div>
			</div>

			<div class="flex items-center justify-center">
				<!-- <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
          <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
        </div> -->

				<!-- <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
        </div> -->
				{#if !(customError == '')}
					<div class="text-sm">
						<span class="font-medium text-error">{customError}</span>
					</div>
				{/if}
			</div>

			<div class="flex justify-center w-full">
				{#if !signinLoad}
					<button type="submit" class="btn btn-primary gap-2 btn-block">
						<i class="far fa-arrow-right-to-bracket" />
						Sign in
					</button>
				{:else}
					<div class="flex h-8 w-8">
						<div class="animate-ping h-full w-full rounded-full bg-primary opacity-75" />
					</div>
				{/if}
			</div>
		</form>
	</div>
</div>
