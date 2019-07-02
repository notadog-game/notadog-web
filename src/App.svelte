<script>
  import { Router, Route } from 'svelte-routing';
  import Authorized from './Authorized.svelte';
  import Public from './Public.svelte';
  import Statistics from './Routes/Authorized/Statistics.svelte';
</script>

<Router>
  <Route path="*" component="{Authorized}" />
  <Route path="public/*" component="{Public}" />
</Router>