<script>
  import { _ } from "svelte-i18n";
  import { Link } from "svelte-routing";

  export let url = "";
</script>

<style>
  nav {
    display: grid;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <h1>{$_('common.profile')}</h1>
  <nav class="subnav">
    <Link to="username">{$_('common.changeName')}</Link>
    <Link to="email">{$_('common.changeEmail')}</Link>
    <Link to="password">{$_('common.changePassword')}</Link>
  </nav>
</div>
