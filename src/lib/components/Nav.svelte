<script context="module">
	import { isLoggedIn, getProfile } from '$lib/auth_utils';
	import { onMount } from 'svelte';
</script>

<script>
	let logStatus;
	let logData;

	onMount(async () => {
		logStatus = await isLoggedIn();
		logData = await getProfile();
	});
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<button tabindex="0" class="btn btn-ghost btn-circle">
				<i class="fa-regular fa-bars-staggered" />
			</button>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/customer-bookings/">My Booking</a></li>

				<a href="/">Home</a>
				<a href="/login">Login</a>
				<a href="/profile">Profile</a>
				<a href="/logout">Logout</a>
				<!--          <li><a>Portfolio</a></li>-->
				<!--          <li><a>About</a></li>-->
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a href="/" class="btn btn-ghost normal-case text-xl">TravelApp</a>
	</div>
	<div class="navbar-end">
		<div class="dropdown dropdown-end">
			<button tabindex="0" class="btn btn-ghost btn-circle">
				<i class="fa-regular fa-user-hair" />
			</button>
			<div tabindex="0" class="dropdown-content bg-base-100 w-64 rounded-box shadow">
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
						<p class="font-bold">User</p>
					</div>
				</div>
				<ul class="menu">
					{JSON.stringify(logStatus)}
					{#if true}
						Login nih
					{/if}
					<li><a>Item 1</a></li>
					<li><a>Item 2</a></li>
					<li><a>Item 3</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>
