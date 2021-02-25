<script>
    import { global } from '../stores/globalStore.js'
</script>


<style>
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4rem;
        background-color: lime;
        width: 7rem;
        transform: translate(25vw,0vw);
        text-align: center;
        position: fixed;
        top: 40%;
        padding: .4rem;
        right:6.8rem;
        border-radius: 1rem;
        transition: transform 900ms ease-in-out;
    }

    h5{
        font-size: 11px;
    }

    .active{
        transform: translate(50%, 0);
    }
</style>


<div class:active={$global.messageSent}>
    <h5>Message was sent successfully.</h5>
</div>