<script>
  import { Router, Link, Route } from 'svelte-routing';
  // TODO Load from folder?
  import Home from './Routes/Home.svelte';
  import Profile from './Routes/Profile.svelte';
  import Settings from './Routes/Settings.svelte';
  import Statistics from './Routes/Statistics.svelte';
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

<!-- TODO Transfer to new component for authorized? -->
<Router>
  <aside>
    <nav>
	  <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="profile">Profile</Link></li>
        <li><Link to="settings">Settings</Link></li>
        <li><Link to="statistics">Statistics</Link></li>
	  </ul>
    </nav>
  </aside>
  <div>
    <Route path="/" component="{Home}" />
    <Route path="profile" component="{Profile}" />
    <Route path="settings" component="{Settings}" />
    <Route path="statistics" component="{Statistics}" />
  </div>
</Router>