<script lang="ts">
  import Placeholder from '$lib/assets/images/placeholder.png';
  import {numberFormat} from '$lib/constant';

  export let tour = {};

  tour.image = tour.image[0];
  tour.rating = 4.2;
  tour.reviewNumber = 132;
  tour.price = (tour.array_options.options_f_price) ? numberFormat(tour.array_options.options_f_price) : "price";

</script>

<a sveltekit:prefetch
   href={'tour/detail/' + tour.id}
   class="card bg-base-100 shadow-sm hover:shadow-xl">
    <img class="object-cover w-full aspect-video" src={tour.image} alt=""/>
    <div class="card-body p-4">
        <h2 class="card-title text-lg">
            {tour.title}
            <!--        <div class="badge badge-secondary">NEW</div>-->
        </h2>
        <p class="items-center">
            <i class="fas fa-star text-primary"/>
            {tour.rating} <span class="text-sm text-gray-500">{tour.reviewNumber} reviews</span>
        </p>
        <p class="font-bold"/>
        <p class="text-secondary"/>
        <div class="card-actions">
			<span class="text-lg font-semibold">
                Rp{tour.price}
                <span class="font-normal text-sm text-gray-400">/person</span>
            </span>
        </div>
    </div>
</a>
