<script>
  import { onMount, onDestroy, beforeUpdate } from "svelte";
  import { navigate } from "svelte-routing";
  import ClipboardJS from "clipboard";

  import { room, isRoomRoot, isWin } from "../store/game";

  import { GameHub, GAME_STATES } from "../services/game";
  import { handleError } from "../services/errors";

  import PlayersList from "../components/PlayersList.svelte";

  function getEndStatePlayers(room) {
    return room.players
      .map(originalPlayer => ({
        ...originalPlayer,
        isMakedMove: !!room.makedMovePlayers.find(
          makedMovePlayer => makedMovePlayer.id === originalPlayer.id
        )
      }))
      .sort((p1, p2) => p2.isMakedMove - p1.isMakedMove);
  }

  function playAgainHandler() {
    GameHub.playAgain();
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

<button class="btn btn--basic" on:click={playAgainHandler}>Play again</button>

<slot name="leaveButton" />
