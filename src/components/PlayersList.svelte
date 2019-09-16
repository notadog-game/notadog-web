<script>
  export let users = [];
</script>

<style>

</style>

<ul>
  {#each users as user (user.id)}
    <li>{user.name} - {user.isMakedMove}</li>
  {/each}
</ul>
