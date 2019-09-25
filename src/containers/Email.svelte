<script>
  import { updateProfile } from "../services/api";
  import { handleError } from "../services/errors";

  let newEmail = "";

  async function handleSubmit() {
    try {
      await updateProfile({ email: newEmail });
      console.log("email is updated");
    } catch (e) {
      handleError(e);
    }
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
