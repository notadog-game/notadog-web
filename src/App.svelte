<script>
  import Button from "./components/Button.svelte";
  import Input from "./components/Input.svelte";
  import PlayButton from "./components/PlayButton.svelte";
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
  export let name;

    function testFunction(data) {
    if (data) {
      console.log("data :", data);
    } else {
      console.log("no-data");
    }
  }
</script>

<style>

</style>

<div class="container">
  <h1>Not a Dog!</h1>
  <h2>Not a Dog!</h2>
  <Button on:buttonClick={testFunction} text={'NOT A DOG!!!'} />
  <Input on:inputChange={testFunction} text={'Заполните инпут'} />
  <span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum
    exercitationem maxime quas inventore alias impedit excepturi iste
    repudiandae obcaecati.
  </span>
  <PlayButton />
</div>
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
      <Route path="/game" component={Game} />
      <Route path="profile/*" component={Profile} />
      <Route path="settings/*" component={Settings} />
      <Route path="statistics" component={Statistics} />
    {:else}
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
    {/if}
    <Route path="*" component={Empty} />
  </div>
</Router>
