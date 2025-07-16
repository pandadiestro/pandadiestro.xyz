<script lang="ts">
    import type { MinimalRepository } from "$lib/types/GhRepo";

    type Props = {
        data: MinimalRepository
    }

    const { data }: Props = $props();
</script>

<a class="wrapper" href={data.html_url} target="_blank">
    <div class="card-container">
        <div class="card-name">
            <span role="none" class="cdot">
                ·
            </span>
            <span>
                {data.name}
            </span>
            <span role="none" class="cdot">
                ·
            </span>
        </div>
        {#if data.description}
            <div class="card-description">
                {data.description}
            </div>
        {/if}
        {#if data.language || data.topics?.length !== 0}
            <div class="extra-sep"></div>
        {/if}
        <div class="card-extra">
            {#if data.language}
                <span>
                    {data.language}
                </span>
            {/if}
            {#if data.topics}
                {#each data.topics as topic}
                    <span>
                        {topic}
                    </span>
                {/each}
            {/if}
        </div>
    </div>

</a>
<style>
    a, a:link, a:visited, a:hover, a:active {
        color: inherit;
        text-decoration: inherit;
        font-weight: inherit;
    }

    .card-container {
        position: relative;
        display: flex;

        width: 400px;

        flex-direction: column;
        text-align: left;

        border-radius: 5px;
        padding: 15px;
        background-color: #151718;

        transition-duration: 0.2s;
    }

    .card-container:hover {
        filter: drop-shadow(2px 2px 2px #050505);
    }

    .card-name {
        margin-bottom: 10px;
    }

    .cdot {
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        color: #ffffff30;
    }

    .card-description {
        font-size: 70%;
    }

    .extra-sep {
        margin-block: 8px;
    }

    .card-extra {
        display: flex;
        flex-flow: row wrap;
    }

    .card-extra>span {
        font-style: italic;
        font-size: 60%;

        padding: 5px;

        border-width: 1px;
        border-radius: 5px;
        border-style: solid;
        border-color: #ffffff20;

        margin: 2px;
    }
</style>

