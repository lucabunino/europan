<script>
let { data } = $props()

import { locales, getLocale, localizeHref, deLocalizeHref } from "$lib/paraglide/runtime.js"
import { getTranslations } from "$lib/stores/translations.svelte.js"
import * as m from "$lib/paraglide/messages"
import { page } from '$app/stores'

let translations = getTranslations()

let alternativeHref = $derived.by(() => {
  if (!translations.translations) return null
  if (getLocale() === "fr") {
    return translations.translations.find(t => t.language === "de")?.slug.current
  }
  if (getLocale() === "de") {
    return translations.translations.find(t => t.language === "fr")?.slug.current
  }
  return null
})

function getHref(lang) {
  if (data.pathname.includes(m.newsSlug()) || data.pathname.includes(m.archiveSlug())) {
    return lang !== getLocale() && alternativeHref ? alternativeHref : localizeHref(deLocalizeHref(data.pathname), { locale: lang })
  }
  return localizeHref(deLocalizeHref(data.pathname), { locale: lang })
}
</script>

{#if $page.url.hostname !== "europan.ch" && locales.length > 1}
<nav class="lang-switch text-xs" aria-label="Language switcher">
  <div class="lang-item-container">
    <span
      class="lang-item lang-current"
      aria-current="true"
      aria-label={getLocale() === "fr" ? "Français — langue active" : "Deutsch — aktive Sprache"}
    >{getLocale().toUpperCase()}</span>
  </div>
  {#each locales.filter(l => l !== getLocale()) as lang}
    <div class="lang-item-container">
      <a
        class="lang-item lang-other no-hover"
        data-sveltekit-reload
        href={getHref(lang)}
        hreflang={lang}
        lang={lang}
        aria-label={lang === "fr" ? "Passer en Français" : "Auf Deutsch wechseln"}
      >{lang.toUpperCase()}</a>
    </div>
  {/each}
</nav>
{/if}

<style>
.lang-switch {
  position: fixed;
  bottom: var(--gutter);
  left: var(--gutter);
  z-index: 100;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  gap: .2rem;
  user-select: none;
}
.lang-item-container {
  overflow: hidden;
  border-radius: 50%;
}
.lang-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  -webkit-transition: var(--transition);
  -o-transition: var(--transition);
  transition: var(--transition);
}
.lang-current {
  background-color: var(--black);
  color: var(--white);
}
.lang-other {
  background-color: var(--grayOpacity);
  color: var(--black);
  -webkit-transform: translateX(-101%);
      -ms-transform: translateX(-101%);
          transform: translateX(-101%);
  pointer-events: none;
}
.lang-switch:hover .lang-other {
  -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
          transform: translateX(0);
  pointer-events: auto;
}
.lang-other:hover {
  background-color: var(--black);
  color: var(--white);
}
@media screen and (max-width: 900px) {
  .lang-switch {
    left: auto;
    right: var(--gutter);
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  .lang-item {
    width: 4.444rem;
    height: 4.444rem;
    font-size: 1rem;
  }
  .lang-other {
    -webkit-transform: translateX(101%);
        -ms-transform: translateX(101%);
            transform: translateX(101%);
  }
  .lang-switch:hover .lang-other {
    -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
            transform: translateX(0);
  }
}
</style>
