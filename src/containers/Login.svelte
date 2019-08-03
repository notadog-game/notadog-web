<script>
  import Button from "../components/Button.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import { token, getToken } from "../store/auth";

  let email = "";
  let password = "";

  function setUser() {
    getToken({
      email,
      password
    });
  }

  function login() {
    console.log("data :", {
      email,
      password
    });
    getToken({
      email,
      password
    });
  }

  function testFunction(evt) {
    if (evt) {
      console.log("data :", evt);
    } else {
      console.log("no-evt");
    }
    console.log("data :", {
      email,
      password
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
      placeholder="Enter your email"
      on:change={testFunction}
      bind:value={email} />

    <input
      class="input"
      type="password"
      placeholder="Enter your password"
      on:change={testFunction}
      bind:value={password} />

    <Button on:buttonClick={setUser} text={'NOT A DOG!!!'} />

    <div>
      <span>Want to signup?</span>
      <Link to="signup">Signup</Link>
    </div>
    <div>{$token}</div>
  </div>
</div>
