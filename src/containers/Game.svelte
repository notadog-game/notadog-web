<script>
  import { onMount, onDestroy, beforeUpdate } from "svelte";
  import { navigate } from "svelte-routing";

  import { game } from "../store/game";
  import { GameHub, GAME_STATES } from "../services/game";
  import { connectToPublicGame } from "../services/api";

  let stateCode;

  const unsubscribe = game.subscribe(value => {
    if (!value) return;
    stateCode = value.stateCode;
  });

  onMount(() => {
    GameHub.connect();
  });

  onDestroy(() => {
    GameHub.disconnect();
    unsubscribe();
  });

  async function connectToPublicGameHandler() {
    try {
      const room = await connectToPublicGame({ forceAdding: false });
    } catch (err) {
      console.log(err);
    }
  }

  function createPrivateGameHandler() {
    navigate("/game/create", { replace: true });
  }

  function notADogClickHandler() {
    GameHub.makeMove();
  }

  function leaveGameHandler() {
    GameHub.leaveRoom();
  }
</script>

<div class="container">
  <h1>Game!</h1>

  {#if $game === undefined}
    Not connected
  {:else if $game === null}
    <button on:click={connectToPublicGameHandler}>Join public room</button>
    <button on:click={createPrivateGameHandler}>Create private room</button>
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

    <button on:click={leaveGameHandler}>Leave room</button>
  {/if}
</div>
