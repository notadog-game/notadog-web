<script>
  import { onMount, onDestroy } from "svelte";
  import { navigate } from "svelte-routing";
  import { room, player, stepCode } from "../store/game";
  import { GameHub, GAME_STATES } from "../services/game";
  import GameWaitingPlayersState from "./GameWaitingPlayersState.svelte";
  import GameWaitingStartState from "./GameWaitingStartState.svelte";
  import GamePlayingState from "./GamePlayingState.svelte";
  import GameEndState from "./GameEndState.svelte";
  import UserCard from "../components/UserCard.svelte";
  import PlayProgress from "../components/PlayProgress.svelte";
  import RefreshIcon from "../components/icons/RefreshIcon.svelte";

  onMount(() => {
    GameHub.connect();
  });

  onDestroy(() => {
    GameHub.disconnect();
    room.reset();
  });

  async function joinGameHandler() {
    navigate("/game/join", { replace: true });
  }

  function createGameHandler() {
    navigate("/game/create", { replace: true });
  }

  function refreshHandler() {
    GameHub.refresh();
  }

  function leaveGameHandler() {
    GameHub.leaveRoom();
  }
</script>

<style>
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .refresh {
    justify-self: flex-end;
    margin: 0;
    transition: transform 1s;
  }
  /* TODO: implement animation */
  .refresh:active {
    /* background: none;
    transform: rotateZ(180deg); */
  }

  .user-card {
    margin-bottom: 15px;
  }
</style>

<div class="container noselect">
  <div class="header">
    <h1>Game</h1>
    <button class="refresh btn flex-cc" on:click={refreshHandler}>
      <RefreshIcon />
    </button>
  </div>

  {#if $room === undefined}
    <div class="game-status flex-cc">Connecting...</div>
  {:else if $room === null}
    <div class="user-card">
      <UserCard user={$player} />
    </div>
    <div class="game-status flex-cc">Connected</div>
    <button class="btn btn--basic" on:click={joinGameHandler}>
      Join public room
    </button>
    <button class="btn btn--basic" on:click={createGameHandler}>
      Create room
    </button>
  {:else}
    {#if $stepCode === GAME_STATES.WAITING_PLAYERS}
      <GameWaitingPlayersState>
        <span slot="leaveButton">
          <button class="btn btn--basic" on:click={leaveGameHandler}>
            Leave room
          </button>
        </span>
      </GameWaitingPlayersState>
    {/if}

    {#if $stepCode === GAME_STATES.WAITING_START}
      <GameWaitingStartState>
        <span slot="playProgress">
          <PlayProgress
            common={$room.players.length}
            marked={$room.makedMovePlayers.length} />
        </span>
        <span slot="leaveButton">
          <button class="btn btn--basic" on:click={leaveGameHandler}>
            Leave room
          </button>
        </span>
      </GameWaitingStartState>
    {/if}

    {#if $stepCode === GAME_STATES.PLAYING_STATE}
      <GamePlayingState>
        <span slot="playProgress">
          <PlayProgress
            common={$room.players.length}
            marked={$room.makedMovePlayers.length} />
        </span>
        <span slot="leaveButton">
          <button class="btn btn--basic" on:click={leaveGameHandler}>
            Leave room
          </button>
        </span>
      </GamePlayingState>
    {/if}

    {#if $stepCode === GAME_STATES.END_STATE}
      <GameEndState>
        <span slot="leaveButton">
          <button class="btn btn--basic" on:click={leaveGameHandler}>
            Leave room
          </button>
        </span>
      </GameEndState>
    {/if}
  {/if}
</div>
