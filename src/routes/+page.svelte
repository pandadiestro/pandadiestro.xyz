<script lang="ts">
    import { strings } from "./strings";
    import type { PageData } from "./$types";
    import Ghrepo from "$lib/components/ghrepo.svelte";
    import Socials from "$lib/components/socials.svelte";
    import Blinkies from "$lib/components/blinkies.svelte";

    type Props = {
        data: PageData;
    };

    const { data }: Props = $props();
</script>

<svelte:head>
    <meta
        name="description"
        content="pandadiestro's about me page, background, and projects"
    />
    <title>about me</title>
</svelte:head>

<div class="aboutme">{@html strings["main content"]}</div>

<div class="big-separator"></div>

<Socials />

<div class="big-separator"></div>

<Blinkies />

<div class="aboutme">{@html strings["presentation"]}</div>

<div class="big-separator"></div>

{#each data.ghrepos as ghrepo}
    <Ghrepo data={ghrepo} />
    <div class="repo-separator"></div>
{/each}

<style>
    .repo-separator {
        margin-block: 10px;
    }

    .big-separator {
        margin-block: 20px;
    }

    .aboutme {
        width: 100%;
        position: relative;
    }
</style>
