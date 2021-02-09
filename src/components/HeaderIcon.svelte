<script>
    // IMPORTS //
    import Notification from './Notification.svelte'
    // STORES //
    import { global } from "../stores/globalStore";
    // CONSTANTS //
    const note = [
        {id: 0, text: "Meeting at 5", image: "/images/member-1.jpg", important: true, },
        {id: 1, text: "Meeting Reschduled to 5:20", image: "/images/member-1.jpg", important: true, }
    ]
</script>
 

<style>
    div{
        font-size: 1.5rem;
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

    .notification-list{
       display: flex;
       flex-direction: column;
    }
</style>

<div>
    <i on:click={() => (
        $global.headerActive = false,
        $global.notificationActive = !$global.notificationActive,
        $global.loggedIn = false)}
        class:active={$global.headerActive}
        class="fas fa-bell"/>
        <div class="notification-list">
            {#each note as notifications (notifications.id)}
            <div>
                <Notification {...notifications}/>
            </div>
            {/each}
        </div>
        
</div>