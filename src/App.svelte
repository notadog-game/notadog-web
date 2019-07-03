<script>
  import { Router, Link, Route } from "svelte-routing";

  import Home from "./containers/Home.svelte";
  import Login from "./containers/Login.svelte";
  import Signup from "./containers/Signup.svelte";

  import Game from "./containers/Game.svelte";
  import Profile from "./containers/Profile.svelte";
  import Settings from "./containers/Settings.svelte";

  import Private from "./components/Private.svelte";

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
  </nav>

  <div>
    <Route path="/" component={Home} />
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />

    <Route path="game">
      <Private>
        <Game />
      </Private>
    </Route>

    <Route path="profile/*">
      <Private>
        <Profile />
      </Private>
    </Route>

    <Route path="settings/*">
      <Private>
        <Settings />
      </Private>
    </Route>
  </div>
</Router>
