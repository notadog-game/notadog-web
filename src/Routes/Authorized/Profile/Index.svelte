<script>
  import { Router, Route } from 'svelte-routing';
  import Profile from './Profile.svelte';
  import Username from './Username.svelte';
  import Email from './Email.svelte';
  import Password from './Password.svelte';
</script>

<h1>My Profile</h1>
<Router>
  <div>
    <Route component="{Profile}" />
    <Route path="username" component="{Username}" />
    <Route path="email" component="{Email}" />
    <Route path="password" component="{Password}" />
  </div>
</Router>
