<script context="module">
	import { tourDetail } from '$lib/data/tour-detail';
	export async function load({ params }) {
		const id = params.tripid;
		const tour = await tourDetail();
		return {
			props: {
				tripID: id,
				tour: tour
			}
		};
	}
</script>

<script>
	import PageTitle from '$lib/components/section/page/Title.svelte';
	import ElementCheckbox from '$lib/components/elements/Checkbox.svelte';
	import ContactCard from '$lib/components/elements/ContactCard.svelte';
	import DetailItinerary from '$lib/components/section/DetailItinerary.svelte';
	import DetailGallery from '$lib/components/section/gallery/Detailgrid.svelte';
	import ElementRating from '$lib/components/elements/Rating.svelte';

	import LoadTitle from '$lib/components/loading/Title.svelte';
	import {onMount} from "svelte";

	export let tripID;
	export let tour;

	let loaded = false;
	let titleProps;
	let trip = {};
	let customError = '';

	onMount(async () => {
		try {
			const res = await fetch(`${import.meta.env.VITE_API_URL}/projects/${tripID}`, {
				headers: {
					DOLAPIKEY: localStorage.getItem('DOLAPIKEY')
				}
			});
			const json = await res.json();

			if (json.error) {
				customError = json.error.message;
				loaded = true

				return false;
			}

			trip = json;
			titleProps = {
				title: trip.title,
				breadCrumb: [
					{
						title: 'Home',
						uri: '/'
					},
					{
						title: 'My Profile',
						uri: '/profile/'
					},
					{
						title: 'Customer Booking',
						uri: '/customer-bookings/'
					}
				],
				backURI: '/customer-bookings/'
			};
			console.log(titleProps);
			loaded = true;

		} catch (err) {
			console.log({'Error': err});
			customError = JSON.stringify(err);
			loaded = true;
		}
	});


</script>

<div class="container mx-auto pb-8">
	<div class="p-4">
		{#if loaded}
			<PageTitle {titleProps} />

			<!-- BOOKING OVERVIEW -->
			<div class="bg-white shadow overflow-hidden rounded-lg my-4">
				<div class="px-4 py-5 sm:px-6">
					<h3 class="text-lg leading-6 font-medium text-gray-900">Booking Overview</h3>
				</div>
				<div class="border-t border-gray-200 px-4 py-5 sm:px-6">
					<dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
						<div class="sm:col-span-1">
							<dt class="text-sm font-medium text-gray-500">Date of Tour</dt>
							<dd class="mt-1 text-sm text-gray-900">{tour.bookingDetail.tourDate}</dd>
						</div>
						<div class="sm:col-span-1">
							<dt class="text-sm font-medium text-gray-500">Pax</dt>
							<dd class="mt-1 text-sm text-gray-900">
								{tour.bookingDetail.bookingPax.adult} adult <br />
								{tour.bookingDetail.bookingPax.children} children
							</dd>
						</div>
					</dl>
				</div>
			</div>

			<!-- REQUIREMENT CHECKLIST -->
			<div tabindex="0" class="bg-white collapse shadow overflow-hidden rounded-lg my-4">
				<input type="checkbox" class="peer" />
				<div class="collapse-title px-4 py-5 sm:px-6">
					<h3 class="text-lg leading-6 font-medium text-gray-900">Requirement Checklist</h3>
					<p class="mt-1 max-w-2xl text-sm text-warning">
						Some items need to be confirmed. <i class="far fa-chevron-down" />
					</p>
				</div>
				<div class="collapse-content border-t border-gray-200">
					<div class=" px-4 py-5 sm:px-6">
						<ElementCheckbox />
					</div>
				</div>
			</div>

			<!-- TOUR LEADER -->
			<div class="my-4">
				<ContactCard person={tour.tourLeader} />
			</div>

			<!-- ITINERARY -->
			<div class="bg-white shadow overflow-hidden rounded-lg my-4">
				<div class="px-4 py-5 sm:px-6">
					<h3 class="text-lg leading-6 font-medium text-gray-900">Itinerary</h3>
					<!--          <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>-->
				</div>
				<div class="border-t border-gray-200 px-4 py-5 sm:px-6">
					<dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
						<div class="sm:col-span-2">
							<DetailItinerary itinerary={tour.tourItinerary} detailed={true} {tripID} />
						</div>
					</dl>
				</div>
			</div>

			<!-- TOUR GALLERY -->
			<div class="bg-white shadow overflow-hidden rounded-lg my-4">
				<div class="px-4 py-5 sm:px-6">
					<h3 class="text-lg leading-6 font-medium text-gray-900">Tour Gallery</h3>
					<!--          <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>-->
				</div>
				<div class="border-t border-gray-200 px-4 py-5 sm:px-6">
					<dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
						<div class="sm:col-span-2">
							<DetailGallery images={tour.tourImage} />
						</div>
					</dl>
				</div>
			</div>

			<!-- BOOKING RATING -->
			<div class="bg-white shadow overflow-hidden rounded-lg my-4">
				<div class="px-4 py-5 sm:px-6">
					<h3 class="text-lg leading-6 font-medium text-gray-900">Rating and Feedback</h3>
					<!--          <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>-->
				</div>
				<div class="border-t border-gray-200 px-4 py-5 sm:px-6">
					<ElementRating />
				</div>
			</div>
		{:else}
			<div class="mt-8">
				<LoadTitle />
				<div class="py-2">
					<div class="bg-white shadow overflow-hidden rounded-lg my-4">
						<div class="px-4 py-5 sm:px-6">
							<div class="animate-pulse bg-base-200 h-4 w-40 rounded-full" />
						</div>
						<div class="animate-pulse px-4 pb-4 sm:px-6">
							<dl class="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
								{#each Array(2) as _, i}
									<div class="sm:col-span-1 space-y-2">
										<dt class="bg-base-200 h-3 w-20 rounded-full" />
										<dd class="bg-base-200 h-3 rounded-full" />
									</div>
								{/each}
							</dl>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
