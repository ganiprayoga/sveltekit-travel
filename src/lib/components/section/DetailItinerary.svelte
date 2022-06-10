<script>
	import {page} from '$app/stores';

	export let detailed = false;
	export let tripID;

	let customError
	let loaded
	let itine = []
	let uriNow = new URLSearchParams({backuri: $page.url.pathname})


	import {onMount} from 'svelte';

	onMount(async () => {
		try {
			loaded = false;
			const res = await fetch(`${import.meta.env.VITE_API_URL}/projet/${tripID}/tasks`, {
				headers: {DOLAPIKEY: localStorage.getItem('DOLAPIKEY')}
			})
			const json = await res.json();

			if (json.error) {
				customError = json.error.message;
				console.log(customError);
				return false;
			}

			itine = json;
			loaded = true;

		} catch (e) {

		}
	})
</script>

<div class="flow-root">
    <ul role="list" class="-mb-8">
        {#each itine as activityItem, activityItemIdx}
            <li>
                <div class="relative pb-8">
                    {#if activityItemIdx !== itine.length - 1 || activityItem.activities.length > 0}
						<span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                              aria-hidden="true"></span>
                    {/if}
                    <div class="relative flex items-start space-x-3">
                        <div class="relative">
                            <div
                                    class="h-10 w-10 rounded-full bg-primary flex items-center justify-center"
                            >
                                <i class="fas fa-calendar"></i>
                            </div>
                        </div>
                        <div class="m in-w-0 flex-1">
                            <div>
                                <div class="">
                                    <span class="font-medium text-gray-900">Hari ke-{activityItemIdx + 1}</span>
                                </div>
                                <p class="mt-0.5 text-sm text-gray-500">{activityItem.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            {#if activityItem.activities !== null}
                {#each activityItem.activities as schedule, scheduleIdx}
                    <li>
                        <div class="relative pb-8">
                            {#if scheduleIdx !== activityItem.activities.length - 1 || activityItemIdx !== itine.length - 1}
								<span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                      aria-hidden="true"></span>
                            {/if}

                            <div class="relative flex items-start space-x-3">
                                <div>
                                    <div class="relative px-1">
                                        <div
                                                class="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center"
                                        >
                                            <i class="far {schedule.icon ? 'fa-' + schedule.icon : `fa-clock`}"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="min-w-0 flex flex-row flex-1 items-start">
                                    <div class="text-sm text-gray-500 flex-1">
										<span class="font-medium text-gray-900">
											{schedule.timeStart}
                                            {#if schedule.timeEnd !== false}
												<span> - {schedule.timeEnd}</span>
											{/if}
										</span>
                                        <p class="">{schedule.title}</p>
                                    </div>
                                    {#if schedule.description && detailed}
                                        <a href={`/customer-bookings/itinerary-${tripID}/${schedule.id}?${uriNow}`}
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
