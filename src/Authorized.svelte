<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Home from './Routes/Authorized/Home.svelte';
  import Profile from './Routes/Authorized/Profile/Index.svelte';
  import Settings from './Routes/Authorized/Settings/Index.svelte';
  import Statistics from './Routes/Authorized/Statistics.svelte';

  let authorized = true;
  if (!authorized) {
    window.location.replace("/public");
  }
</script>

<style>
  aside {
    float: left;
    border-right: thick solid;
    height: 100%
  }
  ul {
    list-style-type: none;
  }
</style>

{#if authorized}
  <Router>
    <!-- The structure is subject to change while implementing mock‐ups to html. -->
    <aside>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="settings">Settings</Link></li>
          <li><Link to="statistics/">Statistics</Link></li>
        </ul>
      </nav>
    </aside>
    <div>
      <Route component="{Home}" />
      <Route path="profile/*" component="{Profile}" />
      <Route path="settings/*" component="{Settings}" />
      <Route path="statistics" component="{Statistics}" />
    </div>
  </Router>
{/if}