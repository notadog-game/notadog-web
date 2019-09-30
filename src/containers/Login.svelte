<script>
  import { _ } from "svelte-i18n";
  import { Link } from "svelte-routing";
  import { tokenService } from "../services/token";
  import { login } from "../services/api";

  let email = "";
  let password = "";

  async function handleSubmit() {
    const token = await login({ email, password });
    tokenService.set(token);
    window.location.replace("/game");
  }
</script>

<div class="container">
  <form class="form" on:submit|preventDefault={handleSubmit}>
    <h1>{$_('common.login')}</h1>

    <input
      class="input form__input"
      type="text"
      placeholder={$_('enter.email')}
      bind:value={email} />

    <input
      class="input form__input"
      type="password"
      placeholder={$_('enter.password')}
      bind:value={password} />

    <button class="btn btn--basic form__btn">{$_('common.login')}</button>

    <div>
      <span>{$_('questions.wantToSignup')}</span>
      <Link to="signup">{$_('common.signup')}</Link>
    </div>
  </form>
</div>
