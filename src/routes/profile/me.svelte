<script context="module">
	export const load = ({ session }) => {
		// console.log(session);
		return {
			props: { session }
		};
	};
</script>

<script>
    import { browserGet } from '$lib/req_utils'
	export let session;
</script>

<h1 class="text-xl">Hello: {import.meta.env.VITE_API_URL}</h1>

{JSON.stringify(session)}

<pre>
    {browserGet('name')}
</pre>
