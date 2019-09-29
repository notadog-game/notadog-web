<script>
  import { _ } from "svelte-i18n";
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
    }
  });

  onDestroy(() => {
    isLoading = true;
    roomId = "";
  });

  async function joinRoom(forceAdding = false) {
    isLoading = true;

    try {
      await connectToPrivateGame({ roomId, forceAdding });
      isLoading = false;
      navigate(`/game`, { replace: true });
    } catch (err) {
      isLoading = false;
    }
  }

  function forceJoinRoomHandler() {
    return joinRoom.bind(this, true);
  }
</script>

<div class="container">
  <h1>{$_('game.title')}</h1>

  {#if isLoading}
    {$_('common.loading')}
  {:else}
    <button class="btn btn--basic" on:click={forceJoinRoomHandler()}>
      {$_('game.forceJoin')}
    </button>
  {/if}

</div>
