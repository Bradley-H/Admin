<script>
    // IMPORTS //
    import Notification from "./Notification.svelte";
    // STORES //
    import { global } from "../stores/globalStore";
    // CONSTANTS //
    import {note} from '../constants/notifications.js'

    function RemoveID(e, id) { 
		return note.update(arr => arr.filter(item => item.id !== e.detail))
	}
</script> 

<style>
    div {
        font-size: 1.5rem;
        font-family: var(--primaryFont);    
    }
    .active::after {
        position: absolute;
        content: "";
        width: 6px;
        height: 6px;
        background-color: rgb(0, 255, 13);
        border-radius: 50%;
        bottom: 2.1rem;
    }

    .notification-list {
        display: flex;
        flex-direction: column;
    }
</style>

<div>
    <i
        on:click={() => (
            ($global.headerActive = false),
            ($global.notificationActive = !$global.notificationActive))}
        class:active={$global.headerActive}
        class="fas fa-bell"/>
    <div class="notification-list">
        {#each $note as notifications (notifications.id)}
                <Notification on:Remove={RemoveID} {...notifications} />
        {/each}
    </div>
</div>