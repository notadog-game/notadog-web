<script>
  import { onMount, onDestroy } from "svelte";
  import { navigate } from "svelte-routing";

  import { createGame } from "../services/api";
  import { globalErrorsHandler } from "../services/errors";

  onDestroy(() => {});

  async function createRoomHandler() {
    try {
      await createGame();
      navigate(`/game`, { replace: true });
    } catch (err) {
      globalErrorsHandler(err);
    }
  }
</script>

<div class="container">
  <h1>Create game</h1>
  <button class="btn btn--basic" on:click={createRoomHandler}>Create</button>
</div>
