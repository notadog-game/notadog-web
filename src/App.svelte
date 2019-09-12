<script>
  import { beforeUpdate } from "svelte";

  import { Router, Link, Route } from "svelte-routing";
  import Home from "./containers/Home.svelte";
  import Login from "./containers/Login.svelte";
  import Signup from "./containers/Signup.svelte";
  import Empty from "./containers/Empty.svelte";

  import Game from "./containers/Game.svelte";
  import GameCreate from "./containers/GameCreate.svelte";
  import GameId from "./containers/GameId.svelte";
  import GameJoin from "./containers/GameJoin.svelte";
  import Profile from "./containers/Profile.svelte";
  import Settings from "./containers/Settings.svelte";
  import Statistics from "./containers/Statistics.svelte";
  import Styleguide from "./containers/Styleguide.svelte";

  import { tokenService } from "./services/token";

  export let url = "";

  let myToken = "";

  function logoutClickHandler(e) {
    e.preventDefault();
    tokenService.remove();
    window.location.replace("/login");
  }

  beforeUpdate(() => {
    myToken = tokenService.get();
  });
</script>

<style>

</style>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    {#if myToken}
      <Link to="game">Game</Link>
      <Link to="profile">Profile</Link>
      <Link to="settings">Settings</Link>
      <Link to="statistics">Statistics</Link>
      <Link to="styleguide">Styleguide</Link>
      <a href="#" on:click={logoutClickHandler}>Logout</a>
    {:else}
      <Link to="login">Login</Link>
      <Link to="signup">Signup</Link>
    {/if}
  </nav>

  <div>
    <Route path="/" component={Home} />
    {#if myToken}
      <Route path="game" component={Game} />
      <Route path="game/:id" let:params; component={GameId} />
      <Route path="game/create" component={GameCreate} />
      <Route path="game/join" component={GameJoin} />
      <Route path="profile/*" component={Profile} />
      <Route path="settings/*" component={Settings} />
      <Route path="statistics" component={Statistics} />
      <Route path="styleguide" component={Styleguide} />
    {:else}
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
    {/if}
    <Route path="*" component={Empty} />
  </div>
</Router>
