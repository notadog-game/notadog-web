<script>
  import { onMount, onDestroy } from "svelte";
  import { navigate } from "svelte-routing";

  import { connectToPrivateGame } from "../services/api";
  import { handleError } from "../services/errors";

  let isLoading = true;
  let isError = false;
  let roomId = "";

  onMount(async () => {
    roomId = location.pathname.replace("/game/", "");

    try {
      await joinRoom();
    } catch (err) {
      isLoading = false;
      handleError(e);
    }
  });

  onDestroy(() => {
    isLoading = true;
    isError = false;
    roomId = "";
  });

  async function joinRoom(forceAdding = false) {
    isLoading = true;
    isError = false;

    try {
      await connectToPrivateGame({ roomId, forceAdding });
      isLoading = false;
      navigate(`/game`, { replace: true });
    } catch (err) {
      isLoading = false;
      isError = true;
    }
  }

  function forceJoinRoomHandler() {
    return joinRoom.bind(this, true);
  }
</script>

<div class="container">
  <h1>Game Id</h1>

  {#if isLoading}
    Loading
  {:else}
    <button class="btn btn--basic" on:click={forceJoinRoomHandler()}>
      Force Join
    </button>
  {/if}

</div>
