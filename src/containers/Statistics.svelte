<script>
  import { users } from "../store/users";
  import { onMount } from "svelte";

  function refreshClickHandler() {
    users.load();
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
