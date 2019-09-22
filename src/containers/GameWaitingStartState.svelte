<script>
  import PlayButton from "../components/PlayButton.svelte";
  import PlayIcon from "../components/icons/PlayIcon.svelte";
</script>

<div class="game-status flex-cc">Waiting start</div>

<slot name="playProgress" />

<div class="play-button flex-cc">
  <PlayButton disabled={true}>
    <PlayIcon />
  </PlayButton>
</div>
<slot name="leaveButton" />
