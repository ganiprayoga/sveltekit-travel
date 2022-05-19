<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		if (localStorage.getItem('DOLAPIKEY')) {
			localStorage.clear();
			window.location = '/login';
		} else {
			window.location = '/login';
		}
	});
</script>

<svelte:head>
	<title>Signing out from TravelApp</title>
</svelte:head>

<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-md w-full space-y-8">
		<div>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-base-content">Signing you out</h2>
			<div class="mt-2 p-4 flex justify-center">
				<div class="flex h-8 w-8">
					<div class="animate-ping h-full w-full rounded-full bg-primary opacity-75" />
				</div>
				<!-- Or
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a> -->
			</div>
		</div>
	</div>
</div>
