<script context="module">
	export const load = ({ session }) => {
		console.log(session);
		return {
			props: { session }
		};
	};
</script>

<script>
    import { browserGet } from '$lib/req_utils'
	export let session;
</script>

{JSON.stringify(session)}

<pre>
    {browserGet('name')}
</pre>
