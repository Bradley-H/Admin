<script>
    // PROPS //
    export let text;
    export let label;
</script>

<style>
    div{
        display: flex;
    }

    p{
        min-width: 210px;
        font-size: .75rem;
    }
    .switch {
        position: relative;
        display: inline-block;
        min-width: 75px;
        max-width: 75px;
        height: 25px;
        background-color: #4d4c72;
        border-radius: 20px;
        margin-left: 1rem;
        margin-bottom: 1rem;
    }

    .switch::after {
        content: "";
        position: absolute;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: white;
        border: 1px solid #bebebe;
        top: -0px;
        left: 1px;
        transition: all 350ms ease-in-out;
    }

    .switch::before {
        transition: all 350ms ease-in-out;
        position: absolute;
        top: 2px;
        left: 3px;
        content: "";
        color: white;
    }

    .checkbox:checked + .switch::after {
        left: 50px;
    }

    .checkbox:checked + .switch {
        background-color: #7983ff;
    }

    .checkbox {
        display: none;
    }
</style>

<div>
    <p>{text}</p>
    <input type="checkbox" id={label} class="checkbox" />
    <label for={label} class="switch" />
</div>
