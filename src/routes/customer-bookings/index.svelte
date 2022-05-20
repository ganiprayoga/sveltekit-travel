<script lang="ts">
    import PageTitle from '$lib/components/section/page/Title.svelte';
    import BookTour from '$lib/components/section/catalog/Booktour.svelte'
	const titleProps = {
		title: 'Customer Bookings',
		breadCrumb: [
			{
				title: 'Home',
				uri: '/'
			},
			{
				title: 'My Profile',
				uri: '/profile/'
			}
		],
		backURI: '/profile/'
	};
</script>

<div class="container mx-auto p-4">
	<PageTitle titleProps={titleProps} />

	<div class="pb-5 border-b border-gray-200 mt-8">
		<h3 class="text-lg leading-6 font-medium text-gray-900">Upcoming Tour</h3>
	</div>

	<BookTour />

	<div class="pb-5 border-b border-gray-200 mt-8">
		<h3 class="text-lg leading-6 font-medium text-gray-900">Past Tour</h3>
	</div>
</div>
