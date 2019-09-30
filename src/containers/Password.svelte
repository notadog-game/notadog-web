<script>
  import { _ } from "svelte-i18n";
  import { updateProfile } from "../services/api";

  let newPassword1 = "";
  let newPassword2 = "";

  async function handleSubmit() {
    try {
      if (newPassword1 !== newPassword2)
        throw new Error("password should be the same");
      await updateProfile({ password: newPassword1 });
    } catch (e) {
      // TODO: Implement client errors
    }
  }
</script>

<div class="container">
  <form class="form" on:submit|preventDefault={handleSubmit}>
    <h1>{$_('common.changePassword')}</h1>

    <input
      class="input form__input"
      type="password"
      placeholder={$_('enter.newPassword')}
      bind:value={newPassword1}
      required />

    <input
      class="input form__input"
      type="password"
      placeholder={$_('enter.repeatPassword')}
      bind:value={newPassword2}
      required />

    <button class="btn btn--basic form__btn">{$_('common.confirm')}</button>
  </form>
</div>
