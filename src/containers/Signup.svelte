<script>
  import { _ } from "svelte-i18n";
  import { Link } from "svelte-routing";
  import { signup } from "../services/api";
  import { tokenService } from "../services/token";

  let name = "";
  let email = "";
  let password = "";
  let password1 = "";

  async function handleSubmit() {
    const token = await signup({ name, email, password });
    tokenService.set(token);
  }
</script>

<div class="container">
  <form class="form" on:submit|preventDefault={handleSubmit}>
    <h1>{$_('titles.notadog')}</h1>

    <input
      class="input form__input"
      type="text"
      placeholder={$_('common.enterName')}
      bind:value={name} />

    <input
      class="input form__input"
      type="text"
      placeholder={$_('common.enterEmail')}
      bind:value={email} />

    <input
      class="input form__input"
      type="password"
      placeholder={$_('common.enterPassword')}
      bind:value={password} />

    <input
      class="input form__input"
      type="password"
      placeholder={$_('common.repeatPassword')}
      bind:value={password1} />

    <button class="btn btn--basic form__btn">{$_('common.signup')}</button>

    <div>
      <span>{$_('questions.wantToLogin')}</span>
      <Link to="login">{$_('common.login')}</Link>
    </div>

  </form>
</div>
