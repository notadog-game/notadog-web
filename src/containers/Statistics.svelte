<script>
  import { onMount, onDestroy } from "svelte";
  import { users, loadUsersAction } from "../store/users";

  async function refreshClickHandler() {
    loadUsersAction();
  }

  onMount(() => {
    if (!$users.length) loadUsersAction();
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
