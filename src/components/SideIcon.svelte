<script>
    // PROPS //
    export let icon;
    export let page;
    // STORES //
    import { global } from "../stores/globalStore"; 
</script>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 28px;
        cursor: pointer;
    }

    div:hover::after,
    div:hover::before{
        opacity: .8;
        transform: scale(.86);
        font-family: var(--primaryFont);
    }

    .disabled{
        pointer-events: none;
        color: grey;
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

        [data-tooltip]::after{
        position: absolute;
        content: attr(data-tooltip);
        color: white;
        background-color: #333;
        padding: .5rem;
        border-radius: .5rem;
        left: 3.2rem;
        pointer-events: none;
        width: max-content;
        transform: scale(0);
        transition: all 400ms ease-in-out;
        transform-origin: center left;
    }
    [data-tooltip]::before{
        opacity: 0;
        position: absolute;
        content: "";
        left: 2.5rem;
        height: 7px;
        width: 7px;
        border: 7px solid transparent;
        border-right-color: #333;
        transform-origin: top center;
        transition: all 300ms ease-in-out;
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
        transform: scale(0);
        pointer-events: none;
        transition: all 300ms ease-in-out;
    }
    }
</style>
    <div
    on:click={() => ($global.currentPage = page)} data-tooltip={page}
            disabled={page === "Coming Soon"}
            class:disabled={page === "Coming Soon"
        }>
        <i class="fas fa-{icon}"
            class:sideActive={$global.currentPage === page}
            class:disabled={page === "Coming Soon"}/>
    </div>