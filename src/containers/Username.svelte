<script>
  import { _ } from "svelte-i18n";
  import { updateProfile } from "../services/api";

  let newUsername = "";

  async function handleSubmit() {
    await updateProfile({ name: newUsername });
  }
</script>

<div class="container">
  <form class="form" on:submit|preventDefault={handleSubmit}>
    <h1>{$_('common.name')}</h1>

    <input
      class="input form__input"
      type="text"
      placeholder={$_('common.enter.newName')}
      bind:value={newUsername}
      required />
    <button class="btn btn--basic form__btn">{$_('common.confirm')}</button>
  </form>
</div>
