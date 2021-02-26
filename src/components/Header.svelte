<script>
    // COMPONENTS //
    import HeaderIcon from "./HeaderIcon.svelte";
</script>

<style>
    header {
        display: flex;
        align-items: center;
        background-color: #7477bf;
        height: 3rem;
        color: #e9e8e8;
        position: fixed;
        width: 100%;
        z-index: 3;
        opacity: 0.9;
    }

    span {
        font-weight: 300;
    }

    .header_logo {
        margin-left: 1rem;
    }

    #logo {
        color: white;
    }

    .header_notification {
        width: 28px;
        height: 30px;
        margin-left: auto;
        margin-right: 1rem;
        cursor: pointer;
    }

    @media (min-width: 768px) {
        .header_notification {
            margin-right: 2rem;
        }
    }

    .header_profile {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem 1rem;
    }

    img {
        border-radius: 50%;
        width: 2.5rem;
    }

    h5,
    h6 {
        margin-left: 1rem;
        color: white;
        font-size: 11px;
    }
    h6 {
        color: white;
        text-shadow: 0 0 2px black;
    }

    .info {
        text-align: center;
        font-family: var(--primaryFont);
    }
</style>



<header class="header">
    <div class="header_logo">
        <h3 id="logo">Your<span>App</span></h3>
    </div>
    <div class="header_notification">
        <HeaderIcon />
    </div>
    <div class="header_profile">
        <img src="images/John.jpg" alt="avatar" />
        <div class="info">
            <h5>John Smith</h5>
            <h6>Tech Lead</h6>
        </div>
    </div>
</header>