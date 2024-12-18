<script>
    import { strings } from "./strings"
    import gh_logo from "$lib/assets/github.svg"
    import x_logo from "$lib/assets/x.svg"
    import { cards } from "$lib/cards"
    import { blinkies } from "$lib/blinkies"
</script>

<svelte:head>
    <meta name="description" content="pandadiestro's about me page, background, and projects"/>
    <title>about me</title>
</svelte:head>

<div class="aboutme">{@html strings["main content"]}</div>
<div class="socials">
    <a
        style="display: contents;"
        href="https://github.com/pandadiestro"
        target="_blank"
    >
        <img style="height: 55px;" src={gh_logo} alt="github logo" />
    </a>
    <a
        style="display: contents;"
        href="https://x.com/pandadiestro"
        target="_blank"
    >
        <img
            style="height: 50px;"
            src={x_logo}
            alt="x, formerly twitter, logo"
        />
    </a>
</div>
<div class="blinkies">
    {#each blinkies as blinky}
        <span class="blinky">
            <img
                src={blinky.src}
                alt={blinky.alt}
                width="180px"
                height="24px"
            />
        </span>
    {/each}
</div>
<div class="cards">
    {#each cards as card}
        <a class="cardelem" href={card.href}>
            <img src={card.src} alt={card.alt} />
        </a>
    {/each}
</div>

<style>
    .aboutme {
        position: relative;
    }

    .socials {
        display: flex;
        flex-flow: row;

        align-items: end;
        gap: 30px;
        margin-block: 60px;

    }

    :global(.mailto){
        display: inline-block;
        text-decoration: none;
        font: inherit;
        color: inherit;
        border-style: solid;
        border-width: 1px;
        border-color: #ffffff00;
        transition-duration: 0.1s;
    }

    :global(.mailto):hover {
        border-bottom-color: #fbf1c730;
    }

    .socials>a>img {
        transition-duration: 0.1s;
    }

    .socials>a>img:hover {
        filter: drop-shadow(3px 3px 5px #050505);
    }

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

    .cards {
        display: flex;
        flex-direction: column;
        max-width: 500px;
    }

    .cardelem {
        display: flex;
        position: relative;
        margin-block: 15px;
    }

    .cardelem>img {
        width: 100%;
        border-radius: 5px;
    }
</style>

