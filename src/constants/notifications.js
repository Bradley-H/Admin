import {writable} from 'svelte/store'


export let note = writable([
    {id: 0, text: "Meeting at 5", image: "/images/Victoria.jpg", important: true, },
    {id: 1, text: "Meeting Rescheduled to 5:20", image: "/images/Victoria.jpg", important: true, }])
