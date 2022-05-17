<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		if (localStorage.getItem('DOLAPIKEY')) {
            console.log('loggedin')
			localStorage.clear();
			window.location = '/login'
		} else {
			window.location = '/login'
		}
	});
</script>
