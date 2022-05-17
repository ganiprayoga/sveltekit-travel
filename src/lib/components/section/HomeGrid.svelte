<script lang="ts">
	import ElementTourcard from '$lib/components/elements/Tourcard.svelte';
	const tours = [
		{
			tourURI: 'komodo-island-2-day-tour',
			tourName: 'Komodo Islands: Private 2-Day Tour with Phinisi Boat Stay',
			tourImage: ['https://cdn.getyourguide.com/img/tour/5a438bd7837b4.jpeg/98.jpg'],
			tourPrice: 6867000,
			tourRating: 4.4,
			tourReviewNumber: 43
		},
		{
			tourURI: 'ubud-spectacular-waterfalls-tour',
			tourName: 'Ubud: Spectacular Waterfalls Tour',
			tourImage: ['https://cdn.getyourguide.com/img/tour/5b04fba8c9db5.jpeg/146.jpg'],
			tourPrice: 821072,
			tourRating: 4.9,
			tourReviewNumber: 145
		},
		{
			tourURI: 'bali-day-trip-to-east-nusa-penida-atuh-diamond-beach',
			tourName: 'Bali: Day Trip to East Nusa Penida, Atuh & Diamond Beach',
			tourImage: ['https://cdn.getyourguide.com/img/tour/5e15395475327.jpeg/98.jpg'],
			tourPrice: 1049580,
			tourRating: 5.0,
			tourReviewNumber: 1
		},
		{
			tourURI: 'overnight-trip-to-blue-fire-ijen-crater',
			tourName: 'Mount Ijen Volcanic Crater Overnight Trip',
			tourImage: ['https://cdn.getyourguide.com/img/tour/59d336258e3eb.jpeg/98.jpg'],
			tourPrice: 2160500,
			tourRating: 4.7,
			tourReviewNumber: 83
		}
	];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
	{#each tours as tour}
		<ElementTourcard tour={tour} />
	{/each}
</div>
