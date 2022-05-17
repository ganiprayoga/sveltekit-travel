<script>
	export let itinerary = {};
	export let detailed = false;
	export let tripID;
</script>

<div class="flow-root">
	<ul role="list" class="-mb-8">
		{#each itinerary as activityItem, activityItemIdx}
			<li>
				<div class="relative pb-8">
					{#if activityItemIdx !== itinerary.length - 1 || activityItem.itinerary.length > 0}
						<span
							class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
							aria-hidden="true"
						/>
					{/if}
					<div class="relative flex items-start space-x-3">
						<div class="relative">
							<div
								class="h-10 w-10 rounded-full bg-primary flex items-center justify-center ring-8 ring-white"
							>
								<i class="fas fa-calendar" />
							</div>
						</div>
						<div class="m in-w-0 flex-1">
							<div>
								<div class="">
									<span class="font-medium text-gray-900">{activityItem.title}</span>
								</div>
								<p class="mt-0.5 text-sm text-gray-500">{activityItem.subTitle}</p>
							</div>
						</div>
					</div>
				</div>
			</li>

			{#if activityItem.itinerary !== null}
				{#each activityItem.itinerary as schedule, scheduleIdx}
					<li>
						<div class="relative pb-8">
							{#if scheduleIdx !== activityItem.itinerary.length - 1 || activityItemIdx !== itinerary.length - 1}
								<span
									class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
									aria-hidden="true"
								/>
							{/if}

							<div class="relative flex items-start space-x-3">
								<div>
									<div class="relative px-1">
										<div
											class="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center"
										>
											<i class="far {schedule.icon ? 'fa-' + schedule.icon : `fa-clock`}" />
										</div>
									</div>
								</div>
								<div class="min-w-0 flex flex-row flex-1 items-start py-1.5">
									<div class="text-sm text-gray-500 flex-1">
										<span class="font-medium text-gray-900">
											{schedule.timeStart}
											{#if schedule.timeEnd !== null}
												<span> - {schedule.timeEnd}</span>
											{/if}
										</span>
										<p class="">{schedule.description}</p>
									</div>
									{#if schedule.detailID && detailed}
										<a
											href={`/customer-bookings/itinerary-${tripID}/${schedule.detailID}`}
											class="btn btn-xs btn-primary mt-4 flex-initial shrink"
										>
											Detail
										</a>
									{/if}
								</div>
							</div>
						</div>
					</li>
				{/each}
			{/if}
		{/each}
	</ul>
</div>
