<script>
    // PROPS //
    export let text;
    export let important;
    export let image;
    export let id;
    // STORES //
    import { global } from "../stores/globalStore";
    // SVELTE IMPORTS //
    import {createEventDispatcher} from 'svelte'
    import { slide, fade } from "svelte/transition"
    import {flip} from 'svelte/animate'
    const dispatch = createEventDispatcher();
</script>

<style>
    .notification {
        display: none;
        position: relative;
        width: 15rem;
        text-align: center;
        height: 2.7rem;
        background-color: rgb(85, 82, 82);
        color: white;
        top: 0.6rem;
        right: 3.5rem;
        border-radius: 7px;
        margin-top: 2px;
        padding-top: 5px;
    }

    .notification:hover {
        background-color: rgb(58, 58, 58);
        margin-right: 5px;
    }
    .important::before {
        content: "!";
        width: 15px;
        height: 17px;
        font-size: 1rem;
        background-color: rgb(226, 0, 0);
        position: absolute;
        top: 0.8rem;
        right: 1rem;
    }

    span {
        font-size: 0.66rem;
        margin-bottom: 0.05rem;
    }
    img {
        position: absolute;
        left: 1rem;
        top: 0.5rem;
        border-radius: 50%;
        width: 1.65rem;
    }

    .information {
        margin-bottom: 1rem;
    }

    h5 {
        font-size: 0.5rem;
    }
    .active {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>


<div on:click={() => dispatch('Remove', id)} class="notification" class:active={$global.notificationActive}
     out:slide={{x: 500}}
>
    <div class="img-container">
        <img src={image} alt="avatar" />
    </div>
    <div class="information">
        <span>New Message</span>
        <h5>{text}</h5>
    </div>
    {#if important}
        <div class="important" />
    {/if}
</div>
