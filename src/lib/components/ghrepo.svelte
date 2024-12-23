<script lang="ts">
    import type { MinimalRepository } from "$lib/types/GhRepo";

    type Props = {
        data: MinimalRepository
    }

    const { data }: Props = $props();
</script>

<div class="card-container">
    <div class="card-name">
        {data.name}
    </div>
    <div class="card-description">
        {data.description}
    </div>
</div>

<style>
    .card-container {
        position: relative;
        display: flex;
        text-align: justify;
    }
</style>

