<script>
  import { _ } from "svelte-i18n";
  import PlayButton from "../components/PlayButton.svelte";
  import PlayIcon from "../components/icons/PlayIcon.svelte";
</script>

<div class="game-status flex-cc">{$_('game.waitingStartTitles')}</div>

<slot name="playProgress" />

<div class="play-button flex-cc">
  <PlayButton disabled={true}>
    <PlayIcon />
  </PlayButton>
</div>
<slot name="leaveButton" />
