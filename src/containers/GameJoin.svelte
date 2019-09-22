<script>
  import { navigate } from "svelte-routing";

  import { connectToPublicGame } from "../services/api";
  import { globalErrorsHandler } from "../services/errors";
  import { PLAYERS_MAX_COUNT, PLAYERS_MIN_COUNT } from "../constants/game";

  import RangeSelect from "../components/RangeSelect.svelte";

  let playersMaxCount = PLAYERS_MIN_COUNT;

  async function joinRoomHandler() {
    try {
      await connectToPublicGame({ playersMaxCount });
      navigate(`/game`, { replace: true });
    } catch (err) {
      globalErrorsHandler(err);
    }
  }
</script>

<div class="container">
  <h1>Join Game</h1>
  <RangeSelect
    bind:value={playersMaxCount}
    min={PLAYERS_MIN_COUNT}
    max={PLAYERS_MAX_COUNT} />
  <button class="btn btn--basic" on:click={joinRoomHandler}>Join</button>
</div>
