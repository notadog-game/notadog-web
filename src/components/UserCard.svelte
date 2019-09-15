<script>
  export let user = null;
</script>

<style>
  .user {
    display: grid;
    grid-template-rows: repeat(3, 33.333%);
    grid-template-columns: 70px 1fr 1fr;
    grid-row-gap: 5px;
    grid-column-gap: 10px;

    height: 70px;
  }

  .user__icon {
    grid-row: 1 / -1;
    background-color: var(--NAD_BG);
    border-radius: 50%;

    max-height: 70px;
  }

  .user__name {
    grid-row: 1 / 2;
    grid-column: 2/ -1;
    color: var(--NAD_BLACK);
  }

  .user__points {
    grid-row: 2 / 3;
    grid-column: 2 / -1;
    color: var(--NAD_GREY);
  }

  @media (min-width: 768px) {
    .user__points {
      grid-column: 2 / 3;
    }
  }
</style>

<div class="user">
  {#if !user}
    <div class="user__icon stencil ">lorem ipsum</div>
    <div class="user__name stencil">lorem ipsum</div>
    <div class="user__points stencil" />
  {:else}
    <div class="user__icon" />
    <div class="user__name">{user.name}</div>
    <div class="user__points">{user.score} points</div>
  {/if}

</div>
