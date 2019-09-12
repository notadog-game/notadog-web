<script>
  import { onMount, onDestroy, beforeUpdate } from "svelte";
  import { navigate } from "svelte-routing";

  import { room, isRoomRoot, isWin } from "../store/game";
  import { GameHub, GAME_STATES } from "../services/game";
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

  async function joinGameHandler() {
    navigate("/game/join", { replace: true });
  }

  function createGameHandler() {
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
  <button class="btn" on:click={refreshHandler}>Refresh</button>

  {#if $room === undefined}
    Not connected
  {:else if $room === null}
    <button class="btn" on:click={joinGameHandler}>Join public room</button>
    <button class="btn" on:click={createGameHandler}>Create room</button>
  {:else}
    {#if stateCode === GAME_STATES.WAITING_PLAYERS}
      <div>Waiting players</div>

      {#if $isRoomRoot}
        <button class="btn" on:click={startGameHandler}>Start Game</button>
      {/if}
      <button class="btn" on:click={leaveGameHandler}>Leave room</button>
    {/if}

    {#if stateCode === GAME_STATES.WAITING_START}
      <div>Waiting start</div>
      <button class="btn" on:click={leaveGameHandler}>Leave room</button>
    {/if}

    {#if stateCode === GAME_STATES.PLAYING_STATE}
      <div>Playing</div>
      <button class="btn" on:click={notADogClickHandler}>NotADog</button>
      <button class="btn" on:click={leaveGameHandler}>Leave room</button>
    {/if}

    {#if stateCode === GAME_STATES.END_STATE}
      <div>End</div>

      {#if $isWin}
        <div>You are not Dog! =)</div>
      {:else}
        <div>You are a Dog. =(</div>
      {/if}
    {/if}
  {/if}
</div>
