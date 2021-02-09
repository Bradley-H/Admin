<script>
      // PROPS //
    export let page;
    import { global } from "../stores/globalStore.js";

    import { loggedIn } from "../constants/sidebar.js";
</script>


<style>
     div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 28px;
        cursor: pointer;
    }
    i {
        color: white;
        font-size: 1.5rem;
        position: relative;
        width: 33px;
    }
    .sideActive::after {
        content: "";
        height: 4px;
        width: 43px;
        position: absolute;
        background-color: #5eff00;
        bottom: -12px;
        left: -13px;
    }

    @media (min-width: 768px) {
        .sideActive::after {
            height: 40px;
            width: 4px;
            left: -15px;
            top: -6px;
        }

        [data-tooltip]::after {
        position: absolute;
        content: attr(data-tooltip);
        color: white;
        background-color: #333;
        padding: .5rem;
        border-radius: .5rem;
        left: 3.2rem;
        opacity: .8;
        pointer-events: none;
        width: max-content;
    }
    }

    @media (max-width: 767px) {
        [data-tooltip]::after {
        position: absolute;
        content: attr(data-tooltip);
        color: white;
        background-color: black;
        padding: .5rem;
        border-radius: .5rem;
        bottom: 3rem;
        opacity: .8;
        pointer-events: none;
    }
    }
</style>


<div
on:click={() => ($global.currentPage = page)} data-tooltip={page}}>
    <i class="fas fa-{$global.loggedIn ? "logout" : "login"}"
        class:sideActive={$global.currentPage === page}/>
</div>