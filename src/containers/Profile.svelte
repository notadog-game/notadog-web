<script>
  import { _ } from "svelte-i18n";
  import { Router, Link, Route } from "svelte-routing";

  import Index from "./ProfileIndex.svelte";
  import Username from "./Username.svelte";
  import Email from "./Email.svelte";
  import Password from "./Password.svelte";

  export let url = "";
</script>

<style>
  nav {
    display: grid;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <h1>{$_('common.profile')}</h1>
  <Router {url}>
    <nav class="subnav">
      <Link to="/">{$_('common.index')}</Link>
      <Link to="username">{$_('common.name')}</Link>
      <Link to="email">{$_('common.email')}</Link>
      <Link to="password">{$_('common.password')}</Link>
    </nav>
    <div>
      <Route path="/" component={Index} />
      <Route path="username" component={Username} />
      <Route path="email" component={Email} />
      <Route path="password" component={Password} />
    </div>
  </Router>
</div>
