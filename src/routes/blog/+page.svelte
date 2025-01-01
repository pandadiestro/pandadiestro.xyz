<script lang="ts">
    type BlogEntry = {
        title: string,
        url: string,
        date: string,
    }

    const blog_entries: BlogEntry[] = [
        {
            title: "Brainfuck, and how the harvard architecture (didn't really) fail",
            url: "/blog/brainfuck-why-harvard-failed",
            date: "Mon 23 Dec (2024)"
        }
    ];
</script>

<svelte:head>
    <meta name="description" content="pandadiestro's personal blog entries" />
    <title>personal blog</title>
</svelte:head>

{#each blog_entries as entry}
    <div class="article-link">
        <div class="article-title">
            <a
                href={entry.url}
            >{entry.title}</a>
        </div>
        <div class="article-date">{entry.date}</div>
    </div>
{/each}

<style>
    a,
    a:link,
    a:visited,
    a:hover,
    a:active {
        color: inherit;
    }

    .article-link {
        margin-block: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: baseline;
    }

    .article-date {
        position: relative;
        font-size: 80%;
        text-decoration: none;
    }
</style>
