<script>
	const applications = [
		{
			applicant: {
				name: 'Komodo Island',
				email: '4 pax',
				imageUrl: 'https://cdn.getyourguide.com/img/tour/5a438bd7837b4.jpeg/98.jpg'
			},
			date: '2020-01-07',
			dateFull: 'January 7, 2020',
			status: 'warning',
			stage: 'Please complete your Requirement Checklist',
			href: '/customer-bookings/trip/123884'
		},
		{
			applicant: {
				name: 'Australia F1 Grand Prix',
				email: '1 pax',
				imageUrl:
					'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Australia.jpg'
			},
			date: '2020-01-07',
			dateFull: 'January 7, 2020',
			stage: 'Ready to go! Contact your guide',
			href: '#'
		},
		{
			applicant: {
				name: 'Malaysia',
				email: '1 pax',
				imageUrl:
					'https://www.allenovery.com/global/-/media/allenovery/1_images/locations/asia_pacific/malaysia/gem_hero_image_m01_malaysia.jpg?la=fr-FR&h=421&w=674&mw=674&hash=5E748BCF7D7A7BF9A67CCF04A04FE5FB'
			},
			date: '2020-01-07',
			dateFull: 'January 7, 2020',
			stage: 'Ready to go!',
			href: '#'
		}
	];
</script>

<div class="bg-white shadow overflow-hidden sm:rounded-md">
	<ul role="list" class="divide-y divide-gray-200">
		{#each applications as application}
			<li>
				<a sveltekit:prefetch href={application.href} class="block hover:bg-gray-50">
					<div class="flex items-center px-4 py-4 sm:px-6">
						<div class="min-w-0 flex-1 flex items-center">
							<div class="flex-shrink-0">
								<img class="h-12 w-12 rounded-full" src={application.applicant.imageUrl} alt="" />
							</div>
							<div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
								<div>
									<p class="text-sm font-medium truncate">{application.applicant.name}</p>
									<p class="mt-2 flex items-center text-sm text-gray-500">
										<i class="fas fa-calendar" />&nbsp;
										<span class="truncate">{application.dateFull}</span> &nbsp;
										<i class="fas fa-user" />&nbsp;
										<span class="truncate">{application.applicant.email}</span>
									</p>
								</div>
								<div class="md:block">
									<div>
										<p class="mt-2 flex items-center text-sm text-gray-500">
											{#if application.status == 'warning'}
												<i class="fas fa-triangle-exclamation text-warning" />
											{:else}
												<i class="fas fa-circle-check text-success" />
											{/if}
											&nbsp;
											{application.stage}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div />
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>
