<script lang="ts" context="module">
  export async function load({params}) {

    const tourID = params.tourID

    let tour = {}
    let customError = ''
    let loaded = false

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/projects/${params.tourID}`, {
        headers: {
          DOLAPIKEY: localStorage.getItem('DOLAPIKEY')
        }
      });
      const json = await res.json();

      if (json.error) {
        customError = json.error.message;
        loaded = true

        return false;
      }

      tour = json;
      loaded = true;

    } catch (err) {
      console.log({'Error': err});
      customError = JSON.stringify(err);
      loaded = true;
    }

    return {
      props: {
        tour: tour,
        customError: customError,
        loaded: loaded,
      }
    }
  }
</script>

<script lang="ts">
  import {onMount} from "svelte";
  import {numberFormat} from '$lib/constant';

  export let tour = {};
  export let customError = '';
  export let loaded = false;

  onMount(async () => {

  });
</script>

<div class="container mx-auto">
    <div class="flex flex-col-reverse md:flex-col">
        <div class="flex-initial prose-sm lg:prose-lg md:mb-4 p-4">
            <div class="hidden md:flex-initial text-sm breadcrumbs">
                <ul class="pl-0 lg:pl-0">
                    <li><a>Indonesia</a></li>
                    <li>{ tour.title }</li>
                </ul>
            </div>
            <h1 class="mb-4 lg:mb-4"> { tour.title }</h1>
            <div>
                <i class="fa-solid fa-star text-primary"></i>{(4.9)} <span class="text-sm text-gray-500">(
                {(21.222)} reviews )</span></div>
        </div>
        <div class="md:px-4">
<!--            <ElementCarousel :images="tour.tourImage"/>-->
        </div>
    </div>
    <div class="px-4 divider"></div>
    <div class="flex flex-col md:flex-row px-4 gap-8">
        <div class="flex-initial w-full md:w-2/3 ">
            <article class="prose-sm lg:prose-lg ">
                {@html tour.description }
            </article>


            <!--MORE TOUR DETAIL-->
            <h2 class="font-medium text-xl mb-4">More Tour Detail</h2>
            <div v-html="tour.tourDetail.tourContent"></div>
        </div>

        <div class="w-full md:w-1/3 ">
            <div class="rounded-lg border border-primary">
                <div class="card-body p-4">
                    <h2 class="card-title">
                        Rp{numberFormat(tour.array_options.options_f_price)}
                    </h2>
                    <div class="card-actions">
                        <button class="btn btn-primary btn-block">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <p></p>
</div>

<strong>Tour</strong>
<code>{JSON.stringify(tour)}</code>
<strong>Custom Error</strong>
<code>{customError}</code>
<strong>Loaded</strong>
<code>{loaded}</code>
