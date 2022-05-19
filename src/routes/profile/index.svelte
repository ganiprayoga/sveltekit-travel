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

<div class="dropdown">
  <label tabindex="0" class="btn m-1">Click</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>