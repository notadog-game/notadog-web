<script>
  import { _ } from "svelte-i18n";
  import { navigate } from "svelte-routing";
  import { connectToPublicGame } from "../services/api";
  import { PLAYERS_MAX_COUNT, PLAYERS_MIN_COUNT } from "../constants/game";
  import RangeSelect from "../components/RangeSelect.svelte";

  let playersMaxCount = PLAYERS_MIN_COUNT;

  async function joinRoomHandler() {
    await connectToPublicGame({ playersMaxCount });
    navigate(`/game`, { replace: true });
  }
</script>

<div class="container">
  <h1>{$_('game.joinGameTitle')}</h1>
  <RangeSelect
    bind:value={playersMaxCount}
    min={PLAYERS_MIN_COUNT}
    max={PLAYERS_MAX_COUNT} />
  <button class="btn btn--basic" on:click={joinRoomHandler}>
    {$_('common.join')}
  </button>
</div>
