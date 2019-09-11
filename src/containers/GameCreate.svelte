<script>
  import { onMount, onDestroy } from "svelte";
  import { navigate } from "svelte-routing";
  import { createGame } from "../services/api";

  let forceAdding = false;

  onDestroy(() => {});

  async function createRoomHandler() {
    try {
      const room = await createGame({ forceAdding });
      navigate(`/game`, { replace: true });
    } catch (err) {}
  }
</script>

<div class="container">
  <h1>Create game</h1>
  <div>
    <label>
      <input type="checkbox" bind:checked={forceAdding} />
      Force create
    </label>
  </div>
  <button on:click={createRoomHandler}>Force create</button>
</div>
