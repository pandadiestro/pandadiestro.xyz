<script lang="ts">
    import "$lib/fonts.css"

    let { children } = $props()

    const endpoints: string[] = [
        'whoami',
        'blog',
        'projects',
        'the bucket',
    ]
</script>




{@render children()}

<div class="ends-list">
    {#each endpoints as endpoint}
        <span class="ends-entry">{endpoint}</span>
    {/each}
</div>

<style>
    :global(body) {
        background-color: #151515;
    }

    .ends-list {
        position: relative;
        display: flex;
        margin: auto;
    }

    .ends-entry {
        position: relative;
        margin: auto;

        color: #B4A5A5;
        font-family: Rufina;
        font-size: 20px;
        font-weight: bold;
    }
</style>

