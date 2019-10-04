<script>
  import { _ } from "svelte-i18n";
  import { navigate } from "svelte-routing";
  import { createGame } from "../services/api";

  async function createRoomHandler() {
    try {
      await createGame();
      navigate(`/game`, { replace: true });
    } catch (err) {
      console.log(err);
    }
  }
</script>

<div class="container">
  <button class="btn btn--basic" on:click={createRoomHandler}>
    {$_('game.createRoom')}
  </button>
</div>
