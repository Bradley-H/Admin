<script>
    // PROPS //
    export let type = "input";
</script>

<style>
    input,
    textarea{
        padding: .7rem;
    }
</style>

{#if (type = "input")}
    <input type="text" />
{:else}
    <textarea cols="30" rows="10" />
{/if}
