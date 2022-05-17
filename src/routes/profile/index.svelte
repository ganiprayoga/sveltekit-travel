<script>
	import { onMount } from 'svelte';

	let name;

	onMount(async () => {
		const res = await fetch('http://hris-backend.kelolagroup.com/api/index.php/users/info', {
			headers: {
				DOLAPIKEY: localStorage.getItem('DOLAPIKEY')
			}
		});
		const json = await res.json();
		name = json.firstname + json.lastname;
	});
</script>

<h2>{name}</h2>
