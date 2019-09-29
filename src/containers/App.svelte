<script>
  import { beforeUpdate } from "svelte";

  import { Router, Link, Route } from "svelte-routing";
  import { getNotificationsContext } from "svelte-notifications";

  import Home from "./Home.svelte";
  import Login from "./Login.svelte";
  import Signup from "./Signup.svelte";
  import Empty from "./Empty.svelte";

  import Game from "./Game.svelte";
  import GameCreate from "./GameCreate.svelte";
  import GameId from "./GameId.svelte";
  import GameJoin from "./GameJoin.svelte";
  import Profile from "./Profile.svelte";
  import Settings from "./Settings.svelte";
  import Statistics from "./Statistics.svelte";
  import Styleguide from "./Styleguide.svelte";

  import { tokenService } from "../services/token";
  import { errors } from "../store/errors";

  const { addNotification, clearNotifications } = getNotificationsContext();

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

  errors.subscribe(text => {
    if (!text) return;

    clearNotifications();
    addNotification({ text, position: "bottom-center" });

    errors.reset();
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
