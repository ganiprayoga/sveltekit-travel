<script lang="ts">
	import PageTitle from '$lib/components/section/page/Title.svelte';
	import { onMount } from 'svelte';

	let name = ' ';

	onMount(async () => {
		const res = await fetch(`${import.meta.env.VITE_API_URL}users/info`, {
			headers: {
				DOLAPIKEY: localStorage.getItem('DOLAPIKEY')
			}
		});
		const json = await res.json();
		name = json.firstname + json.lastname;
	});

	const titleProps = {
		title: 'Welcome, ' + name,
		breadCrumb: [
			{
				title: 'Home',
				uri: '/'
			},
			{
				title: 'My Profile',
				uri: '/profile/'
			}
		],
		backURI: '/profile/'
	};
</script>

<PageTitle {titleProps} />
<h2 class="text-bold text-primary-content">{name}</h2>

<div class="pb-5 border-b border-gray-200 mt-8">
	<h3 class="text-lg leading-6 font-medium text-gray-900">Your tour setting</h3>
</div>

<div class="bg-white shadow overflow-hidden sm:rounded-md">
	<ul class="divide-y divide-gray-200">
		<li>
			<a sveltekit:prefetch href="/customer-bookings" class="block hover:bg-gray-50">
				<div class="flex items-center px-4 py-4 sm:px-6">
					<div class="min-w-0 flex-1 flex items-center">
						<div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
							<div>
								<p class="text-sm font-medium truncate">My Bookings</p>
							</div>
						</div>
					</div>
				</div>
			</a>
		</li>
	</ul>
</div>
