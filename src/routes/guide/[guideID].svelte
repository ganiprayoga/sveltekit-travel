<script context="module">
	import {guideDetail} from '$lib/data/guide-detail';

	export async function load({params}) {
		const guideID = params.guideID;
		// const guide = await guideDetail();
		return {
			props: {
				guideID: guideID,
				loaded: true
			}
		};
	}
</script>

<script>
	import PageTitle from '$lib/components/section/page/Title.svelte';
	import LoadTitle from '$lib/components/loading/Title.svelte';
	import {onMount} from "svelte";
	import {dateFormat} from '$lib/constant';

	let person;
	export let guideID;
	let titleProps;
	let loaded = false;

	let guide;
	let customError;

	onMount(async () => {
		try {
			loaded = false;
			const res = await fetch(`${import.meta.env.VITE_API_URL}/members/${guideID}`, {
				headers: {DOLAPIKEY: localStorage.getItem('DOLAPIKEY')}
			})
			const json = await res.json();
			console.log({GuideData: json})

			if (json.error) {
				customError = json.error.message;
				console.log(customError);
				return false;
			}

			person = json;
			person.certificate = [];
			loaded = true;

		} catch (e) {
			console.log(e);
		}
	})

	titleProps = {
		title: 'Title',
		breadCrumb: [
			{
				title: 'Home',
				uri: '/'
			},
			{
				title: 'Customer Booking',
				uri: '/customer-bookings/'
			},
			{
				title: 'Trip Detail',
				uri: '/customer-bookings/trip/2'
			}
		],
		backURI: '/customer-bookings/trip/2/'
	};

	const comments = [
		{
			id: 1,
			name: 'Leslie Alexander',
			date: '4d ago',
			imageId: '1494790108377-be9c29b29330',
			body: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.'
		},
		{
			id: 2,
			name: 'Michael Foster',
			date: '4d ago',
			imageId: '1519244703995-f4e0f30006d5',
			body: 'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.'
		},
		{
			id: 3,
			name: 'Dries Vincent',
			date: '4d ago',
			imageId: '1506794778202-cad84cf45f1d',
			body: 'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.'
		}
	];
