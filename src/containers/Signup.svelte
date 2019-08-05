<script>
  import Button from "../components/Button.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import { signup } from "../services/api";
  import { handleError } from "../services/errors";

  let name = "";
  let email = "";
  let password = "";
  let password1 = "";

  async function signupClickHandler() {
    try {
      const token = await signup({ name, email, password });
      tokenService.set(token);
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
      placeholder="Enter your name"
      bind:value={name} />

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

    <input
      class="input"
      type="password"
      placeholder="Repeat your password"
      bind:value={password1} />

    <Button on:buttonClick={signupClickHandler} text={'NOT A DOG!!!'} />
    <div>
      <span>already onboard?</span>
      <Link to="login">login</Link>
    </div>
  </div>
</div>
