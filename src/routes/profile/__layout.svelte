<script>
    import { isLoggedIn } from '$lib/auth_utils';

	if (!isLoggedIn()) {
		window.location = '/login';
	}
</script>

Welcome to your profile
<slot />
