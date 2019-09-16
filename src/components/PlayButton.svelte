<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let disabled = false;

  function onClickHandler() {
    dispatch("click");
  }
</script>

<style>
  .play-btn {
    border: solid 1px var(--NAD_SERVICE);
    border-radius: 50%;
    cursor: pointer;
    height: 168px;
    position: relative;
    width: 168px;
  }
  .play-btn:hover {
    background-color: var(--NAD_BLACK);
  }

  .play-btn:hover :global(svg path) {
    fill: var(--NAD_WHITE);
    stroke: var(--NAD_BLACK);
  }

  .disabled.play-btn {
    pointer-events: none;
    opacity: 0.5;
  }
</style>

<div class="play-btn {disabled ? 'disabled' : ''}" on:click={onClickHandler}>
  <slot />
</div>
