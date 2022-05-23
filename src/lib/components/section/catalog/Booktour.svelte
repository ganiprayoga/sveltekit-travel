<script lang="ts">
	import ImagePlaceholder from '$lib/assets/images/placeholder.png'
	import {dateFormat} from '$lib/constant'
	import {onMount} from "svelte";

	let trips = []
	let loaded = false
	let customError = '';

	onMount(async () => {
		try {
			const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`, {
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

			trips = json;
			loaded = true;

		} catch (err) {
			console.log({'Error': err});
			customError = JSON.stringify(err);
			loaded = true;
		}
	})

	const applications = [
		{
			applicant: {
				name: 'Komodo Island',
				email: '4 pax',
				imageUrl: 'https://cdn.getyourguide.com/img/tour/5a438bd7837b4.jpeg/98.jpg'
			},
			date: '2020-01-07',
			dateFull: 'January 7, 2020',
			status: 'warning',
			stage: 'Please complete your Requirement Checklist',
			href: '/customer-bookings/trip/123884'
		},
		{
			applicant: {
				name: 'Australia F1 Grand Prix',
				email: '1 pax',
				imageUrl:
					'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Australia.jpg'
			},
			date: '2020-01-07',
			dateFull: 'January 7, 2020',
			stage: 'Ready to go! Contact your guide',
			href: '#'
		},
		{
			applicant: {
				name: 'Malaysia',
				email: '1 pax',
				imageUrl:
					'https://www.allenovery.com/global/-/media/allenovery/1_images/locations/asia_pacific/malaysia/gem_hero_image_m01_malaysia.jpg?la=fr-FR&h=421&w=674&mw=674&hash=5E748BCF7D7A7BF9A67CCF04A04FE5FB'
			},
			date: '2020-01-07',
			dateFull: 'January 7, 2020',
			stage: 'Ready to go!',
			href: '#'
		}
	];
</script>

<div class="bg-white shadow overflow-hidden sm:rounded-md">
	<ul role="list" class="divide-y divide-gray-200">
		{#each trips as trip}
			<li>
				<a sveltekit:prefetch href={`/customer-bookings/trip/${trip.id}`} class="block hover:bg-gray-50">
					<div class="flex items-center px-4 py-4 sm:px-6">
						<div class="min-w-0 flex-1 flex items-center">
							<div class="flex-shrink-0">
								<img class="h-12 w-12 rounded-full" src={ImagePlaceholder} alt="" />
							</div>
							<div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
								<div>
									<p class="text-sm font-medium truncate">{trip.title}</p>
									<p class="mt-2 flex items-center text-sm text-gray-500">
										<i class="fas fa-calendar" />&nbsp;
										<span class="truncate">{dateFormat(trip.date_start)}</span> &nbsp;
<!--										<i class="fas fa-user" />&nbsp;-->
<!--										<span class="truncate">{application.applicant.email}</span>-->
									</p>
								</div>
<!--								<div class="md:block">-->
<!--									<div>-->
<!--										<p class="mt-2 flex items-center text-sm text-gray-500">-->
<!--											{#if application.status == 'warning'}-->
<!--												<i class="fas fa-triangle-exclamation text-warning" />-->
<!--											{:else}-->
<!--												<i class="fas fa-circle-check text-success" />-->
<!--											{/if}-->
<!--											&nbsp;-->
<!--											{application.stage}-->
<!--										</p>-->
<!--									</div>-->
<!--								</div>-->
							</div>
						</div>
						<div />
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>
