<script>
  import { Router, Link, Route } from "svelte-routing";

  import Home from "./containers/Home.svelte";
  import Login from "./containers/Login.svelte";
  import Signup from "./containers/Signup.svelte";
  import Empty from "./containers/Empty.svelte";

  import Game from "./containers/Game.svelte";
  import Profile from "./containers/Profile.svelte";
  import Settings from "./containers/Settings.svelte";
  import Statistics from "./containers/Statistics.svelte";

  export let url = "";
</script>

<style>

</style>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="login">Login</Link>
    <Link to="signup">Signup</Link>
    <Link to="game">Game</Link>
    <Link to="profile">Profile</Link>
    <Link to="settings">Settings</Link>
    <Link to="statistics">Statistics</Link>
  </nav>

  <div>
    <Route path="/" component={Home} />

    {#if true}
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
    {:else}
      <Route path="/game" component={Game} />
      <Route path="profile/*" component={Profile} />
      <Route path="settings/*" component={Settings} />
      <Route path="statistics" component={Statistics} />
    {/if}
    <Route path="*" component={Empty} />
  </div>
</Router>
