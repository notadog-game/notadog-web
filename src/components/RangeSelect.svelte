<script>
  import { onMount, onDestroy, beforeUpdate } from "svelte";

  export let value = 0;
  export let min = 0;
  export let max = 0;

  let items = [];

  beforeUpdate(() => {
    items = [...new Array(max - min)].map((e, i) => min + i);
  });
</script>

<style>

</style>

<select bind:value>
  {#each items as item}
    <option value={item}>{item}</option>
  {/each}
</select>
