<script>
  import { room } from "../store/game";
  import { GameHub } from "../services/game";
  import PlayButton from "../components/PlayButton.svelte";
  import PlayIcon from "../components/icons/PlayIcon.svelte";

  function notADogClickHandler() {
    GameHub.makeMove();
  }
</script>

<div class="game-status flex-cc">Playing</div>

<slot name="playProgress" />

<div class="play-button flex-cc">
  <PlayButton on:click={notADogClickHandler}>
    <PlayIcon />
  </PlayButton>
</div>

<slot name="leaveButton" />
