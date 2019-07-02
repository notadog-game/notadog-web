<script>
  import { Router, Route } from 'svelte-routing';
  import Settings from './Settings.svelte';
  import Notifications from './Notifications.svelte';
</script>

<h1>Settings</h1>
<Router>
  <div>
    <Route component="{Settings}" />
    <Route path="notifications" component="{Notifications}" />
  </div>
</Router>