<script>
  import { onMount, onDestroy, beforeUpdate } from "svelte";
  import { navigate } from "svelte-routing";
  import ClipboardJS from "clipboard";

  import {
    player,
    room,
    isRoomRoot,
    isWin,
    isPrivateRoom
  } from "../store/game";
  import { GameHub, GAME_STATES } from "../services/game";
  import { handleError } from "../services/errors";

  import UserCard from "../components/UserCard.svelte";
  import PlayersList from "../components/PlayersList.svelte";
  import PlayButton from "../components/PlayButton.svelte";

  import PlayIcon from "../components/icons/PlayIcon.svelte";
  import RefreshIcon from "../components/icons/RefreshIcon.svelte";

  let stateCode = null;
  let clipboard = null;
  let roomLink = null;
  let players = [];

  const unsubscribeRoom = room.subscribe(value => {
    if (!value) return;

    stateCode = value.stateCode;
    roomLink = `${window.location.host}/game/${value.guid}`;

    const _players = [
      { id: 1, name: "user1" },
      { id: 2, name: "user2" },
      { id: 3, name: "user3" },
      { id: 4, name: "user4" },
      { id: 5, name: "user5" },
      { id: 6, name: "user6" },
      { id: 7, name: "user7" }
    ];

    const _makedMovePlayers = [
      { id: 1, name: "user1" },
      { id: 3, name: "user3" },
      { id: 5, name: "user5" },
      { id: 7, name: "user7" }
    ];

    players = value.players
      .map(originalPlayer => ({
        ...originalPlayer,
        isMakedMove: !!value.makedMovePlayers.find(
          makedMovePlayer => makedMovePlayer.id === originalPlayer.id
        )
      }))
      .sort((p1, p2) => p1.isMakedMove - p2.isMakedMove);
  });

  onMount(() => {
    GameHub.connect();

    clipboard = new ClipboardJS(".copy", {
      text: function(trigger) {
        return trigger.getAttribute("aria-label");
      }
    });
  });

  onDestroy(() => {
    GameHub.disconnect();
    unsubscribeRoom();
    clipboard.destroy();
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
  .status {
    padding: 25px 0;
  }

  .play-button {
    padding: 25px 0;
  }

  .players-list {
    height: 150px;
    margin-bottom: 30px;
    padding: 5px;
    overflow: scroll;
    border: 1px solid var(--NAD_SERVICE);
  }
</style>

<div class="container noselect">
  <div class="header">
    <h1>Game</h1>
    <button class="refresh btn flex-cc" on:click={refreshHandler}>
      <RefreshIcon />
    </button>
  </div>

  <div class="user-card">
    <UserCard user={$player} />
  </div>

  {#if $room === undefined}
    <div class="status flex-cc">Not connected</div>
  {:else if $room === null}
    <div class="status flex-cc">Connected</div>
    <button class="btn btn--basic" on:click={joinGameHandler}>
      Join public room
    </button>
    <button class="btn btn--basic" on:click={createGameHandler}>
      Create room
    </button>
  {:else}
    {#if stateCode === GAME_STATES.WAITING_PLAYERS}
      <div class="status flex-cc">Waiting players</div>
    {/if}

    {#if stateCode === GAME_STATES.WAITING_START}
      <div class="status flex-cc">Waiting start</div>
    {/if}

    {#if stateCode === GAME_STATES.PLAYING_STATE}
      <div class="status flex-cc">Playing</div>
    {/if}

    <div class="players-list">
      <PlayersList users={players} />
    </div>

    {#if stateCode === GAME_STATES.WAITING_PLAYERS}
      {#if $isPrivateRoom}
        <button class="btn btn--basic copy" aria-label={roomLink}>
          Copy game link
        </button>
      {/if}

      {#if $isRoomRoot}
        <button class="btn btn--basic" on:click={startGameHandler}>
          Start Game
        </button>
      {/if}

      <button class="btn btn--basic" on:click={leaveGameHandler}>
        Leave room
      </button>
    {/if}

    {#if stateCode === GAME_STATES.WAITING_START}
      <div class="play-button flex-cc">
        <PlayButton disabled={true}>
          <PlayIcon />
        </PlayButton>
      </div>
      <button class="btn btn--basic" on:click={leaveGameHandler}>
        Leave room
      </button>
    {/if}

    {#if stateCode === GAME_STATES.PLAYING_STATE}
      <div class="play-button flex-cc">
        <PlayButton on:click={notADogClickHandler}>
          <PlayIcon />
        </PlayButton>
      </div>

      <button class="btn btn--basic" on:click={leaveGameHandler}>
        Leave room
      </button>
    {/if}

    {#if stateCode === GAME_STATES.END_STATE}
      {#if $isWin}
        <div class="status flex-cc">You are not Dog! =)</div>
      {:else}
        <div class="status flex-cc">You are a Dog. =(</div>
      {/if}
    {/if}
  {/if}
</div>
