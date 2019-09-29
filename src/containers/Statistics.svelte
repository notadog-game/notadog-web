<script>
  import { _ } from "svelte-i18n";
  import { onMount } from "svelte";
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

<h1>{$_('common.statistics')}</h1>
<div class="container">
  <ul>
    {#each $users as user (user.id)}
      <li>{user.email}</li>
    {/each}
  </ul>

  <button class="btn btn--basic" on:click={refreshClickHandler}>
    {$_('common.statistics')}
  </button>
</div>
