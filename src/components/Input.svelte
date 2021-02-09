<script>
    // PROPS //
    export let type = "input";
</script>

{#if (type = "input")}
    <input type="text" />
{:else}
    <textarea name="" id="" cols="30" rows="10" />
{/if}
