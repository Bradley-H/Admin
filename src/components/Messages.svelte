<script>
    import { global } from "../stores/globalStore.js";

    let input = "";
    let para;
    let area = "";

    $: testing = console.log(input.length, area.length);

    function message() {
        $global.messageSent = true;
        setTimeout(() => ($global.messageSent = false), 1500);
    }

    async function searchUser() {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await res.json();
        let matches = users.filter((user) => {
            const regex = new RegExp("^" + input, "gi");
            return user.name.match(regex);
        });
        if (input.length === 0) {
            matches = [];
        }
        console.log(matches);
        if (res.ok) {
            return matches;
        } else {
            throw new Error(data);
        }
    }

    function fill() {
        para = document.querySelectorAll(".user");
        let test = Array.from(para);
        input = test[0].textContent;
        para.forEach((p) => {
            p.style.visibility = "hidden";
        });
    }

    function submit() {
        input = "";
        area = "";
    }
</script>


<style>
    div {
        display: flex;
        flex-direction: column;
        text-align: center;
        border: 1px solid #bebebe;
        padding: 1rem;
        width: 100%;
        height: 30vh;
    }

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    input {
        border: 1px solid #bebebe;
        height: 1.7rem;
        margin: 0.6rem;
        border-radius: 3px;
    }

    button,
    input,
    textarea{
        width: 80%;
    }

    input,
    textarea{
        padding:.75rem;
    }

    textarea {
        margin-bottom: 0.7rem;
        height: 13vh;
    }

    button {
        background-color: #7377bf;
        color: white;
        border-radius: 5px;
        height: 2rem;
        outline: none;
        border: none;
        font-family: var(--primaryFont);
    }
    @media (min-width: 768px) {
        div {
            height: 250px;
        }

        textarea {
            height: 110px;
        }

        button {
            margin-bottom: 0.5rem;
        }

        .disabled {
            background-color: grey;
            cursor: not-allowed;
        }

        .user {
            border: 1px solid grey;
            font-size: 13px;
            padding: 0.2rem 0.75rem;
        }
        .user,
        button{
            font-family: var(--primaryFont);
        }

        .user:hover {
            background-color: lightgray;
        }
    }
</style>


<div>
    <form on:submit|preventDefault={submit}>
        <input type="text" placeholder="Search for User" bind:value={input} />
        {#await searchUser(input)}
            <div />
        {:then users}
            {#each users as user}
                <p on:click={fill} class="user">{user.name}</p>
            {/each}
        {:catch error}
            <p>Error: {error}</p>
        {/await}
        <textarea
            bind:value={area}
            placeholder="Message to user"
            cols="13"
            rows="20"
        />
        <button
            class:disabled={input.length <= 7 && area.length <= 15}
            disabled={input.length <= 7 && area.length <= 15}
            on:click={message}>Send Message</button
        >
    </form>
</div>