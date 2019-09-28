<script>
  import { navigate } from "svelte-routing";
  import { createGame } from "../services/api";

  async function createRoomHandler() {
    await createGame();
    navigate(`/game`, { replace: true });
  }
</script>

<div class="container">
  <h1>Create game</h1>
  <button class="btn btn--basic" on:click={createRoomHandler}>Create</button>
</div>
