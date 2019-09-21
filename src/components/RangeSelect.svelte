<script>
  import { onMount, onDestroy, beforeUpdate } from "svelte";

  export let value = 0;
  export let min = 0;
  export let max = 0;

  let items = [];

  beforeUpdate(() => {
    items = [...new Array(max - min)].map((e, i) => min + i);
  });

  function decrement() {
    value--;
  }

  function increment() {
    value++;
  }
</script>

<style>
  .range-selector {
    display: flex;
    justify-content: space-between;
  }

  .value {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 15px 25px;
    font-size: 1.5rem;
  }

  .btn {
    max-width: 75px;
  }
</style>

<div class="range-selector">
  <button class="btn btn--basic" on:click={decrement} disabled={value <= min}>
    -
  </button>
  <div class="value">{value}</div>
  <button class="btn btn--basic" on:click={increment} disabled={value >= max}>
    +
  </button>
</div>
