<script>
const { data, children } = $props()
// Import
import '../app.css'
import { page } from '$app/stores';
import { onMount } from "svelte";

// Multilanguage
import { ParaglideJS } from '@inlang/paraglide-sveltekit'
import { i18n } from '$lib/i18n'
import { availableLanguageTags, languageTag } from "$lib/paraglide/runtime.js";
import * as m from "$lib/paraglide/messages"

import Footer from '$lib/components/Footer.svelte';
import Header from '$lib/components/Header.svelte';

// Variables
let isLoaded = $state(false);

// Lifecycle
onMount(() => {
  setTimeout(() => {
    isLoaded = true
  }, 700);
})

// Grid (not needed in production)
let viewGrid = $state(false)
const gridColumnsDesktop = 6
const gridColumnsMobile = 4
function handleKey({key}) {if (key === 'G') {viewGrid = !viewGrid}}
</script>

<svelte:head>
  <title>{data.seo?.SEOTitle}</title>
  <meta name="description" content={data.seo?.SEODescription}>
  <link rel="canonical" href={$page.url}>
  <meta name="robots" content="index,follow">
  <meta name="googlebot" content="index,follow">
  <meta property="og:title" content={data.seo?.SEOTitle}>
  <meta property="og:description" content={data.seo?.SEODescription}>
  <meta property="og:url" content={$page.url}>
  <meta property="og:type" content="website">
  <meta property="og:site_name" content={data.seo?.SEOTitle}>
</svelte:head>

<svelte:window onkeyup={handleKey}></svelte:window>

{#if viewGrid}
<div id="layout"
      style="grid-template-columns:repeat({innerWidth > 800 ? gridColumnsDesktop : gridColumnsMobile}, 1fr);pointer-events:none;display: grid;position:fixed; z-index:999;width: -moz-available;width: -webkit-fill-available;height: -moz-available;height: -webkit-fill-available;margin:0 var(--gutter);gap:var(--gutter);opacity:.2;">
  {#each Array(innerWidth > 800 ? gridColumnsDesktop : gridColumnsMobile) as _, i}
    <div style="background-color:red"></div>
  {/each}
</div>
{/if}

<ParaglideJS {i18n}>
  <Header {data}/>
</ParaglideJS>

<ParaglideJS {i18n}>
  <main class:loaded={isLoaded}>
    <div>
      {@render children()}
    </div>
  </main>
</ParaglideJS>

<ParaglideJS {i18n}>
  <Footer {data}/>
</ParaglideJS>

<style>
/* Main */
main {
  -webkit-transition: var(--transition);
  -o-transition: var(--transition);
  transition: var(--transition);
  min-height: calc(100vh - (.777rem*4*1.2 + var(--gutter)*6));
  opacity: 1;
}
main.loaded {
  opacity: 1;
}
main>div {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr var(--gutter) 1fr var(--gutter) 1fr var(--gutter) 1fr var(--gutter) 1fr var(--gutter) 1fr;
  grid-template-columns: repeat(6, 1fr);
  -webkit-column-gap: var(--gutter);
     -moz-column-gap: var(--gutter);
          column-gap: var(--gutter);
  padding: var(--gutter) var(--gutter);
}
@media screen and (max-width: 1200px) {
  main {
    min-height: calc(100vh - (.777rem*4*1.2 + 6rem + var(--gutter)*6));
  }
  main>div {
    margin-top: 6rem;
  }
}
@media screen and (max-width: 900px) {
  nav {
    height: calc(100vh - var(--gutter)*2);
    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    overflow-y: scroll;
  }
  nav::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Edge */
  }
  .menu-item {
    cursor: pointer;
  }
  .menu-item-container {
    width: calc(100vw - var(--gutter)*2);
  }
  .submenu-container {
    position: unset;
  }
  .submenu {
    padding-left: 0;
    padding-top: .7rem;
  }
  .desktop-only {
    display: none !important;
  }
  .mobile-only {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
  }
}
</style>