<script>
    // PROPS //
    export let icon; // Icon to be used
    export let num; // Number of subs they have
    export let social; //name of the social media
</script>

<style>
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #7477bf;
        padding: 1rem;
        flex-direction: column;
        width: 33.33333%;
    }

    h3 {
        margin-top: 2px;
        color: #7477bf;
        height: 20px;
    }

    h4 {
        margin-top: 8px;
        color: #858080;
    }

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #7477bf;
        border-radius: 55%;
        width: 70px;
        height: 70px;
        padding: 10px;
    }

    i{
        color: white;
        font-size: 25px;
    }
</style>

<div class="card">
    <div class="icon">
        <i class="fab fa-{icon}" />
    </div>
    <h3>{social}</h3>
    <h4>{num}</h4>
</div>