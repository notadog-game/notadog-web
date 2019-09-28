<script>
  import { updateProfile } from "../services/api";

  let newEmail = "";

  async function handleSubmit() {
    await updateProfile({ email: newEmail });
  }
</script>

<div class="container">
  <form class="form" on:submit|preventDefault={handleSubmit}>
    <h1>Email</h1>

    <input
      class="input form__input"
      type="email"
      placeholder="new email"
      bind:value={newEmail}
      required />
    <button class="btn btn--basic form__btn">Confirm</button>
  </form>
</div>
