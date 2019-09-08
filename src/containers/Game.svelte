<script>
  import { onMount, onDestroy } from "svelte";
  import { game } from "../store/game";
  import { GameHub, GAME_STATES } from "../services/game";

  let stateCode;

  const unsubscribe = game.subscribe(value => {
    const { room } = value;
    if (!room) return;

    stateCode = room.stateCode;
  });

  onMount(() => {
    GameHub.connect();
  });

  onDestroy(() => {
    GameHub.disconnect();
    unsubscribe();
  });

  function connectToGameHandler() {
    game.connectToGame({ forceAdding: false });
  }

  function createGameHandler() {
    game.createGame({ forceAdding: false });
  }

  function notADogClickHandler() {
    GameHub.makeMove();
  }
</script>

<div class="container">
  <h1>Game!</h1>

  {#if !$game.room}
    <button on:click={connectToGameHandler}>Join game</button>
    <button on:click={createGameHandler}>Create game</button>
  {:else}
    {#if stateCode === GAME_STATES.WAITING_PLAYERS}
      <div>Waiting players</div>
    {/if}

    {#if stateCode === GAME_STATES.WAITING_START}
      <div>Waiting start</div>
    {/if}

    {#if stateCode === GAME_STATES.PLAYING_STATE}
      <div>Playing</div>
      <button on:click={notADogClickHandler}>NotADog</button>
    {/if}

    {#if stateCode === GAME_STATES.END_STATE}
      <div>End</div>
    {/if}
  {/if}

</div>
