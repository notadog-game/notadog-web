<script>
  import { onMount } from "svelte";
  import { Route, Link, navigate } from "svelte-routing";

  export let path = "";
</script>

<Route {path}>
  <h1>Private</h1>

  {#if true}
    <h1>403</h1>
    <Link to="/">Return to home</Link>
  {:else}
    <slot />
  {/if}
</Route>
