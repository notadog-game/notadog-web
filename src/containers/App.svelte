<script>
  import { onMount, beforeUpdate } from "svelte";
  import { Router, Route } from "svelte-routing";
  import { getNotificationsContext } from "svelte-notifications";
  import { locale, dictionary } from "svelte-i18n";

  import enLocale from "../i18n/en.json";
  import ruLocale from "../i18n/ru.json";

  import Progress from "./Progress.svelte";
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
  import { localeService } from "../services/locale";
  import { errors } from "../store/errors";
  import { EN_LOCALE_VALUE, RU_LOCALE_VALUE } from "../constants/i18n";

  const { addNotification, clearNotifications } = getNotificationsContext();

  export let url = "";
  let myToken = "";
  let isLocalesLoaded = false;

  onMount(() => {
    loadLocales();
    isLocalesLoaded = true;
  });

  beforeUpdate(() => {
    myToken = tokenService.get();
  });

  function loadLocales() {
    dictionary.set({
      [EN_LOCALE_VALUE]: enLocale,
      [RU_LOCALE_VALUE]: ruLocale,
    });

    const savedLocale = localeService.get();
    if (savedLocale) {
      locale.set(savedLocale);
      return;
    }

    const navigatorLocale = navigator.language.split("-")[0];
    if ($dictionary[navigatorLocale]) {
      locale.set(navigatorLocale);
      return;
    }

    locale.set(EN_LOCALE_VALUE);
  }

  locale.subscribe(value => {
    if (typeof value !== "string") return;
    localeService.set(value);
  });

  errors.subscribe(text => {
    if (!text) return;

    clearNotifications();
    addNotification({ text, position: "bottom-center", removeAfter: 2500 });

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

<Progress />

{#if isLocalesLoaded}
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
        <Route path="settings" component={Settings} />
        <Route path="statistics" component={Statistics} />
        <Route path="styleguide" component={Styleguide} />
      {:else}
        <Route path="login" component={Login} />
        <Route path="signup" component={Signup} />
      {/if}
      <Route path="*" component={Empty} />
    </div>
  </Router>
{/if}
