<script>
  import { _ } from "svelte-i18n";
  import { updateProfile } from "../services/api";

  let newEmail = "";

  async function handleSubmit() {
    try {
      await updateProfile({ email: newEmail });
    } catch (err) {
      console.log(err);
    }
  }
</script>

<div class="container">
  <form class="form" on:submit|preventDefault={handleSubmit}>
    <h1>{$_('common.changeEmail')}</h1>

    <input
      class="input form__input"
      type="email"
      placeholder={$_('enter.newEmail')}
      bind:value={newEmail}
      required />
    <button class="btn btn--basic form__btn">{$_('common.confirm')}</button>
  </form>
</div>
