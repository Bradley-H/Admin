<script>
    // REACTIVE STATEMENTS //
    $: active = true;
</script>

<style>
    div {
        display: flex;
        width: 80%;
        justify-content: center;
        align-items: center;
        font-size: 12px;
    }

    h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0.5rem;
        width: 100%;
        color: white;
        padding: 11px 31px;
        background-color: #7477bf;
        font-size: 0.88rem;
        position: relative;
        border-radius: 15px;
    }

    i {
        margin-left: 1rem;
        cursor: pointer;
        font-size: 1.3rem;
        position: absolute;
        right: 9px;
        top: 30%;
    }
    .inactive {
        display: none;
    }

    span {
        font-weight: normal;
        margin-left: 11px;
    }

    @media (min-width: 768px) {
        i{
            top: unset;
        }
    }
</style>


<div class:inactive={!active}>
    <h3>
        Alert:<span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Odio,architecto.</span
        >
        <i class="fas fa-times" on:click={() => (active = !active)} />
    </h3>
</div>