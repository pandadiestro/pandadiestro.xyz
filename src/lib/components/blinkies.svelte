<script lang="ts">
    import drm from "$lib/assets/blinkies/stop-drm.gif"
    import tech from "$lib/assets/blinkies/i-love-tech.gif"
    import music from "$lib/assets/blinkies/i-love-music.gif"
    import svelte from "$lib/assets/blinkies/made-in-svelte.gif"
    import debian from "$lib/assets/blinkies/powered-by-debian.gif"

    type Blinky = {
        src: string,
        alt: string,
    }

    export const blinkies: Blinky[] = [
        {
            src: drm,
            alt: "animated gif that states: 'stop DRM!'",
        },
        {
            src: tech,
            alt: "animated gif that states: 'I love tech!'",
        },
        {
            src: music,
            alt: "animated gif that states: 'I love music'",
        },
        {
            src: svelte,
            alt: "animated gif that states: 'made in svelte'",
        },
        {
            src: debian,
            alt: "animated gif that states: 'powered by debian'",
        },
    ];
</script>

<div class="blinkies">
    {#each blinkies as blinky}
        <span class="blinky">
            <img
                src={blinky.src}
                alt={blinky.alt}
                width="150px"
                height="20px"
            />
        </span>
    {/each}
</div>
<style>
    .blinkies {
        position: relative;
        display: flex;
        width: 100%;

        margin-bottom: 30px;

        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
    }

    .blinky {
        position: relative;
        display: flex;
        margin-block: 1px;
    }

</style>
