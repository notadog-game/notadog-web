<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let text = 'Button';
  function click() {
    dispatch("buttonClick");
  }
</script>

<style>
  button {
    align-items: center;
    border-radius: 10px;
    background-color: var(--NAD_BLACK);
    border: 1px solid var(--NAD_BLACK);
    color: var(--NAD_WHITE);
    display: flex;
    font-size: 16px;
    font-weight: 600;
    height: 60px;
    justify-content: center;
    width: 100%;
  }
  button:hover {
    background-color: var(--NAD_WHITE);
    color: var(--NAD_BLACK);
    cursor: pointer;
  }
</style>

<button on:click={click}>{text}</button>
