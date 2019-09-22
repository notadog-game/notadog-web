<script>
  import { users } from "../store/users";
  import { onMount, onDestroy } from "svelte";
  import { getUsers } from "../services/api";

  async function refreshClickHandler() {
    try {
      const items = await getUsers();
      users.set(items);
    } catch (e) {
      globalErrorsHandler(e);
    }
  }

  onMount(() => {
    if (!$users.length) users.load();
  });
</script>

<style>

</style>

<h1>Statistics</h1>
<div class="container">
  <ul>
    {#each $users as user (user.id)}
      <li>{user.email}</li>
    {/each}
  </ul>

  <button class="btn btn--basic" on:click={refreshClickHandler}>Refresh</button>
</div>
