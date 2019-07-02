<script>
  import { Router, Route } from 'svelte-routing';
  import SignUp from './Routes/Public/SignUp.svelte';
  import Login from './Routes/Public/Login.svelte';
</script>

<Router>
  <div>
    <Route component="{SignUp}" />
    <Route path="login" component="{Login}" />
  </div>
</Router>