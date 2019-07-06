<script>

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
  
</style>

<div class="play-btn">
  <slot />
</div>
