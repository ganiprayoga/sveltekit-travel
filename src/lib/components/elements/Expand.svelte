<script>
    export let textContent;
    export let maxHeight = '100px';
    export let moreText = 'Read more';
    export let lessText = 'See less';

    let isOpen = false;
    let contentStyle = `max-height: ${maxHeight};`
    let buttonText

    $: contentStyle = isOpen ? 'height: auto;' : `height: ${maxHeight};`
    $: buttonText = isOpen ? lessText : moreText

    const handleOpen = () => {
        isOpen = !isOpen
    }
</script>

<div class="expand {isOpen?'expanded':''}" on:click={handleOpen}>
    <div class="expand-content">
        <div class="prose">
            {@html textContent}
        </div>
        <!-- Create a bunch, or not a bunch, of li's to see the timing. -->
    </div>
</div>

<button class="btn btn-ghost p-0" on:click={handleOpen}>{buttonText}</button>


<style>
    .expand .expand-content {
        max-height: 128px;
        transition: max-height 0.35s ease-out;
        overflow: hidden;

        -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(black), to(transparent));
        -webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
        mask-image: -webkit-gradient(linear, left top, left bottom, from(black), to(transparent));
        mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
    }

    .expand.expanded .expand-content {
        max-height: fit-content;
        transition: max-height 0.55s ease-in;
        mask: none;
        -webkit-mask: none;
        @apply mb-4;
    }
</style>
