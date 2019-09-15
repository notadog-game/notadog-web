<script>
  import { onMount, onDestroy } from "svelte";
  import { navigate } from "svelte-routing";

  import { connectToPublicGame } from "../services/api";
  import { handleError } from "../services/errors";

  let forceAdding = false;

  onDestroy(() => {});

  async function joinRoomHandler() {
    try {
      await connectToPublicGame({ forceAdding: false });
      navigate(`/game`, { replace: true });
    } catch (err) {
      handleError(e);
    }
  }
</script>

<div class="container">
  <h1>Join Game</h1>
  <button class="btn btn--basic" on:click={joinRoomHandler}>Join Room</button>
</div>
