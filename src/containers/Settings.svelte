<script>
  import { onMount } from "svelte";
  import { _, locale } from "svelte-i18n";
  import { LOCALES } from "../constants/i18n";
  import { localeService } from "../services/locale";

  let selectedLanguage;

  onMount(() => {
    selectedLanguage = localeService.get();
  });

  function localeChangeHandler() {
    locale.set(selectedLanguage);
  }
</script>

<style>

</style>

<h1>{$_('common.settings')}</h1>

<div class="container">
  <span>{$_('common.changeLanguage')}</span>
  <select bind:value={selectedLanguage} on:change={localeChangeHandler}>
    {#each LOCALES as locale}
      <option value={locale.value}>{locale.title}</option>
    {/each}
  </select>
</div>
