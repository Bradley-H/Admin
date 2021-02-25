import { writable } from 'svelte/store'

export let global = writable({
    // IF TRUE, THE HEADER HAS NOTIFICATIONS THAT NEED TO BE READ //
    headerActive: true,
    // CURRENT PAGE ADD'S ACTIVE CLASS TO THE SIDEBAR ICONS //
    currentPage: "Home",
    // IF TRUE, DISPLAY'S THE LIST OF NOTIFICATIONS IN THE HEADER //
    notificationActive: false,
    // IF A MESSAGE WAS SENT //
    messageSent: false
})