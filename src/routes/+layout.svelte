<script lang="ts">
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
            <div class="icon">
                <img
                srcset="{DomoriceSrcSet[0]} 100w, {DomoriceSrcSet[1]} 140w"
                sizes="(max-width: 1250px) 100px, 140px"
                style="aspect-ratio: 1/1;"
                alt="domo-kun eating rice"
                />
            </div>
            <div class="label">pandadiestro</div>
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
            </ul>
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
        width: 80%;
		max-width: 750px;
        margin-top: 50px;


        align-items: center;
        text-align: justify;

        font-size: 22px;
    }

    .maincontainer {
        position: relative;
        display: flex;

        width: 100%;
		overflow-y: auto;

        flex-direction: column;
		align-items: center;
        font-family: 'EBGaramond';
        color: #fbf1c7;
    }

    header {
        position: relative;
        display: flex;

		flex-direction: column;
		align-items: center;

        width: 100%;
    }

    .namecontainer {
        display: flex;
        position: relative;

		margin-top: 50px;
        align-items: center;

        bottom: auto;
        left: auto;

        font-size: 55px;
    }

	.namecontainer .icon {
	  display: flex;
	  position: relative;
	}

    .content {
        display: flex;
        position: relative;
        width: 100%;
        margin-block: 50px;

        flex-flow: column;
        align-items: center;

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

        font-size: 32px;
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
