<script>
  import Button from "../components/Button.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import { token, getToken } from "../store/auth";

  let name = "";
  let email = "";
  let password = "";
  let password1 = "";

  function setUser() {
    getToken({
      name,
      email,
      password,
      password1
    });
  }

  function testFunction(evt) {
    if (evt) {
      console.log("data :", evt);
    } else {
      console.log("no-evt");
    }
    console.log("data :", {
      name,
      email,
      password,
      password1
    });
  }
</script>

<style>
  .sign-up {
    margin: 0 auto;
    max-width: 500px;
  }
  :global(input) {
    margin-bottom: 5px;
  }
  :global(button) {
    margin: 34px 0 77px;
  }
</style>

<div class="container">
  <div class="sign-up">
    <h1>Not a Dog!</h1>

    <input
      class="input"
      type="text"
      placeholder="Enter your name"
      on:change={testFunction}
      bind:value={name} />

    <input
      class="input"
      type="text"
      placeholder="Enter your email"
      on:change={testFunction}
      bind:value={email} />

    <input
      class="input"
      type="password"
      placeholder="Enter your password"
      on:change={testFunction}
      bind:value={password} />

    <input
      class="input"
      type="password"
      placeholder="Repeat your password"
      on:change={testFunction}
      bind:value={password1} />

    <Button on:buttonClick={setUser} text={'NOT A DOG!!!'} />
    <div>
      <span>already onboard?</span>
      <Link to="login">login</Link>
    </div>
    <div>{$token}</div>
  </div>
</div>
