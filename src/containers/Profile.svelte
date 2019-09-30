<script>
  import { Router, Route } from "svelte-routing";

  import Index from "./ProfileIndex.svelte";
  import Username from "./Username.svelte";
  import Email from "./Email.svelte";
  import Password from "./Password.svelte";

  export let url = "";
</script>

<style>

</style>

<div class="container">
  <Router {url}>
    <div>
      <Route path="/" component={Index} />
      <Route path="username" component={Username} />
      <Route path="email" component={Email} />
      <Route path="password" component={Password} />
    </div>
  </Router>
</div>
