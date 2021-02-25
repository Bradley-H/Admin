<script>
    export let name;
    export let email;
    export let date;
    export let role;
</script>

<style>
    .main_members {
        display: flex;
        flex-direction: column;
        margin: 0.2rem .1rem;
    }

    .main_card {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        padding: 0.88rem;
        width: 160px;
    }

    a{
        text-decoration: none;
        font-size: .68rem;
        font-family: monospace;
    }

     .members {
        display: flex;
        justify-content: space-evenly;
        margin-top: 0.2rem;
        border: 1px solid #bebebe;
        width: 100%;
    }

    h4 {
        font-size: 0.7rem;
    }

    .member_icon {
        display: flex;
        justify-content: center;
        margin-top: 0.3rem;
        width: 50px;
    }

    .member_info{
        text-align: center;
    }

    .member_info h4 {
        margin-top: .2rem;
        font-size: 0.71rem;
    }

    .member_info h5 {
        font-size: .58rem;
        margin: .3rem 0;
    }

   .member_date {
       margin: .2rem 0rem;
        font-size: .85rem;
    }

    img{
        width: 50px;
        border-radius: 50%;
    }

    @media (min-width:900px) {
        .main_members{
            width: 93%;
            height: 140px;
            margin: 0;
        }
        .main_card{
            flex-direction: row;
        }

        .members{
            margin: 0;
            height: 100%;
        }
        .member_icon{
            margin-right: .5rem;
        }

        .member_info{
            height: 62%;
        }
    }
</style>


<div class="main_members">
    <div class="members">
        <div class="main_card">
            <div class="member_icon">
                <img src="images/{name}.jpg" alt={name} />
            </div>
            <div class="member_info">
                <h4>{name}</h4>
                <a href="mailto:{email}">{email}</a>
                <h5>Job: {role}</h5>
                <div class="member_date">
                    <h5>{date}</h5>
                </div>
            </div>
        </div>
    </div>
</div>