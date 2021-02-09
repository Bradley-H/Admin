<script>
    // PROPS //
    export let text;
    export let label;
</script>

<div>
    <h5>{text}</h5>
    <input type="checkbox" id={label} class="checkbox" />
    <label for={label} class="switch" />
</div>
