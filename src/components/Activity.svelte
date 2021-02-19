<script>
    export let name;
    export let text;
</script>

<style>
    .main_activity {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0.2rem 0.1rem;
        width: 100%;
        border: 1px solid #bebebe;
    }

    img{
        border-radius: 50%;
        width: 4rem;
    }

    .card_icon {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-bottom: 1px solid #bebebe;
        margin-top: 0.9rem;
        width: 95%;
    }

    .card_icon:last-child {
        border-bottom: none;
    }

    .card_info {
        font-size: 0.8rem;
        text-align: center;
    }
    h4, 
    h5{
        font-weight: normal;
    }

    .card_info h4 {
        margin-top: .4rem;
        font-size: 0.75rem;
    }

    .card_info h5 {
        font-size: 0.75rem;
        margin-top: 0.5rem;
    }

    .card_arrow {
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(90deg);
    }

    svg {
        width: 15px;
    }

    path {
        fill: #7477bf;
    }
    a{
        margin-top: .5rem;
        position: absolute;
        transform: translate(-8vh, -20vw) rotate(-90deg)
    }

    @media (min-width: 768px){
        .main_activity{
            width: 93%;
            height: 140px;
            margin: 0;
        }

        a{
            transform: translate(-10vh, -9vw) rotate(-90deg)
        }
    }
</style>


<div class="main_activity main_card">
    <div class="card_icon">
        <img src="images/{name}.jpg" alt="{name}">
        <div class="card_info">
            <h4>{name} {text}</h4>
            <h5>4 Hours ago</h5>
        </div>
        <div class="card_arrow">
            <a href="#!">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M388.4 242L151.6 5.8c-7.8-7.7-20.3-7.7-28.1 0 -7.7 7.8-7.7 20.3 0 28.1l222.7 222.1L123.6 478.1c-7.8 7.7-7.8 20.3 0 28.1 3.9 3.9 9 5.8 14.1 5.8 5.1 0 10.1-1.9 14-5.8l236.8-236.2c3.7-3.7 5.8-8.8 5.8-14S392.2 245.7 388.4 242z" />
            </svg>
        </a>
        </div>
    </div>
</div>