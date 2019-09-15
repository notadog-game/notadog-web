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
  import PlayButton from "../components/PlayButton.svelte";
  import PlayIcon from "../components/icons/PlayIcon.svelte";
  import StartIcon from "../components/icons/StartIcon.svelte";

  let stateCode;
  let clipboard;
  let roomLink;

  const unsubscribeRoom = room.subscribe(value => {
    if (!value) return;
    stateCode = value.stateCode;
    roomLink = `${window.location.host}/game/${value.guid}`;
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
    margin-bottom: 30px;
  }
  .user-card {
    margin-bottom: 15px;
  }
  .status {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
  }
</style>

<div class="container">
  <h1>Game</h1>

  <div class="header">
    <div class="user-card">
      <UserCard user={$player} />
    </div>

    <button class="btn" on:click={refreshHandler}>Refresh</button>
  </div>

  {#if $room === undefined}
    <div class="status">Not connected</div>
  {:else if $room === null}
    <div class="status">Connected</div>
    <button class="btn" on:click={joinGameHandler}>Join public room</button>
    <button class="btn" on:click={createGameHandler}>Create room</button>
  {:else}
    {#if stateCode === GAME_STATES.WAITING_PLAYERS}
      <div class="status">Waiting players</div>

      {#if $isPrivateRoom}
        <button class="btn copy" aria-label={roomLink}>Copy game link</button>
      {/if}

      {#if $isRoomRoot}
        <button class="btn" on:click={startGameHandler}>Start Game</button>
      {/if}

      <button class="btn" on:click={leaveGameHandler}>Leave room</button>
    {/if}

    {#if stateCode === GAME_STATES.WAITING_START}
      <div class="status">Waiting start</div>
      <button class="btn" on:click={leaveGameHandler}>Leave room</button>
    {/if}

    {#if stateCode === GAME_STATES.PLAYING_STATE}
      <div class="status">Playing</div>
      <button class="btn" on:click={notADogClickHandler}>NotADog</button>
      <button class="btn" on:click={leaveGameHandler}>Leave room</button>
    {/if}

    {#if stateCode === GAME_STATES.END_STATE}
      {#if $isWin}
        <div class="status">You are not Dog! =)</div>
      {:else}
        <div class="status">You are a Dog. =(</div>
      {/if}
    {/if}
  {/if}

</div>
