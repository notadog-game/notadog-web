<script>
  import { Router, Link, Route } from "svelte-routing";

  import Index from "./SettingsIndex.svelte";
  import Notifications from "./Notifications.svelte";

  export let url = "";
</script>

<style>

</style>

<h1>Settings</h1>

<Router {url}>
  <nav>
    <Link to="/">Index</Link>
    <Link to="notifications">Notifications</Link>
  </nav>
  <div>
    <Route path="/" component={Index} />
    <Route path="notifications" component={Notifications} />
  </div>

</Router>
