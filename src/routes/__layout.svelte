<script>
	import '$lib/style/global.scss';
	import Nav from '$lib/components/Nav.svelte';
</script>

<div class="bg-base-100">
	<Nav />

	<main>
		<slot />
	</main>
</div>

