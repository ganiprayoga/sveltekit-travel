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

  export let tour = {};
  export let customError = '';
  export let loaded = false;

  onMount(async () => {

  });
</script>

<strong>Tour</strong>
<code>{JSON.stringify(tour)}</code>
<strong>Custom Error</strong>
<code>{customError}</code>
<strong>Loaded</strong>
<code>{loaded}</code>
