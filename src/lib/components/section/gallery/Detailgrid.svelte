<script>
	export let images = {};
</script>

<div class="grid grid-cols-3 lg:grid-cols-6 gap-2">
	{#each images as img, key}
		<div id={'slide' + key} class="relative w-full">
			<img src={img} alt="An gallery" class="w-full aspect-square object-cover" />
		</div>
	{/each}
</div>
