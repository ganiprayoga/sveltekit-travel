<script lang="ts" context="module">
  export async function load({params}) {
    const tourID = params.tourID

    return {
      props: {
        tourID: tourID,
      }
    }
  }
</script>

<script lang="ts">
  import {onMount} from "svelte";
  import {numberFormat} from '$lib/constant';
  import ImgPlaceholder from '$lib/assets/images/placeholder.png'
  import Expand from '$lib/components/elements/Expand.svelte'
  import Carousel from '$lib/components/elements/Carousel.svelte'
  import RegFancy from "$lib/components/elements/RegularFancyList.svelte";

  export let tourID;
  const image = [
    ImgPlaceholder, ImgPlaceholder, ImgPlaceholder
  ]

  let tour = {}
  let customError = ''
  let loaded = false

  onMount(async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/projet/${tourID}`);
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
  });
</script>

{#if loaded}
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
                            <Carousel images={image}/>
            </div>
        </div>
        <div class="px-4 divider"></div>
        <div class="flex flex-col md:flex-row px-4 gap-8">
            <div class="flex-initial w-full md:w-2/3 ">
                <article class="prose-sm lg:prose-lg ">
                    <Expand textContent={tour.description}/>
                </article>

                <!--PLACE TO VISIT-->
                <div class="divider"></div>
                <h2 class="font-medium text-xl mb-4">Place to Visit</h2>
                <RegFancy content="{tour.array_options.options_f_place_to_visit}"/>

                <!--FOOD TO TRY-->
                <div class="divider"></div>
                <h2 class="font-medium text-xl mb-4">Fancy Food to Try</h2>
                <Expand textContent="{tour.array_options.options_f_food}"/>

                <!--LOCAL ATTRACTION-->
                <div class="divider"></div>
                <h2 class="font-medium text-xl mb-4">Local Attraction</h2>
                <Expand textContent="{tour.array_options.options_f_attraction}"/>

                <!--FOOD TO TRY-->
                <div class="divider"></div>
                <h2 class="font-medium text-xl mb-4">Price Not Include</h2>
                <RegFancy content="{tour.array_options.options_f_not_include}"/>

                <!--FOOD TO TRY-->
                <div class="divider"></div>
                <h2 class="font-medium text-xl mb-4">Facilities</h2>
                <RegFancy content="{tour.array_options.options_f_facility}"/>

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
{:else }
    Loading...
{/if}


<!--<strong>Tour</strong>-->
<!--<pre>{JSON.stringify(tour, null, 2)}</pre>-->
