<script>
  import { onMount, onDestroy, beforeUpdate } from "svelte";
  import { navigate } from "svelte-routing";
  import ClipboardJS from "clipboard";

  import { room, isWin } from "../store/game";

  import { GameHub, GAME_STATES } from "../services/game";
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
</script>

{#if $isWin}
  <div class="game-status flex-cc">You are not Dog! =)</div>
{:else}
  <div class="game-status flex-cc">You are a Dog. =(</div>
{/if}

<div class="players-list">
  <PlayersList users={getEndStatePlayers($room)} />
</div>

<slot name="leaveButton" />
