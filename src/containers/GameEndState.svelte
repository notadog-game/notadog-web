<script>
  import { _ } from "svelte-i18n";
  import { room, isWin, isRoomRoot } from "../store/game";
  import { GameHub } from "../hubs/game";
  import PlayersList from "../components/PlayersList.svelte";

  function getEndStatePlayers(room) {
    return room.players
      .map(player => ({
        ...player,
        isMakedMove: !!room.makedMovePlayerIds.find(id => id === player.id),
      }))
      .sort((p1, p2) => p2.isMakedMove - p1.isMakedMove);
  }

  function replayClickHandler() {
    GameHub.replay();
  }
</script>

{#if $isWin}
  <div class="game-status flex-cc">{$_('game.win')}</div>
{:else}
  <div class="game-status flex-cc">{$_('game.loose')}</div>
{/if}

<div class="players-list">
  <PlayersList users={getEndStatePlayers($room)} />
</div>

{#if $isRoomRoot}
  <button class="btn btn--basic" on:click={replayClickHandler}>
    {$_('game.replay')}
  </button>
{/if}

<slot name="leaveButton" />
