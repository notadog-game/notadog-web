<script>
  import { beforeUpdate } from "svelte";

  export let common = 0;
  export let marked = 0;

  let players = [];

  beforeUpdate(() => {
    players = [
      ...new Array(marked).fill(true),
      ...new Array(common - marked).fill(false)
    ];
  });
</script>

<style>
  ul {
    display: flex;
  }

  li {
    height: 10px;
    width: 10px;
    margin: 2.5px;
    border-radius: 50%;
    border: 1px solid black;
  }

  li:first-of-type {
    margin-left: 0;
  }

  li:last-of-type {
    margin-right: 0;
  }

  li.active {
    background-color: green;
  }
</style>

<ul>
  {#each players as item}
    <li class={item ? 'active' : ''} />
  {/each}
</ul>
