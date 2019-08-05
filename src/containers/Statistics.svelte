<script>
  import { users } from "../store/users";
  import { onMount, onDestroy } from "svelte";

  import Button from "../components/Button.svelte";

  let usersValue;

  const unsubscribe = users.subscribe(value => {
    usersValue = value;
  });

  function refreshClickHandler() {
    users.load();
  }

  onMount(() => {
    if (!usersValue.length) users.load();
  });

  onDestroy(unsubscribe);
</script>

<style>

</style>

<h1>Statistics</h1>
<div class="container">
  <ul>
    {#each usersValue as user (user.id)}
      <li>{user.email}</li>
    {/each}
  </ul>

  <Button on:buttonClick={refreshClickHandler} text={'Refresh'} />
</div>
