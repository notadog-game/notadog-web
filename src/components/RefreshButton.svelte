<script>
  import { createEventDispatcher } from "svelte";
  import RefreshIcon from "../components/icons/RefreshIcon.svelte";

  const dispatch = createEventDispatcher();

  let activeTimeout = null;
  let active = false;

  function onClickHandler() {
    dispatch("click");

    if (activeTimeout) clearTimeout(activeTimeout);
    active = true;

    activeTimeout = setTimeout(() => {
      active = false;
      clearTimeout(activeTimeout);
    }, 1000);
  }
</script>

<style>
  .refresh {
    justify-self: flex-end;
    margin: 0;
  }

  .active {
    pointer-events: none;
    transform: rotateZ(-360deg);
    transition: transform 1s;
  }
</style>

<button
  class="refresh btn flex-cc {active ? 'active' : ''}"
  on:click={onClickHandler}>
  <RefreshIcon />
</button>
