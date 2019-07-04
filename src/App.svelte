<script>
  import Button from "./components/Button.svelte";
  import Input from "./components/Input.svelte";
  import PlayButton from "./components/PlayButton.svelte";
  export let name;

  function testFunction(data) {
    if (data) {
      console.log("data :", data);
    } else {
      console.log("no-data");
    }
  }
</script>

<style>

</style>

<div class="container">
  <h1>Not a Dog!</h1>
  <h2>Not a Dog!</h2>
  <Button on:buttonClick={testFunction} text={'NOT A DOG!!!'} />
  <Input on:inputChange={testFunction} text={'Заполните инпут'} />
  <span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum
    exercitationem maxime quas inventore alias impedit excepturi iste
    repudiandae obcaecati.
  </span>
  <PlayButton />
</div>
