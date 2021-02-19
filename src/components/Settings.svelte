<script></script>

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
    }

    .settings div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
        width: 100%;
    }


    .settings label {
        display: flex;
        margin-top: 0.75rem;
        width: 58%;
    }

    .settings label:last-child {
        margin-bottom: 1rem;
    }

    .settings input {
        width: 15%;
    }

    .settings h5 {
        color: #616161;
        font-weight: normal;
        width: 83%;
        text-align: center;
        height: 1.5rem;
        margin-right: 0.75rem;
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
    }

    @media (min-width: 768px){

        .settings{
            height: 42vh;
        }
    }
</style>


<div class="settings">
    <div>
        <h5>Send notification email</h5>
        <input type="checkbox" id="toggle" class="checkbox" />
        <label for="toggle" class="switch" />
    </div>

    <div>
        <h5>Make Profile Public</h5>
        <input type="checkbox" id="profile" class="checkbox" />
        <label for="profile" class="switch" />
    </div>
    <button class="btn btn-primary">Save</button>
</div>
