<script>
  import { onMount, onDestroy, beforeUpdate } from "svelte";
  import { navigate } from "svelte-routing";
  import ClipboardJS from "clipboard";

  import { room, isWin, isRoomRoot } from "../store/game";

  import { GameHub } from "../services/game";
  import { GAME_STATES } from "../constants/game";
  import { handleError } from "../services/errors";

  import PlayersList from "../components/PlayersList.svelte";

  function getEndStatePlayers(room) {
    return room.players
      .map(player => ({
        ...player,
        isMakedMove: !!room.makedMovePlayerIds.find(id => id === player.id)
      }))
      .sort((p1, p2) => p2.isMakedMove - p1.isMakedMove);
  }

  function replayClickHandler() {
    GameHub.replay();
  }
</script>

{#if $isWin}
  <div class="game-status flex-cc">You are not Dog! =)</div>
{:else}
  <div class="game-status flex-cc">You are a Dog. =(</div>
{/if}

<div class="players-list">
  <PlayersList users={getEndStatePlayers($room)} />
</div>

{#if $isRoomRoot}
  <button class="btn btn--basic" on:click={replayClickHandler}>Replay</button>
{/if}

<slot name="leaveButton" />
