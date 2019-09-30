<script>
  import { _ } from "svelte-i18n";
  import { beforeUpdate } from "svelte";
  import NavLink from "../components/NavLink.svelte";
  import { tokenService } from "../services/token";
  import CloseIcon from "../components/icons/CloseIcon.svelte";
  import MenuIcon from "../components/icons/MenuIcon.svelte";

  let myToken = "";
  let isNavVisible = true;

  beforeUpdate(() => {
    myToken = tokenService.get();
  });

  function navClickHandler(e) {
    if (e.target.tagName === "A") isNavVisible = false;
  }

  function navButtonClickHandler() {
    isNavVisible = !isNavVisible;
  }

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
    right: 0;
    bottom: 0;

    display: grid;
    grid-gap: 15px;
    justify-items: center;

    padding: 25px 0 calc(50px + 0.5em) 0;

    background-color: rgba(255, 255, 255, 1);
    border-top: 1px solid rgba(0, 0, 0, 0.25);
  }

  .hidden {
    display: none;
  }

  button {
    position: fixed;
    bottom: 0;
    right: 0.5em;

    padding: 10px;

    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    nav {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;

      width: var(--NAD_SIDEBAR_WIDTH);

      grid-template-rows: repeat(10, 48px);
      justify-items: left;

      padding: 265px 0 0 34px;

      border-top: none;
      border-right: 1px solid var(--NAD_BLACK);
    }

    .hidden {
      display: grid;
    }

    button {
      display: none;
    }
  }
</style>

<nav on:click={navClickHandler} class:hidden={!isNavVisible}>
  <NavLink class={'nav-link'} to="/">{$_('common.home')}</NavLink>
  {#if myToken}
    <NavLink class={'nav-link'} to="game">{$_('common.game')}</NavLink>
    <NavLink class={'nav-link'} to="profile">{$_('common.profile')}</NavLink>
    <NavLink class={'nav-link'} to="settings">{$_('common.settings')}</NavLink>
    <NavLink class={'nav-link'} to="statistics">
      {$_('common.statistics')}
    </NavLink>
    <NavLink class={'nav-link'} to="styleguide">
      {$_('common.styleguide')}
    </NavLink>
    <a class="nav-link" href="#" on:click={logoutClickHandler}>
      {$_('common.logout')}
    </a>
  {:else}
    <NavLink class={'nav-link'} to="login">{$_('common.login')}</NavLink>
    <NavLink class={'nav-link'} to="signup">{$_('common.signup')}</NavLink>
  {/if}
</nav>

<button class="btn btn--basic" on:click={navButtonClickHandler}>
  {#if isNavVisible}
    <CloseIcon />
  {:else}
    <MenuIcon />
  {/if}
</button>
