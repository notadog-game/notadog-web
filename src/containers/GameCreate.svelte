<script>
  import { _ } from "svelte-i18n";
  import { navigate } from "svelte-routing";
  import { createGame } from "../services/api";

  async function createRoomHandler() {
    await createGame();
    navigate(`/game`, { replace: true });
  }
</script>

<div class="container">
  <h1>{$_('game.createTitle')}</h1>
  <button class="btn btn--basic" on:click={createRoomHandler}>
    {$_('game.createRoom')}
  </button>
</div>
