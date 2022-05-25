<script context="module">
    export const load = ({session}) => {
        // console.log(session);
        return {
            props: {session}
        };
    };
</script>

<script>
    import Expand from '$lib/components/elements/Expand.svelte'

    const content = `<p>In hac habitasse platea dictumst. Quisque aliquet eros nec ligula ornare tristique sed vitae ipsum. Donec
            commodo finibus lobortis. Quisque pellentesque neque in mi ornare pellentesque. Aenean lacinia turpis ut
            diam viverra, vel congue massa dignissim. Vivamus at odio malesuada, sollicitudin mi interdum, lacinia
            est. Cras sodales feugiat orci. Etiam faucibus risus id orci porttitor euismod. Nam commodo vel sem eget
            consequat. Sed iaculis, diam at scelerisque sagittis, ligula nisi dapibus tellus, ac dapibus nisi nulla
            eget ex. Duis a libero nec eros eleifend aliquet. Integer ex dolor, consequat quis tincidunt vel,
            suscipit in dolor. Vestibulum ex nisl, ornare eu luctus vitae, tincidunt et velit.</p>

        <p> Donec et scelerisque odio. Mauris congue sapien in placerat iaculis. Cras porta odio sed enim efficitur,
            at scelerisque sapien elementum. Phasellus ornare orci vitae nisl aliquam, eget posuere erat pharetra.
            Sed bibendum mi sit amet lacus iaculis, consectetur interdum mi vehicula. Nulla accumsan in est quis
            ultrices. Quisque at urna vel sapien tempor ornare non at odio.</p>

        <p>Fusce non mi in dui varius convallis. Pellentesque efficitur at massa at rutrum. Integer tristique libero
            ac leo euismod iaculis. Praesent fermentum velit vitae ipsum iaculis, id tristique ante interdum. Fusce
            congue mattis cursus. Phasellus imperdiet nulla eu leo rutrum tempor. Nulla ut est id justo lobortis
            rutrum eget in arcu. Curabitur condimentum quam sed ipsum commodo pharetra. Cras at ullamcorper tellus,
            non condimentum nunc. Donec mollis tellus eu suscipit finibus. Proin dolor nibh, pharetra a mollis
            vitae, pretium at nibh.</p>`

    let isOpen = false;

    const toggleOpen = () => {
        isOpen = !isOpen;
    }

</script>

<Expand textContent={content} />

<strong>{isOpen}</strong>

<button on:click={toggleOpen}>Button</button>

<div class="menu {isOpen?'expand':''}" on:click={toggleOpen}>
    <a>hover me</a>
    <ul class="list">
        <!-- Create a bunch, or not a bunch, of li's to see the timing. -->
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
    </ul>
</div>


<style>
    .menu .list {
        max-height: 0;
        transition: max-height 0.15s ease-out;
        overflow: hidden;
        background: #d5d5d5;
    }

   .menu.expand .list {
        max-height: 500px;
        transition: max-height 0.25s ease-in;
    }
</style>
