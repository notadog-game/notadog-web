<script>
  import { Link } from 'svelte-routing';
</script>

<style>
  ul {
    list-style-type: none;
  }
</style>

<ul>
  <li><Link to="username">"your username"</Link></li>
  <li><Link to="email">"your email"</Link></li>
  <li><Link to="password">password</Link></li>
</ul>