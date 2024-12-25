<script lang="ts">
    import "./styles.css"

    const { children } = $props();
</script>

<style>
    :root {
        color-scheme: dark;
    }
</style>

{@render children()}
