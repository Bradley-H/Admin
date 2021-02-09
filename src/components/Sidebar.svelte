<script>
    // COMPONENTS //
    import SideIcon from "./SideIcon.svelte";
    //CONSTANTS //
    import {data} from '../constants/sidebar.js'
</script>


<style>
    .sidenav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: 0px;
        background-color: #4d4c72;
        height: 3rem;
        width: 100%;
    }

    @media (min-width: 768px) {
        .sidenav {
            flex-direction: column;
            width: 4rem;
            top: 3rem;
            height: 100%;
            align-items: center;
            margin-top: 0;
            justify-content: flex-start;
            box-shadow: 1px -5px 10px 0px #000000;
        }

        .icon {
            margin-top: 2.4rem;
            margin-bottom: 3rem;
        }
    }
</style>


<aside class="sidenav">
    {#each data as icon (icon.id)}
        <div class="icon">
            <SideIcon {...icon} />
        </div>
    {/each}
</aside>