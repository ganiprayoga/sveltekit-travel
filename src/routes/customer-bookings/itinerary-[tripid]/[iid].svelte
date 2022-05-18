<script context="module" lang="ts">
	export async function load({ params }) {
		const tripId = params.tripid;
		const iid = params.iid;
		return {
			props: {
				tripId: tripId,
				iid: iid
			}
		};
	}
</script>

<script lang="ts">
	import { itineraryDetail } from '$lib/data/itinerary-detail';
	import { onMount } from 'svelte';

	import LoadTitle from '$lib/components/loading/Title.svelte';

	import PageTitle from '$lib/components/section/page/Title.svelte';

	export let tripId;
	export let iid;
	let itinerary;
	let loaded = false;

	const titleProps = {
			title: '',
			breadCrumb: [
				{
					title: 'My Profile',
					uri: '/profile/'
				},
				{
					title: 'Customer Booking',
					uri: '/customer-bookings/'
				},
				{
					title: 'Trip',
					uri: '/customer-bookings/trip/' + tripId
				}
			],
			backURI: '/customer-bookings/trip/' + tripId
		};

	onMount(async () => {
		itinerary = await itineraryDetail(iid);
		titleProps.title = itinerary.title;
		loaded = true;
	});
</script>

<div class="container lg:w-1/2 mx-auto p-4 bg-base-100">
	{#if loaded}
		<PageTitle {titleProps} />
		<div class="my-4 prose">
			{@html itinerary.content}
		</div>
	{:else}
		<LoadTitle />
	{/if}
</div>
