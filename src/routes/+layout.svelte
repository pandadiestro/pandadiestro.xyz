<script lang="ts">
    import "$lib/style/fonts.css"
    import { DomoriceSrcSet } from "$lib/assets/domorice/"
    import { page } from "$app/state";

    const { children } = $props();

    const nav_routes = [
        {
            href: "/",
            label: "whoami",
        },
        {
            href: "/blog",
            label: "blog",
        },
        {
            href: "/publications",
            label: "publications",
        },
    ]

    const current_path = $derived(page.url.pathname);
</script>

<div class="maincontainer">
    <header>
        <div class="namecontainer">
            <span>
                <img
                    srcset="{DomoriceSrcSet[0]} 100w, {DomoriceSrcSet[1]} 140w"
                    sizes="(max-width: 1250px) 100px, 140px"
                    alt="domo-kun eating rice"
                    style="aspect-ratio: 1/1;"
                />
            </span>
            <span>pandadiestro</span>
        </div>
    </header>
    <div class="content">
        <nav class="sections">
            <ul class="sectionslist">
                {#each nav_routes as route, index}
                    <li class="sectionelem">
                        <a
                            class:selected={current_path === route.href}
                            href={route.href}
                        >{route.label}</a>
                    </li>
                    {#if index < nav_routes.length - 1}
                        <li class="sectionnone">·</li>
                    {/if}
                {/each}
        </nav>
        <main>
            <div class="separator"></div>
            {@render children()}
        </main>
    </div>
</div>

<style>
    .separator {
        position: relative;
        display: flex;
        width: 20px;
        height: 1px;

        margin-block: 25px;
        align-self: flex-start;

        background-color: #fbf1c7;
    }

    main {
        position: relative;
        display: flex;
        flex-flow: column;
        width: 70%;
        margin-top: 60px;


        align-items: center;
        text-align: justify;

        font-size: 25px;
    }

    .maincontainer {
        position: relative;
        display: flex;

        width: 100%;
        height: 100%;

        flex-direction: row;
        font-family: 'EBGaramond';
        color: #fbf1c7;
    }

    @media screen and (width <= 1250px) {
        .maincontainer {
            height: unset !important;
            overflow-y: auto;
            align-items: center;
            flex-direction: column;
        }

        header {
            height: unset !important;
            width: 100% !important;
            flex-direction: column;
            align-items: center;
        }

        main {
            width: 80% !important;
            max-width: 600px !important;
        }

        .namecontainer {
            align-self: auto !important;
            margin-top: 50px;
            left: auto !important;
            bottom: auto !important;
            font-size: 60px !important;
        }

        .content {
            width: 100% !important;
            overflow: unset !important;
        }
    }

    header {
        position: relative;
        display: flex;

        width: 50%;
        height: 100%;
    }

    .namecontainer {
        display: flex;
        position: relative;

        align-self: end;
        bottom: 50px;
        left: 50px;

        font-size: 96px;
    }

    .content {
        display: flex;
        position: relative;
        width: 50%;
        margin-block: 50px;

        flex-flow: column;
        align-items: center;

        font-size: 32px;

        overflow-y: auto;
        overflow-x: hidden;
    }

    .sections {
        display: flex;
        position: relative;

        height: fit-content;

        justify-self: center;
    }

    .sectionslist {
        display: flex;
        position: relative;

        list-style: none;
        padding: 0px;
        margin: 0px;
        gap: 15px;
    }

    .sectionelem>a {
        cursor: pointer;
        transition-duration: 0.2s;
        user-select: none;
        border-bottom-style: solid;
        border-bottom-width: 2px;
        border-bottom-color: #ffffff00;

        text-decoration: none;
        color: inherit;
    }

    .sectionnone {
        cursor: default;
        user-select: none;
    }

    .sectionelem>a:hover {
        border-bottom-color: #fbf1c7;
    }

    :global(.selected) {
        border-bottom-color: #fbf1c7 !important;
    }
</style>

