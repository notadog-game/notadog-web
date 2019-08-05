<script>
  import { Router, Link, Route } from "svelte-routing";
  import Button from "../components/Button.svelte";
  import { tokenService } from "../services/token";
  import { login } from "../services/api";
  import { handleError } from "../services/errors";

  let email = "";
  let password = "";

  async function loginClickHandler() {
    try {
      const token = await login({ email, password });
      tokenService.set(token);
      window.location.replace("/game");
    } catch (e) {
      handleError(e);
    }
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
      bind:value={email} />

    <input
      class="input"
      type="password"
      placeholder="Enter your password"
      bind:value={password} />

    <Button on:buttonClick={loginClickHandler} text={'NOT A DOG!!!'} />

    <div>
      <span>Want to signup?</span>
      <Link to="signup">Signup</Link>
    </div>
  </div>
</div>
