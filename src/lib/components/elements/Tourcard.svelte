<script lang="ts  ">
	export let tour = {};
</script>

<a
	sveltekit:prefetch
	href={'tour/detail/' + tour.tourURI}
	class="card bg-base-100 shadow-sm hover:shadow-xl"
>
	<figure>
		<img class="object-cover w-full aspect-video" src={tour.tourImage[0]} alt="" />
	</figure>
	<div class="card-body p-4">
		<h2 class="card-title text-lg">
			{tour.tourName}
			<!--        <div class="badge badge-secondary">NEW</div>-->
		</h2>
		<p class="items-center">
			<i class="fas fa-star text-primary" />
			{tour.tourRating} <span class="text-sm text-gray-500">{tour.tourReviewNumber} reviews</span>
		</p>
		<p class="font-bold" />
		<p class="text-secondary" />
		<div class="card-actions">
			<span class="text-lg font-semibold"
				>Rp{tour.tourPrice}<span class="font-normal text-sm text-gray-400">/person</span></span
			>
		</div>
	</div>
</a>
