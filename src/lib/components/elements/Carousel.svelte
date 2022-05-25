<script lang="ts">
  export let images
</script>

    <div class="flex-initial md:rounded-lg carousel w-full">
        {#each images as img, key}
            <div id={`slide_${key}`} class="carousel-item relative w-full">
                <img src={img} class="w-full aspect-[2/1] md:aspect-[3/1] object-cover">
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide_${key - 1}`} class="btn btn-circle">❮</a>
                    <a href={`#slide_${key + 1}`} class="btn btn-circle">❯</a>
                </div>
            </div>
            {/each}

    </div>

