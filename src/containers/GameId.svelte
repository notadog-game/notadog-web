<script>
  import { onMount, onDestroy } from "svelte";
  import { navigate } from "svelte-routing";
  import { connectToPrivateGame } from "../services/api";

  let isLoading = true;
  let roomId = "";

  onMount(async () => {
    roomId = location.pathname.replace("/game/", "");

    try {
      await joinRoom();
    } catch (err) {
      isLoading = false;
      console.log(err);
    }
  });

  onDestroy(() => {});

  async function joinRoom(forceAdding = false) {
    isLoading = true;

    try {
      await connectToPrivateGame({ roomId, forceAdding });
      navigate(`/game`, { replace: true });
      isLoading = false;
    } catch (err) {
      isLoading = false;
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
    <button on:click={forceJoinRoomHandler()}>Force join</button>
  {/if}

</div>
