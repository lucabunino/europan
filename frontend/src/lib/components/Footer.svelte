<script>
let {data} = $props()

// Imports
import { fade, slide } from "svelte/transition"

// Multilanguage
import { i18n } from '$lib/i18n'
import { availableLanguageTags, languageTag } from "$lib/paraglide/runtime.js";
import * as m from "$lib/paraglide/messages"

// Stores
import { getTranslations } from "$lib/stores/translations.svelte.js";
let translations = getTranslations()

let alternativeHref = $state()
if (translations.translations) {
  if (languageTag() === "fr") {
    alternativeHref = translations.translations.find(t => t.language === "de")?.slug.current
  }
  if (languageTag() === "de") {
    alternativeHref = translations.translations.find(t => t.language === "fr")?.slug.current
  }
}

// Variables
let creditsOpen = $state(false);
let creditsHeight = $state();
function toggleCredits() {
  creditsOpen = !creditsOpen;
  setTimeout(() => {
    const pageHeight = document.body.scrollHeight
    
    window.scrollTo({
      top: pageHeight + creditsHeight,
      behavior: "smooth" // Smooth scrolling effect
    });
  }, 200);
}
</script>

<footer class="text-xs">
  <div>
    <div>
      <ul>
        <li>Europan</li>
        <li>Schweiz</li>
        <li>Suisse</li>
        <li>Svizzera</li>
      </ul>
      <ul>
        {#each availableLanguageTags as lang}
          <li class="switch">
            {#if data.pathname.includes(m.newsSlug()) || data.pathname.includes(m.archiveSlug())}
              <a
              data-sveltekit-reload
              class={languageTag() === lang ? "active" : ""}
              href={lang !== languageTag() && alternativeHref ? alternativeHref : i18n.route(data.pathname)}
              hreflang={lang}
              aria-current={lang === languageTag() ? "page" : undefined}
              >→ {lang === "fr" ? "Français" : ""}{lang === "de" ? "Deutsch" : ""}</a>
            {:else}
              <a
              data-sveltekit-reload
              class={languageTag() === lang ? "active" : ""}
              href={i18n.route(data.pathname)}
              hreflang={lang}
              aria-current={lang === languageTag() ? "page" : undefined}
              >→ {lang === "fr" ? "Français" : ""}{lang === "de" ? "Deutsch" : ""}</a>
            {/if}
          </li>
        {/each}
        <li>© Copyright</li>
        <li>Europan {new Date().getFullYear()}</li>
      </ul>
      <ul>
        <li><a class:active={data.pathname == m.competitionsSlug() || data.pathname.includes(m.competitionsSlug())} href="/competitions">{m.competitions()}</a></li>
        <li><a class:active={data.pathname == m.archiveSlug() || data.pathname.includes(m.archiveSlug())} href="/archive">{m.archive()}</a></li>
        <li><a class:active={data.pathname == m.aboutSlug() || data.pathname.includes(m.aboutSlug())} href="/about">{m.about()}</a></li>
        <li><a class:active={data.pathname == m.newsSlug() || data.pathname.includes(m.newsSlug())} href="/news">{m.news()}</a></li>
      </ul>
      <ul>
        <li><a class:active={data.pathname == m.contactSlug()} href="/contact">{m.contact()}</a></li>
        <!-- HERE -->
        <!-- <li><a class:active={data.pathname == '/newsletter'} href="/newsletter">Newsletter</a></li> -->
        <li> <a href="https://www.instagram.com/europan_europe/" target="_blank" rel="noopener noreferrer">Instagram ↗</a></li>
        <li><button class:active={creditsOpen} onclick={(e) => toggleCredits()}>{#if !creditsOpen}{m.credits()}{:else}{m.close()}{/if}</button></li>
      </ul>
    </div>
  </div>
</footer>
{#if creditsOpen}
  <div id="credits" class="text-xs" bind:clientHeight={creditsHeight} in:slide={{ delay: 0, duration: 200 }} out:slide={{ delay: 0, duration: 200 }}>
    <p>{m.visualIdentity()}: <a class="credits-link" href="https://www.automaticostudio.com/" target="_blank" rel="noopener noreferrer">Automatico Studio ↗</a></p>
    <p class="mt-0">{m.development()}: <a class="credits-link" href="https://lucabunino.com/" target="_blank" rel="noopener noreferrer">Luca Bunino ↗</a></p>
    <p class="mt-0">{m.projectLeader()}: <a class="credits-link" href="https://www.studio-af.ch/" target="_blank" rel="noopener noreferrer">Alberto Figuccio ↗</a></p>
    <p class="mt-0">{m.editors()}: <a class="credits-link" href="https://www.studio-af.ch/" target="_blank" rel="noopener noreferrer">Alberto Figuccio ↗</a>, <a class="credits-link" href="https://urbanites.ch/bureau/" target="_blank" rel="noopener noreferrer">Marine Girault ↗</a> et <a class="credits-link" href="https://csarch.co/" target="_blank" rel="noopener noreferrer">Konrad Scheffer ↗</a></p>
  </div>
{/if}

<style>
/* Footer */
footer {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr var(--gutter) 1fr var(--gutter) 1fr var(--gutter) 1fr var(--gutter) 1fr var(--gutter) 1fr;
  grid-template-columns: repeat(6, 1fr);
  padding: calc(var(--gutter)*5) var(--gutter) var(--gutter);
  -webkit-column-gap: var(--gutter);
     -moz-column-gap: var(--gutter);
          column-gap: var(--gutter);
}
/* footer>*:nth-child(1) {
  grid-column: 1 / span 2;
} */
footer>*:nth-child(1) {
  -ms-grid-column: 3;
  -ms-grid-column-span: 4;
  grid-column: 3 / span 4;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-column-gap: var(--gutter);
     -moz-column-gap: var(--gutter);
          column-gap: var(--gutter);
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
}
footer>*:nth-child(1) div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-column-gap: var(--gutter);
     -moz-column-gap: var(--gutter);
          column-gap: var(--gutter);
  width: 100%;
}
footer ul {
  list-style: none;
  padding: 0;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
}
footer button {
  padding: 0;
  color: var(--black);
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
}
footer button:hover {
  color: var(--gray);
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
}
#credits {
  padding: var(--gutter);
  background-color: var(--black);
  color: var(--white);
}

@media screen and (max-width: 1200px) {
  footer>*:nth-child(1) {
    -ms-grid-column: 1;
    -ms-grid-column-span: 6;
    grid-column: 1 / span 6;
  }
}


@media screen and (max-width: 900px) {
  footer div {
    -ms-grid-column: 1;
    -ms-grid-column-span: 3;
    grid-column: 1 / 4;
  }
}

@media screen and (max-width: 600px) {
  footer ul {
    width: 25%
  }
}
</style>