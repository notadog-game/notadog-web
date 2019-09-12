<script>
  import { onMount, onDestroy, beforeUpdate } from "svelte";
  import { navigate } from "svelte-routing";

  import { room, isRoomRoot, isWin } from "../store/game";
  import { GameHub, GAME_STATES } from "../services/game";
  import { connectToPublicGame } from "../services/api";
  import { handleError } from "../services/errors";

  let stateCode;

  const unsubscribeRoom = room.subscribe(value => {
    if (!value) return;
    stateCode = value.stateCode;
  });

  onMount(() => {
    GameHub.connect();
  });

  onDestroy(() => {
    GameHub.disconnect();
    unsubscribeRoom();
  });

  async function connectToPublicGameHandler() {
    try {
      await connectToPublicGame({ forceAdding: false });
    } catch (err) {
      handleError(e);
    }
  }

  function createPrivateGameHandler() {
    navigate("/game/create", { replace: true });
  }

  function startGameHandler() {
    GameHub.startGame();
  }

  function notADogClickHandler() {
    GameHub.makeMove();
  }

  function refreshHandler() {
    window.location.reload();
  }

  function leaveGameHandler() {
    GameHub.leaveRoom();
  }
</script>

<div class="container">
  <h1>Game!</h1>

  {#if $room === undefined}
    Not connected
  {:else if $room === null}
    <button class="btn" on:click={connectToPublicGameHandler}>
      Join public room
    </button>
    <button class="btn" on:click={createPrivateGameHandler}>
      Create private room
    </button>
  {:else}
    {#if stateCode === GAME_STATES.WAITING_PLAYERS}
      <div>Waiting players</div>

      {#if $isRoomRoot}
        <button class="btn" on:click={startGameHandler}>Start Game</button>
      {/if}
    {/if}

    {#if stateCode === GAME_STATES.WAITING_START}
      <div>Waiting start</div>
    {/if}

    {#if stateCode === GAME_STATES.PLAYING_STATE}
      <div>Playing</div>
      <button class="btn" on:click={notADogClickHandler}>NotADog</button>
    {/if}

    {#if stateCode === GAME_STATES.END_STATE}
      <div>End</div>

      {#if $isWin}
        <div>You are not Dog! =)</div>
      {:else}
        <div>You are a Dog. =(</div>
      {/if}

      <button class="btn" on:click={refreshHandler}>Finish</button>
    {/if}

    <button class="btn" on:click={leaveGameHandler}>Leave room</button>
  {/if}
</div>
