<script>
  import { onMount, onDestroy } from "svelte";
  import ClipboardJS from "clipboard";
  import { players, roomLink, isRoomRoot, isPrivateRoom } from "../store/game";
  import { GameHub } from "../services/game";
  import PlayersList from "../components/PlayersList.svelte";

  let clipboard = "";

  onMount(() => {
    clipboard = new ClipboardJS(".copy", {
      text: function(trigger) {
        return trigger.getAttribute("aria-label");
      }
    });
  });

  onDestroy(() => {
    clipboard.destroy();
  });

  function startGameHandler() {
    GameHub.startGame();
  }
</script>

<div class="game-status flex-cc">Waiting players</div>

<div class="players-list">
  <PlayersList users={$players} />
</div>

{#if $isPrivateRoom}
  <button class="btn btn--basic copy" aria-label={$roomLink}>
    Copy game link
  </button>
{/if}

{#if $isRoomRoot}
  <button class="btn btn--basic" on:click={startGameHandler}>Start Game</button>
{/if}

<slot name="leaveButton" />
