<script>
  import Button from "../components/Button.svelte";
  import PlayButton from "../components/PlayButton.svelte";
  import ProfileButton from "../components/ProfileButton.svelte";
  import PlayIcon from "../components/icons/PlayIcon.svelte";
  import StartIcon from "../components/icons/StartIcon.svelte";
  import UserCard from "../components/UserCard.svelte";

  function testFunction(evt) {
    if (evt) {
      console.log("data :", evt);
    } else {
      console.log("no-data");
    }
  }
</script>

<div class="container">
  <h1>Not a Dog!</h1>
  <h2>Not a Dog!</h2>
  <Button on:buttonClick={testFunction} text={'NOT A DOG!!!'} />
  <input on:change={testFunction} placeholder={'Заполните инпут'} />
  <span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum
    exercitationem maxime quas inventore alias impedit excepturi iste
    repudiandae obcaecati.
  </span>
  <PlayButton>
    <StartIcon />
  </PlayButton>
  <PlayButton>
    <PlayIcon />
  </PlayButton>

  <ProfileButton />
  <UserCard name={'Adam Sandler'} points={150} />
</div>
