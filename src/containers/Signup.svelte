<script>
  import { Router, Link, Route } from "svelte-routing";
  import { signup } from "../services/api";
  import { handleError } from "../services/errors";

  let name = "";
  let email = "";
  let password = "";
  let password1 = "";

  async function handleSubmit() {
    try {
      const token = await signup({ name, email, password });
      tokenService.set(token);
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
      placeholder="Enter your name"
      bind:value={name} />

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

    <input
      class="input form__input"
      type="password"
      placeholder="Repeat your password"
      bind:value={password1} />

    <button class="btn btn--basic form__btn">Signup</button>

    <div>
      <span>Already onboard?</span>
      <Link to="login">Login</Link>
    </div>

  </form>
</div>
