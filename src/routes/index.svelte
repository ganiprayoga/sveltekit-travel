<script lang="ts">
	import Hero from '$lib/components/section/hero/Home.svelte';
	import CatalogGrid from '$lib/components/section/HomeGrid.svelte';
</script>

<svelte:head>
	<title>Best TravelApp</title>
</svelte:head>

<Hero />
<div class="bg-base-200 p-4 md:p-0">
	<div class="container mx-auto py-8">
		<h1 class="text-3xl font-bold">Our favorite experiences worldwide</h1>
		<div class="py-8">
			<CatalogGrid />
		</div>
	</div>
</div>
