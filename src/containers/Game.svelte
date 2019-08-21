<script>
  import { onMount, onDestroy } from "svelte";
  import { GameHub } from "../services/game";

  onMount(() => {
    GameHub.connect();
  });

  onDestroy(() => {
    GameHub.disconnect();
  });
</script>

<style>

</style>

<div class="container">
  <h1>Game!</h1>

</div>
