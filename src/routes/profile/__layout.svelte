<script>
	import { isLoggedIn } from '$lib/auth_utils';

	if (!isLoggedIn()) {
		window.location = '/login';
	}
</script>

<div class="p-4">
	<slot />
</div>
