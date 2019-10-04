<script>
  import { _ } from "svelte-i18n";
  import { navigate } from "svelte-routing";
  import { connectToPublicGame } from "../services/api";
  import { PLAYERS_MAX_COUNT, PLAYERS_MIN_COUNT } from "../constants/game";
  import RangeSelect from "../components/RangeSelect.svelte";

  let playersMaxCount = PLAYERS_MIN_COUNT;

  async function joinRoomHandler() {
    try {
      await connectToPublicGame({ playersMaxCount });
      navigate(`/game`, { replace: true });
    } catch (err) {
      console.log(err);
    }
  }
</script>

<div class="container">
  <RangeSelect
    bind:value={playersMaxCount}
    min={PLAYERS_MIN_COUNT}
    max={PLAYERS_MAX_COUNT} />
  <button class="btn btn--basic" on:click={joinRoomHandler}>
    {$_('common.join')}
  </button>
</div>
