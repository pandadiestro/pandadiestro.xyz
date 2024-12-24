<script lang="ts">
    import gh_logo from "$lib/assets/socials/github.svg"
    import x_logo from "$lib/assets/socials/x.svg"
</script>

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
<style>
    .socials {
        display: flex;
        flex-flow: row;

        align-items: end;
        gap: 30px;

        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
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
</style>

