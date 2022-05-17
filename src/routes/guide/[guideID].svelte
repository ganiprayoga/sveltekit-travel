<script context="module">
	import { tourDetail } from '$lib/data/tour-detail';
	export async function load({ params }) {
		const id = params.guideID;
		// const tour = await tourDetail();
		const titleProps = {
			title: tour.tourName,
			breadCrumb: [
				{
					title: 'Home',
					uri: '/'
				},
				{
					title: 'My Profile',
					uri: '/profile/'
				},
				{
					title: 'Customer Booking',
					uri: '/customer-bookings/'
				}
			],
			backURI: '/customer-bookings/'
		};
		return {
			props: {
				guideID: id,
				titleProps: titleProps,
				loaded: true
			}
		};
	}
</script>

<script>
  
</script>