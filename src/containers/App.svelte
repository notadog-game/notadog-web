<script>
  import { beforeUpdate } from "svelte";
  import { Router, Route } from "svelte-routing";
  import { getNotificationsContext } from "svelte-notifications";
  import { locale, dictionary } from "svelte-i18n";

  import enLocale from "../i18n/en.json";
  import ruLocale from "../i18n/ru.json";

  import Navigation from "./Navigation.svelte";
  import Home from "./Home.svelte";
  import Login from "./Login.svelte";
  import Signup from "./Signup.svelte";
  import Empty from "./Empty.svelte";

  import Game from "./Game.svelte";
  import GameCreate from "./GameCreate.svelte";
  import GameId from "./GameId.svelte";
  import GameJoin from "./GameJoin.svelte";
  import Profile from "./Profile.svelte";
  import Settings from "./Settings.svelte";
  import Statistics from "./Statistics.svelte";
  import Styleguide from "./Styleguide.svelte";

  import { tokenService } from "../services/token";
  import { errors } from "../store/errors";

  const { addNotification, clearNotifications } = getNotificationsContext();

  export let url = "";
  let myToken = "";

  beforeUpdate(() => {
    myToken = tokenService.get();
  });

  dictionary.set({ en: enLocale, ru: ruLocale });
  locale.set("en");

  errors.subscribe(text => {
    if (!text) return;

    clearNotifications();
    addNotification({ text, position: "bottom-center" });

    errors.reset();
  });
</script>

<style>
  @media (min-width: 768px) {
    .app {
      padding-left: var(--NAD_SIDEBAR_WIDTH);
    }
  }
</style>

<Router {url}>
  <Navigation />

  <div class="app">
    <Route path="/" component={Home} />
    {#if myToken}
      <Route path="game" component={Game} />
      <Route path="game/:id" let:params; component={GameId} />
      <Route path="game/create" component={GameCreate} />
      <Route path="game/join" component={GameJoin} />
      <Route path="profile/*" component={Profile} />
      <Route path="settings/*" component={Settings} />
      <Route path="statistics" component={Statistics} />
      <Route path="styleguide" component={Styleguide} />
    {:else}
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
    {/if}
    <Route path="*" component={Empty} />
  </div>
</Router>
