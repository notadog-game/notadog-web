<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let text;
  let data = ''
  let placeholder = 'enter your name'
  function change() {
    dispatch("inputChange", {
      data: data
    });
  }
</script>

<style>
input {
  border: none;
  border-bottom: 1px solid var(--NAD_MILK);
  color: var(--NAD_BLACK);
  font-family: Poppins;
  min-width: 0;
  padding-left: 10px;
  width: 100%;
}
input:focus {
  border-bottom-color: var(--NAD_BLACK);
  outline: none;
}
input::placeholder {
  color: var(--NAD_GREY);
}
</style>

<input type="text" placeholder={placeholder} on:change = {change} bind:value={data}/>
