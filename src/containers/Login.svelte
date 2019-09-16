<script>
  import { Router, Link, Route } from "svelte-routing";
  import { tokenService } from "../services/token";
  import { login } from "../services/api";
  import { handleError } from "../services/errors";

  let email = "";
  let password = "";

  async function handleSubmit() {
    try {
      const token = await login({ email, password });
      tokenService.set(token);
      window.location.replace("/game");
    } catch (e) {
      handleError(e);
    }
  }
</script>

<div class="container">
  <form class="form" on:submit|preventDefault={handleSubmit}>
    <h1>Not a Dog!</h1>

    <input
      class="input form__input"
      type="text"
      placeholder="Enter your email"
      bind:value={email} />

    <input
      class="input form__input"
      type="password"
      placeholder="Enter your password"
      bind:value={password} />

    <button class="btn btn--basic form__btn">Login</button>

    <div>
      <span>Want to signup?</span>
      <Link to="signup">Signup</Link>
    </div>
  </form>
</div>
