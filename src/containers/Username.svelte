<script>
  import { updateProfile } from "../services/api";
  import { globalErrorsHandler } from "../store/errors";

  let newUsername = "";

  async function handleSubmit() {
    try {
      await updateProfile({ name: newUsername });
      console.log("username is updated");
    } catch (e) {
      globalErrorsHandler(e);
    }
  }
</script>

<div class="container">
  <form class="form" on:submit|preventDefault={handleSubmit}>
    <h1>Username</h1>

    <input
      class="input form__input"
      type="text"
      placeholder="new username"
      bind:value={newUsername}
      required />
    <button class="btn btn--basic form__btn">Confirm</button>
  </form>
</div>
