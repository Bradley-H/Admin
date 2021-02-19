import { writable } from 'svelte/store'

export let note = writable([
    {id: 0, text: "Meeting at 5", image: "/images/Victoria.jpg", important: true, },
    {id: 1, text: "Meeting Rescheduled to 5:20", image: "/images/Victoria.jpg", important: true, }])

export let global = writable({
    // IF TRUE, THE HEADER HAS NOTIFICATIONS THAT NEED TO BE READ //
    headerActive: true,
    // CURRENT PAGE ADD'S ACTIVE CLASS TO THE SIDEBAR ICONS //
    currentPage: "Home",
    // IF TRUE, DISPLAY'S THE LIST OF NOTIFICATIONS IN THE HEADER //
    notificationActive: false
})