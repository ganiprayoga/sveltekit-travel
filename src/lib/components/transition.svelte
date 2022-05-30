<script lang="ts">
  import {fly, fade} from 'svelte/transition'

  export let url;
</script>

{#key url}
    <div
            in:fly={{x:100, duration:250, delay:300}}
            out:fade={{duration: 50}}
    >
        <slot></slot>
    </div>
{/key}