<script></script>

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
        width: 80%;
        height: 1.3rem;
        margin: 0.6rem;
        border-radius: 5px;
    }

    textarea {
        width: 88%;
        margin-bottom: 0.7rem;
        height: 13vh
    }

    button{
        background-color: #7377BF;
        color: white;
        width: 80%;
        border-radius: 5px;
        height: 2rem;
        outline: none;
        border: none;
    }
    @media (min-width: 768px){
div{
    height: 42vh;
}

textarea{
    height: 19vh;
}

button{
    margin-bottom: .5rem;
}
    }
</style>

<div>
    <form on:submit|preventDefault>
        <input type="text" placeholder="Search for User" />
        <textarea cols="20" rows="20" />
        <button>Send Message</button>
    </form>
</div>


