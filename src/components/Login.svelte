<script>
    // SVELTE IMPORTS //
    import {fade, fly} from 'svelte/transition';
    // OTHER IMPORTS //
    import {Valid} from '../stores/validation.js'
    // STORES //
    import { global } from "../stores/globalStore.js";
    // BINDING VALUES //
    let username = ""
    let userValid = false; 
    let password = ""
    let passwordValid = false;
    // REACTIVE STATEMENTS //
    $: userValid = !Valid(username)
    $: passwordValid = !Valid(password)
    $: valid = userValid && passwordValid
    // FUNCTIONS //
</script>

<style>
  div{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 250px;
      position: relative;
      flex-direction: column;
      font-family: var(--primaryFont);
      transform: translate(0%, 50%);
  }

  [disabled]{
      background-color: grey;
      cursor: not-allowed;
      
  }

  .banner{
      position: relative;
      width: 310px;
      height: 35px;
      background-color: #8184C4;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
  }

  p{
      position: absolute;
      top: 18%;
      left: 47%;
      color: white;
      z-index: 2;
  }

  form{
      display: flex;
      flex-direction: column;
      width: 310px;
      padding: .5rem 2rem;
      background-color: white;
      height:62%;
      border-radius: .5rem;
      position: relative;
  }
  input{
      margin-bottom:.5rem;
      background-color: #3d3d3d;
      color: white;
      padding: .5rem;
      border: none;
      border-radius: .2rem;
  }

  input:first-child{
      margin-top: 1rem;
  }

    button{
        background-color: #8184C4;
        border: none;
        color: white;
        padding: .55rem;
		}

        p, button{
            font-family: var(--primaryFont);
        }
</style>

<div in:fly={{delay: 500, x:70}}>
    <p>YourApp</p>
    <div class="banner"></div>
    <form on:click|preventDefault in:fade={{delay: 500}}>
        <input type="text" bind:value={username} placeholder="Username">
        <input type="password" bind:value={password} placeholder="Password">
        <button disabled={!valid} on:click={() => $global.currentPage = "Home"}>Submit</button>
    </form>
</div>