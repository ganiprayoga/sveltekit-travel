<script context="module">
	import { isLoggedIn, getProfile } from '$lib/auth_utils';
	import { onMount } from 'svelte';
</script>

<script>
	let logStatus;
	let logData = {};

	onMount(async () => {
		logStatus = await isLoggedIn();
		logData = await getProfile();
	});
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<label for="tab" tabindex="0" class="btn btn-ghost btn-circle">
				<i class="fa-regular fa-bars-staggered" />
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/">Home</a></li>

			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a href="/" class="btn btn-ghost normal-case text-xl">TravelApp</a>
	</div>
	<div class="navbar-end">
		<div class="dropdown dropdown-end">
			<label for="tab" tabindex="0" class="btn btn-ghost btn-circle">
				<i class="fa-regular fa-user-hair" />
			</label>
			<div tabindex="0" class="dropdown-content bg-base-100 w-64 rounded-box shadow">
				{#if logStatus}
					<div class="flex flex-row p-4">
						<div class="flex-shrink avatar">
							<div class=" w-12 rounded-full">
								<img
									src="https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?s=612x612"
									alt=""
								/>
							</div>
						</div>
						<div class="pl-3">
							<span class="text-base-content">Welcome</span>
							<p class="font-bold">{logData.userName}</p>
						</div>
					</div>
				{/if}
				<ul class="menu">
					{#if logStatus}
						<li>
							<a href="/profile/">
								<span class="w-5"><i class="far fa-user" /></span>
								My Profile
							</a>
						</li>
						<li>
							<a href="/customer-bookings/">
								<span class="w-5"><i class="far fa-ticket" /></span>
								My Bookings
							</a>
						</li>
						<li class="menu-title"><span><hr /></span></li>
						<li>
							<a href="/logout/">
								<span class="w-5"><i class="far fa-arrow-right-from-bracket" /></span>
								Sign Out
							</a>
						</li>
					{:else}
						<li>
							<a href="/login/">
								<span class="w-5"><i class="far fa-arrow-right-to-bracket" /></span>
								Sign In
							</a>
						</li>
					{/if}
				</ul>
			</div>
		</div>
	</div>
</div>
