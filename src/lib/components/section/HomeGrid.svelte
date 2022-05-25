<script lang="ts">
  import ElementTourcard from '$lib/components/elements/Tourcard.svelte';
  import {onMount} from 'svelte';

  let tours = [];
  let loaded = false;
  let customError = '';

  onMount(async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/projet`);
      const json = await res.json();

      if (json.error) {
        customError = json.error.message;
        loaded = true

        return false;
      }

      tours = json;
      loaded = true;

    } catch (err) {
      console.log({'Error': err});
      customError = JSON.stringify(err);
      loaded = true;
    }
  });
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {#if customError === '' && loaded === true}
        {#each tours as tour}
            <ElementTourcard tour={tour}/>
        {/each}
    {:else if customError !== ''}
        {customError}
    {:else}
        Loading...
    {/if}
</div>
