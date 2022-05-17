<script>
	import { onMount } from 'svelte';
	import { tourDetail } from '$lib/data/tour-detail';

	let json;

	onMount(async () => {
		json = await tourDetail();
        console.log(json)
	});
</script>

<pre>{JSON.stringify(json)}</pre>
