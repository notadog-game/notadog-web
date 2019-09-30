<script>
  import { _ } from "svelte-i18n";
  import { beforeUpdate } from "svelte";
  import { Link } from "svelte-routing";
  import { tokenService } from "../services/token";

  let myToken = "";

  beforeUpdate(() => {
    myToken = tokenService.get();
  });

  function logoutClickHandler(e) {
    e.preventDefault();
    tokenService.remove();
    window.location.replace("/login");
  }
</script>

<style>
  nav {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;

    max-width: 300px;
    background-color: #f0f;
  }
</style>

<nav>
  <Link to="/">{$_('common.home')}</Link>
  {#if myToken}
    <Link to="game">{$_('common.game')}</Link>
    <Link to="profile">{$_('common.profile')}</Link>
    <Link to="settings">{$_('common.settings')}</Link>
    <Link to="statistics">{$_('common.statistics')}</Link>
    <Link to="styleguide">{$_('common.styleguide')}</Link>
    <a href="#" on:click={logoutClickHandler}>{$_('common.logout')}</a>
  {:else}
    <Link to="login">{$_('common.login')}</Link>
    <Link to="signup">{$_('common.signup')}</Link>
  {/if}
</nav>
