<script>
  import { updateProfile } from "../services/api";
  import { handleError } from "../services/errors";

  let newPassword1 = "";
  let newPassword2 = "";

  async function handleSubmit() {
    try {
      if (newPassword1 !== newPassword2)
        throw new Error("password should be the same");
      await updateProfile({ password: newPassword1 });
      console.log("password is updated");
    } catch (e) {
      handleError(e);
    }
  }
</script>

<div class="container">
  <form class="form" on:submit|preventDefault={handleSubmit}>
    <h1>Password</h1>

    <input
      class="input form__input"
      type="password"
      placeholder="new password"
      bind:value={newPassword1}
      required />

    <input
      class="input form__input"
      type="password"
      placeholder="confirm password"
      bind:value={newPassword2}
      required />

    <button class="btn btn--basic form__btn">Confirm</button>
  </form>
</div>
