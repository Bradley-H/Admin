<script>
    import Switch from './Switch.svelte'
</script>

<style>
    .settings {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid #bebebe;
        padding: 1rem;
        width: 100%;
        height: 30vh;
        font-family: var(--primaryFont);
    }

    button{
        background-color: #7377BF;
        color: white;
        width: 75%;
        border-radius: 5px;
        height: 35px;
        outline: none;
        border: none;
        position: relative;
        margin-top: 1rem;
        margin-left: .5rem;
        cursor: pointer;
    }


    @media (min-width: 768px){
        .settings{
            height: 250px;
        }

        button{
            position: relative;
            top: 1.7rem;
            
        }
    }
</style>


<div class="settings">
    <Switch label="email" text="Send Email Notifications"/>
    <Switch label="profile" text="Set Profile to Public"/>
        <button class="btn btn-primary">Save</button>
</div>
