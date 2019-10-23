<script>
  import { _ } from "svelte-i18n";
  import { onMount } from "svelte";
  import { users, loadUsersAction } from "../store/users";
  import UserCard from "../components/UserCard.svelte";
  import RefreshButton from "../components/RefreshButton.svelte";

  async function refreshClickHandler() {
    loadUsersAction();
  }

  onMount(() => {
    if (!$users.length) loadUsersAction();
  });
</script>

<style>
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-list {
    overflow: scroll;
    height: calc(100vh - 100px);
  }

  @media (min-width: 768px) {
    .user-list {
      margin-bottom: 25px;
      height: calc(100vh - 125px);
    }
  }

  .user-list > li {
    margin-top: 25px;
  }
</style>

<div class="header">
  <h1>{$_('common.statistics')}</h1>
  <RefreshButton on:click={refreshClickHandler} />
</div>

<div class="container">
  <ul class="user-list">
    {#each $users as user (user.id)}
      <li>
        <UserCard {user} />
      </li>
    {/each}
  </ul>
</div>