</script>
{#if loaded}
    <div class="min-h-full">
        <main class="py-10">
            <!-- Page header -->
            <div class="p-4 pt-0">
                <PageTitle {titleProps} withTitle={false}/>
            </div>

            <div
                    class="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8"
            >
                <div class="flex items-center space-x-5">
                    <div class="flex-shrink-0">
                        <div class="relative">
                            <img class="h-16 w-16 rounded-full" src={person.photo} alt=""/>
                            <span class="absolute inset-0 shadow-inner rounded-full" aria-hidden="true"/>
                        </div>
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold text-gray-900">{person.firstname} {person.lastname}</h1>
                        <p class="text-sm font-medium text-gray-500">
                            Joined since
                            <time datetime="2020-08-25">{dateFormat(person.date_validation)}</time>
                        </p>
                    </div>
                </div>

                <div
                        class="mt-6 flex flex-col justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3"
                >
                    <p class="text-center mb-4">{@html person.array_options.options_f_about}</p>
                    <button type="button" class="btn btn-primary"
                    ><i class="fab fa-whatsapp"/> &nbsp; WA Chat
                    </button
                    >
                </div>
            </div>

            <div
                    class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3"
            >
                <div class="space-y-6 lg:col-start-1 lg:col-span-2">
                    <!-- Description list-->
                    <section aria-labelledby="applicant-information-title">
                        <div class="bg-white shadow sm:rounded-lg">
                            <div class="px-4 py-5 sm:px-6">
                                <h2
                                        id="applicant-information-title"
                                        class="text-lg leading-6 font-medium text-gray-900"
                                >
                                    Guide Information
                                </h2>
                                <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                            </div>
                            <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                    <div class="sm:col-span-1">
                                        <dt class="text-sm font-medium text-gray-500">Origin</dt>
                                        <dd class="mt-1 text-sm text-gray-900"></dd>
                                    </div>
                                    <div class="sm:col-span-1">
                                        <dt class="text-sm font-medium text-gray-500">Email address</dt>
                                        <dd class="mt-1 text-sm text-gray-900">{person.email}</dd>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <dt class="text-sm font-medium text-gray-500">About</dt>
                                        <dd class="mt-1 text-sm text-gray-900">

                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <!--              <div>-->
                            <!--                <a href="#"-->
                            <!--                   class="block bg-gray-50 text-sm font-medium text-gray-500 text-center px-4 py-4 hover:text-gray-700 sm:rounded-b-lg">Read-->
                            <!--                  full application</a>-->
                            <!--              </div>-->
                        </div>
                    </section>

                    <!-- Comments-->
                    <section aria-labelledby="notes-title">
                        <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
                            <div class="divide-y divide-gray-200">
                                <div class="px-4 py-5 sm:px-6">
                                    <h2 id="notes-title" class="text-lg font-medium text-gray-900">Certification</h2>
                                </div>
                                <div class="px-4 py-6 sm:px-6">
                                    <ul class="">
                                        {#each person.certificate as cert, idx}
                                            <li class="py-4 flex">
                                                <div
                                                        class="flex-0 h-10 w-10 rounded-full bg-base-200 align-middle justify-center"
                                                >
                                                    <i class="flex-initial far fa-file-certificate fa-2x"/>
                                                </div>
                                                <div class="flex-1 ml-3">
                                                    <p class="text-sm font-medium text-gray-900">
                                                        {cert.certTitle}
                                                        {#if cert.certVerified}
                                                            <i class="text-info fas fa-badge-check"/>
                                                        {/if}
                                                    </p>
                                                    <p class="text-sm text-gray-500">{cert.certNo}</p>
                                                </div>
                                            </li>
                                        {/each}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section aria-labelledby="timeline-title" class="lg:col-start-3 lg:col-span-1">
                    <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
                        <div class="divide-y divide-gray-200">
                            <div class="px-4 py-5 sm:px-6">
                                <h2 id="" class="text-lg font-medium text-gray-900">Testimoni</h2>
                            </div>
                            <div class="px-4 py-6 sm:px-6">
                                <ul role="list" class="space-y-8">
                                    {#each comments as comment}
                                        <li>
                                            <div class="flex space-x-3">
                                                <div class="flex-shrink-0">
                                                    <img
                                                            class="h-10 w-10 rounded-full"
                                                            :src="`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`"
                                                            alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <div class="text-sm">
                                                        <a href="#" class="font-medium text-gray-900">{comment.name}</a>
                                                    </div>
                                                    <div class="mt-1 text-sm text-gray-700">
                                                        <p>{comment.body}</p>
                                                    </div>
                                                    <div class="mt-2 text-sm space-x-2">
                                                        <span class="text-gray-500 font-medium">{comment.date}</span>
                                                        {' '}
                                                        <span class="text-gray-500 font-medium">&middot;</span>
                                                        {' '}
                                                        <button type="button" class="text-gray-900 font-medium">Reply
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>
{:else}
    <div class="mt-8">
        <LoadTitle/>
        <div class="py-2">
            <div class="bg-white shadow overflow-hidden rounded-lg my-4">
                <div class="px-4 py-5 sm:px-6">
                    <div class="animate-pulse bg-base-200 h-4 w-40 rounded-full"/>
                </div>
                <div class="animate-pulse px-4 pb-4 sm:px-6">
                    <dl class="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                        {#each Array(2) as _, i}
                            <div class="sm:col-span-1 space-y-2">
                                <dt class="bg-base-200 h-3 w-20 rounded-full"/>
                                <dd class="bg-base-200 h-3 rounded-full"/>
                            </div>
                        {/each}
                    </dl>
                </div>
            </div>
        </div>
    </div>
{/if}