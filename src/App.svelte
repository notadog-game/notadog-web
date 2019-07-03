<script>
  import { Router, Link, Route } from "svelte-routing";

  import Home from "./containers/Home.svelte";
  import Login from "./containers/Login.svelte";
  import Signup from "./containers/Signup.svelte";

  import Game from "./containers/Game.svelte";
  import Profile from "./containers/Profile.svelte";
  import Settings from "./containers/Settings.svelte";
  import Statistics from "./containers/Statistics.svelte";

  import PrivateRoute from "./components/PrivateRoute.svelte";

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
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />

    <PrivateRoute path="game">
      <Game />
    </PrivateRoute>

    <PrivateRoute path="profile/*">
      <Profile />
    </PrivateRoute>

    <PrivateRoute path="settings/*">
      <Settings />
    </PrivateRoute>

    <PrivateRoute path="statistics">
      <Statistics />
    </PrivateRoute>
  </div>
</Router>
