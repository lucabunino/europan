<script>
// Import
import '../app.css'
import { page } from '$app/stores';
import { onMount } from "svelte";
const { children } = $props()

// Variables
let headerType = $state(true)

// Lifecycle
onMount(() => {
  setTimeout(() => {
    headerType = false
    menuOpen = false
  }, 500);  
})
let activeMenuItem = $state(false)
let activeMenuItemLast = $state(false)
let activeSubMenuItem = $state(false)
let activeSubMenuItemLast = $state(false)
let menuOpen = $state(true)
function handleMenuEnter(e) {
  activeMenuItemLast = false
  activeMenuItem = e.target.getAttribute('data-item');
  activeSubMenuItem = false;
}
function handleMenuLeave(e) {
  activeMenuItemLast = e.target.getAttribute('data-item');
  activeMenuItem = false;
}
function handleSubMenuEnter(e) {
  activeSubMenuItemLast = false;
  activeSubMenuItem = e.target.getAttribute('data-item');
}
function handleSubMenuLeave(e) {
  activeSubMenuItemLast = e.target.getAttribute('data-item');  
  activeSubMenuItem = false;
}

// Grid (not needed in production)
let viewGrid = $state(false)
const gridColumnsDesktop = 6
const gridColumnsMobile = 4
function handleKey({key}) {if (key === 'G') {viewGrid = !viewGrid}}
</script>

<svelte:head>
  <title>Europan Suisse</title>
  <meta name="description" content="Europan Suisse est un concours d'idées dans le domaine de l'architecture et l'urbanisme, adressé aux architectes et aménagistes du territoire de moins de quarante ans et organisé périodiquement tous les deux ans.">
  <link rel="canonical" href={$page.url}>
  <meta name="robots" content="index,follow">
  <meta name="googlebot" content="index,follow">
  <meta property="og:title" content="Europan Suisse">
  <meta property="og:description" content="Europan Suisse est un concours d'idées dans le domaine de l'architecture et l'urbanisme, adressé aux architectes et aménagistes du territoire de moins de quarante ans et organisé périodiquement tous les deux ans.">
  <meta property="og:url" content={$page.url}>
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Europan Suisse">
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

<!-- <p class="text-m" style="position:fixed; top:50%; left:50%; z-index:10;background-color:var(--white)">M:{activeMenuItem} • ML:{activeMenuItemLast}<br>S:{activeSubMenuItem} • SL:{activeSubMenuItemLast}</p> -->

<header
class:on={menuOpen}
onmouseleave={() => {
  menuOpen = false; activeMenuItem = false;
  activeMenuItemLast = false;
  activeSubMenuItem = false,
  activeSubMenuItemLast = false
}}>
  <a class="logo no-hover" href="/" data-item="0" class:type={headerType} onmouseenter={(e) => {menuOpen = true;}} onclick={(e) => {menuOpen = false;}}>
    <div>
      <svg class="logo-type"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.16 66.19">
        <path d="M14.87 6.99h13.76v2.46H17.94v7.21h10.38v2.46H17.94v7.67h11v2.46H14.87V6.99zM42.81 13.9h2.92v15.35h-2.76v-2.21c-.98 1.44-2.67 2.52-4.82 2.52-3.53 0-5.62-2.27-5.62-5.46V13.91h2.92v9.15c0 2.64 1.2 4.11 3.53 4.11s3.84-2.09 3.84-4.11v-9.15ZM59.26 16.51c-.37-.06-.95-.12-1.47-.12-2.82 0-4.24 1.5-4.24 4.54v8.32h-2.92V13.9h2.7v2.61c.89-1.72 2.55-2.73 4.7-2.73.37 0 .86.06 1.23.12v2.61ZM60.64 21.67c0-4.79 3.04-8.07 7.52-8.07s7.52 3.16 7.52 7.89-3.04 8.07-7.52 8.07-7.52-3.16-7.52-7.89m3.07-.1c0 3.41 1.72 5.68 4.45 5.68s4.45-2.27 4.45-5.68-1.72-5.68-4.45-5.68-4.45 2.27-4.45 5.68M79.67 35.39V13.9h2.76v2.36c1.2-1.72 3.01-2.67 5.07-2.67 3.78 0 6.75 3.01 6.75 7.89s-3.04 8.07-6.75 8.07c-2 0-3.72-.83-4.91-2.36v8.2h-2.92Zm2.91-13.82c0 3.56 1.72 5.68 4.3 5.68s4.3-2.12 4.3-5.68-1.72-5.68-4.3-5.68-4.3 2.12-4.3 5.68M97.99 18.44c.43-2.95 2.79-4.85 6.14-4.85 3.87 0 6.17 2.03 6.17 5.31v5.13c0 2.15.18 3.81.86 5.22h-3.07c-.27-.61-.4-1.32-.49-2.12-.92 1.35-2.61 2.43-4.94 2.43-3.32 0-5.49-1.75-5.49-4.54 0-3.28 3.16-5.77 10.22-5.03v-.77c0-2.27-1.07-3.47-3.25-3.47-1.84 0-2.88.92-3.19 2.7H98Zm5.28 8.87c2.33 0 4.11-1.41 4.11-3.9v-1.32c-5.46-.61-7.15.8-7.15 2.73 0 1.54 1.17 2.49 3.04 2.49M117.91 29.25h-2.92V13.9h2.76v2.27c.98-1.44 2.7-2.58 4.91-2.58 3.62 0 5.71 2.36 5.71 5.56v10.1h-2.92v-9.06c0-2.64-1.2-4.21-3.62-4.21s-3.93 2.18-3.93 4.21v9.06ZM26.85 41.71c-.25-2.3-2.15-3.72-4.94-3.72s-4.54 1.26-4.54 3.41c0 2.67 2.85 3.35 5.77 4.11 3.56.95 7.12 2.18 7.12 6.39s-3.13 6.63-8.01 6.63-8.44-2.7-8.6-6.78h3.32c.15 2.76 2.12 4.39 5.46 4.39 2.79 0 4.73-1.41 4.73-3.72 0-2.98-3.29-3.59-6.33-4.39-3.5-.92-6.48-2.27-6.48-6.23 0-3.56 3.1-6.14 7.58-6.14s7.89 2.43 8.2 6.05h-3.28ZM44.28 42.87h2.92v15.35h-2.76v-2.21c-.98 1.44-2.67 2.52-4.82 2.52-3.53 0-5.62-2.27-5.62-5.47V42.87h2.92v9.15c0 2.64 1.2 4.11 3.53 4.11s3.84-2.09 3.84-4.11v-9.15ZM52.1 35.97h2.92v3.68H52.1v-3.68Zm2.92 22.25H52.1V42.87h2.92v15.35ZM61.74 53.22c.24 2.21 1.72 3.16 3.87 3.16 1.97 0 3.07-.95 3.07-2.24 0-1.87-2.36-2.09-4.42-2.67-2.15-.61-4.88-1.51-4.88-4.51 0-2.61 2.3-4.39 5.71-4.39s6.23 1.87 6.33 4.85h-2.89c-.09-1.81-1.57-2.76-3.5-2.76s-2.89.86-2.89 2.06c0 1.69 2.03 1.97 3.81 2.46 2.43.68 5.56 1.41 5.56 4.64 0 2.92-2.33 4.73-6.02 4.73s-6.48-1.87-6.66-5.31h2.92ZM77.15 53.22c.25 2.21 1.72 3.16 3.87 3.16 1.96 0 3.07-.95 3.07-2.24 0-1.87-2.36-2.09-4.42-2.67-2.15-.61-4.88-1.51-4.88-4.51 0-2.61 2.3-4.39 5.71-4.39s6.23 1.87 6.32 4.85h-2.89c-.09-1.81-1.57-2.76-3.5-2.76s-2.89.86-2.89 2.06c0 1.69 2.03 1.97 3.81 2.46 2.43.68 5.56 1.41 5.56 4.64 0 2.92-2.33 4.73-6.02 4.73s-6.48-1.87-6.66-5.31h2.92ZM92.77 51.01c.15 3.32 1.75 5.37 4.27 5.37 1.9 0 3.25-1.1 3.74-3.16h2.98c-.77 3.38-3.32 5.31-6.72 5.31-4.42 0-7.21-3.07-7.21-7.89s2.82-8.07 7.06-8.07 7.31 3.16 6.97 8.44H92.78Zm.09-2h7.92c-.21-2.89-1.81-4.3-3.9-4.3-2.21 0-3.65 1.53-4.02 4.3M157.75 12.73c-.25-2.3-2.15-3.71-4.94-3.71s-4.54 1.26-4.54 3.41c0 2.67 2.85 3.35 5.77 4.11 3.56.95 7.12 2.18 7.12 6.39s-3.13 6.63-8.01 6.63-8.44-2.7-8.6-6.78h3.32c.15 2.76 2.12 4.39 5.46 4.39 2.79 0 4.73-1.41 4.73-3.71 0-2.98-3.29-3.59-6.33-4.39-3.5-.92-6.48-2.27-6.48-6.23 0-3.56 3.1-6.14 7.58-6.14s7.89 2.43 8.2 6.05h-3.29ZM171.44 13.59c3.5 0 6.11 2.09 6.6 5.31h-3.13c-.31-1.81-1.69-3.01-3.47-3.01-2.52 0-4.15 2.21-4.15 5.68s1.63 5.68 4.21 5.68c1.87 0 3.19-1.14 3.56-3.01h2.98c-.52 3.25-3.07 5.31-6.6 5.31-4.45 0-7.21-3.04-7.21-7.89s3.04-8.07 7.21-8.07M184.64 29.25h-2.92V6.99h2.92v8.97c1.01-1.35 2.64-2.36 4.76-2.36 3.62 0 5.71 2.36 5.71 5.56v10.1h-2.92V20.2c0-2.64-1.2-4.21-3.62-4.21s-3.93 2.18-3.93 4.21v9.06ZM202.69 29.25l-4.61-15.35h2.98l3.77 13.02 3.78-13.02h2.83l3.74 12.86 3.72-12.86h2.91l-4.6 15.35h-3.84l-3.41-11.79-3.44 11.79h-3.83zM227.06 22.03c.15 3.32 1.75 5.37 4.27 5.37 1.9 0 3.25-1.1 3.74-3.16h2.98c-.77 3.38-3.32 5.31-6.72 5.31-4.42 0-7.21-3.07-7.21-7.89s2.82-8.07 7.06-8.07 7.31 3.16 6.97 8.44h-11.08Zm.09-1.99h7.92c-.21-2.89-1.81-4.3-3.9-4.3-2.21 0-3.65 1.53-4.02 4.3M242.19 6.99h2.92v3.68h-2.92V6.99Zm2.91 22.26h-2.92V13.9h2.92v15.35ZM248.79 27.1l8.16-10.9h-8.16v-2.3h11.85v2.15l-8.38 10.9h8.5v2.3h-11.97V27.1zM157.75 41.71c-.25-2.3-2.15-3.72-4.94-3.72s-4.54 1.26-4.54 3.41c0 2.67 2.85 3.35 5.77 4.11 3.56.95 7.12 2.18 7.12 6.39s-3.13 6.63-8.01 6.63-8.44-2.7-8.6-6.78h3.32c.15 2.76 2.12 4.39 5.46 4.39 2.79 0 4.73-1.41 4.73-3.72 0-2.98-3.29-3.59-6.33-4.39-3.5-.92-6.48-2.27-6.48-6.23 0-3.56 3.1-6.14 7.58-6.14s7.89 2.43 8.2 6.05h-3.29ZM169.14 58.22l-5.83-15.35h2.97l4.76 12.87 4.76-12.87h2.86l-5.84 15.35h-3.68zM181.26 35.97h2.92v3.68h-2.92v-3.68Zm2.92 22.25h-2.92V42.87h2.92v15.35ZM187.86 56.07l8.17-10.89h-8.17v-2.31h11.85v2.15l-8.38 10.9h8.5v2.3h-11.97v-2.15zM202.29 56.07l8.16-10.89h-8.16v-2.31h11.85v2.15l-8.38 10.9h8.5v2.3h-11.97v-2.15zM219.97 51.01c.15 3.32 1.75 5.37 4.27 5.37 1.9 0 3.25-1.1 3.74-3.16h2.98c-.77 3.38-3.32 5.31-6.72 5.31-4.42 0-7.21-3.07-7.21-7.89s2.82-8.07 7.06-8.07 7.31 3.16 6.97 8.44h-11.08Zm.09-2h7.92c-.21-2.89-1.81-4.3-3.9-4.3-2.21 0-3.65 1.53-4.02 4.3M243.72 45.48c-.37-.06-.95-.12-1.47-.12-2.82 0-4.24 1.5-4.24 4.54v8.32h-2.92V42.87h2.7v2.61c.89-1.72 2.55-2.73 4.7-2.73.37 0 .86.06 1.23.12v2.61ZM246.7 47.42c.43-2.95 2.79-4.85 6.14-4.85 3.87 0 6.17 2.03 6.17 5.31v5.13c0 2.15.18 3.81.86 5.22h-3.07c-.28-.61-.4-1.32-.49-2.12-.92 1.35-2.61 2.43-4.94 2.43-3.32 0-5.49-1.75-5.49-4.54 0-3.29 3.16-5.77 10.22-5.04v-.77c0-2.27-1.07-3.47-3.25-3.47-1.84 0-2.89.92-3.19 2.7h-2.95Zm5.28 8.87c2.33 0 4.11-1.41 4.11-3.9v-1.32c-5.46-.61-7.15.8-7.15 2.73 0 1.53 1.17 2.49 3.04 2.49"/>
      </svg>
    </div>
    <div>
      <svg class="logo-e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.19 66.19">
        <path d="M49.76 40.15v10.42H18.54V15.53h15.89v10.42H30.9v1.89h11.13v10.42H30.9v1.89h18.86z"/>
      </svg>
    </div>
  </a>
  <nav class="text-l">
    <ul class="menu" class:off={!menuOpen}>
      <li class="menu-item-container">
        <a class="menu-item"
        href="/concours"
        data-item="1"
        class:off={activeMenuItem && activeMenuItem !== '1' || activeMenuItemLast && activeMenuItemLast !== '1'}
        onmouseenter={(e) => handleMenuEnter(e)}
        onmouseleave={(e) => handleMenuLeave(e)}
        onclick={(e) => {menuOpen = false;}}
        >Concours</a>
        <div class="submenu-container">
          <ul class="submenu" class:on={activeMenuItem && activeMenuItem === '1' || activeMenuItemLast === '1'}>
            <li class="menu-item-container"><a class="menu-item" data-item="1" class:off={activeSubMenuItem && activeSubMenuItem !== '1'} onmouseenter={(e) => handleSubMenuEnter(e)} onmouseleave={(e) => handleSubMenuLeave(e)} onclick={(e) => {menuOpen = false;}} href="/concours/thematiques">Thématiques</a></li>
            <li class="menu-item-container"><a class="menu-item" data-item="2" class:off={activeSubMenuItem && activeSubMenuItem !== '2'} onmouseenter={(e) => handleSubMenuEnter(e)} onmouseleave={(e) => handleSubMenuLeave(e)} onclick={(e) => {menuOpen = false;}} href="/concours/lieux">Lieux</a></li>
            <li class="menu-item-container"><a class="menu-item" data-item="3" class:off={activeSubMenuItem && activeSubMenuItem !== '3'} onmouseenter={(e) => handleSubMenuEnter(e)} onmouseleave={(e) => handleSubMenuLeave(e)} onclick={(e) => {menuOpen = false;}} href="/concours/jury">Jury</a></li>
            <li class="menu-item-container"><a class="menu-item" data-item="4" class:off={activeSubMenuItem && activeSubMenuItem !== '4'} onmouseenter={(e) => handleSubMenuEnter(e)} onmouseleave={(e) => handleSubMenuLeave(e)} onclick={(e) => {menuOpen = false;}} href="/concours/resultats">Resultats</a></li>
          </ul>
        </div>
      </li>
      <li class="menu-item-container">
        <a class="menu-item"
        href="/archive"
        data-item="2"
        class:off={activeMenuItem && activeMenuItem !== '2' || activeMenuItemLast && activeMenuItemLast !== '2'}
        onmouseenter={(e) => handleMenuEnter(e)}
        onmouseleave={(e) => handleMenuLeave(e)}
        onclick={(e) => {menuOpen = false;}}
        >Archive</a>
      </li>
      <li class="menu-item-container">
        <a class="menu-item"
        href="/a-propos"
        data-item="3"
        class:off={activeMenuItem && activeMenuItem !== '3' || activeMenuItemLast && activeMenuItemLast !== '3'}
        onmouseenter={(e) => handleMenuEnter(e)}
        onmouseleave={(e) => handleMenuLeave(e)}
        onclick={(e) => {menuOpen = false;}}
        >A propos</a>
        <div class="submenu-container" style="margin-top: calc(-2.4em - 1.4rem);">
          <ul class="submenu" class:on={activeMenuItem && activeMenuItem === '3' || activeMenuItemLast === '3'}>
            <li class="menu-item-container"><a class="menu-item" data-item="1" class:off={activeSubMenuItem && activeSubMenuItem !== '1'} onmouseenter={(e) => handleSubMenuEnter(e)} onmouseleave={(e) => handleSubMenuLeave(e)} onclick={(e) => {menuOpen = false;}} href="/a-propos/qu-est-ce-qu-europan">Qu’est-ce qu’Europan ?</a></li>
            <li class="menu-item-container"><a class="menu-item" data-item="2" class:off={activeSubMenuItem && activeSubMenuItem !== '2'} onmouseenter={(e) => handleSubMenuEnter(e)} onmouseleave={(e) => handleSubMenuLeave(e)} onclick={(e) => {menuOpen = false;}} href="/a-propos/equipe">Equipe</a></li>
            <li class="menu-item-container"><a class="menu-item" data-item="3" class:off={activeSubMenuItem && activeSubMenuItem !== '3'} onmouseenter={(e) => handleSubMenuEnter(e)} onmouseleave={(e) => handleSubMenuLeave(e)} onclick={(e) => {menuOpen = false;}} href="/a-propos/partenaires">Partenaires</a></li>
            <li class="menu-item-container"><a class="menu-item" data-item="4" class:off={activeSubMenuItem && activeSubMenuItem !== '4'} onmouseenter={(e) => handleSubMenuEnter(e)} onmouseleave={(e) => handleSubMenuLeave(e)} onclick={(e) => {menuOpen = false;}} href="/a-propos/soutenez-nous">Soutenez-nous</a></li>
          </ul>
        </div>
      </li>
      <li class="menu-item-container">
        <a class="menu-item"
        href="/news"
        data-item="4"
        class:off={activeMenuItem && activeMenuItem !== '4' || activeMenuItemLast && activeMenuItemLast !== '4'}
        onmouseenter={(e) => handleMenuEnter(e)}
        onmouseleave={(e) => handleMenuLeave(e)}
        onclick={(e) => {menuOpen = false;}}
        >News</a>
      </li>
      <li class="menu-item-container">
        <a class="menu-item"
        href="/contact"
        data-item="5"
        class:off={activeMenuItem && activeMenuItem !== '5' || activeMenuItemLast && activeMenuItemLast !== '5'}
        onmouseenter={(e) => handleMenuEnter(e)}
        onmouseleave={(e) => handleMenuLeave(e)}
        onclick={(e) => {menuOpen = false;}}
        >Contact</a>
      </li>
    </ul>
  </nav>
</header>

<main>
  {@render children()}
</main>

<footer class="text-xs">
  <p>Europan<br>Schweiz<br>Suisse<br>Svizzera</p>
  <div>
    <div>
      <ul>
        <li><a class="active" href="/fr">→ Français</a></li>
        <li><a href="/de">→ Deutsch</a></li>
        <li>© Copyright</li>
        <li>Europan {new Date().getFullYear()}</li>
      </ul>
      <ul>
        <li><a href="/concours">Concours</a></li>
        <li><a href="/archive">Archive</a></li>
        <li><a href="/concours">A propos</a></li>
        <li><a href="/concours">News</a></li>
      </ul>
      <ul>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/newsletter">Newsletter</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="/credits">Credits</a></li>
      </ul>
    </div>
    <div>
      <a class="no-hover" target="_blank" href="https://www.sia.ch/"><img src="/logo/sia.svg" alt="sia logo"></a>
      <a class="no-hover" target="_blank" href="https://www.bsla.ch/"><img src="/logo/fsap.svg" alt="bsla logo"></a>
      <a class="no-hover" target="_blank" href="https://gvb.ch/"><img src="/logo/gvb.svg" alt="gvb logo"></a>
      <a class="no-hover" target="_blank" href="https://www.bsa-fas.ch/"><img src="/logo/bsafas.svg" alt="bsafas logo"></a>
      <a class="no-hover" target="_blank" href="https://www.geneve.ch/"><img src="/logo/geneve.svg" alt="geneve logo"></a>
    </div>
  </div>
</footer>



<style>
/* Header */
header {
  position: fixed;
  top: 0;
  left: 0;
  margin: var(--gutter);
  gap: .7rem;
  z-index: 3;
  border: solid red;
  width: -webkit-fill-available;
  pointer-events: none;
}
header.on {
  pointer-events: all;
}
.logo {
  display: flex;
  height: 4.444rem;
  z-index: 2;
  gap: .5rem;
  cursor: pointer;
  margin-bottom: .7rem;
  pointer-events: all;
  width: fit-content;
}
.logo>div {
  height: 100%;
}
.logo>div:first-of-type {
  background-color: var(--grayOpacity);
  fill: var(--black);
}
.logo>div:first-of-type::after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  top: -100%;
  left: 0;
  background-color: var(--blackOpacity);
  transition: var(--transition);
}
.logo.type>div:first-of-type::after,
.logo:hover>div:first-of-type::after {
  width: 0%;
}
.logo>div svg {
  width: auto;
  height: 100%;
  transition: var(--transition);
  vertical-align: middle;
}
.logo>div:last-of-type svg {
  background-color: var(--black);
  border-radius: 50%;
  fill: var(--white);
}
.logo.type>div:last-of-type svg,
.logo:hover>div:last-of-type svg {
  background-color: var(--grayOpacity);
  fill: var(--black);
  transform: rotate3d(0, 0, 1, -1turn)
}
nav {
  display: flex;
  width: -webkit-fill-available;
}
.submenu-container {
  left: 100%;
  position: absolute;
}
.menu,
.submenu {
  display: flex;
  flex-direction: column;
  gap: .7rem;
  list-style: none;
  padding: 0;
  width: max-content;
  position: relative;
}
.menu.off .menu-item,
.submenu:not(.on) .menu-item {
  transform: translateX(-101%);
}
.menu-item-container {
  overflow: hidden;
}
.menu-item {
  display: inline-block;
  width: auto;
  position: relative;
  background-color: var(--grayOpacity);
  width: fit-content;
  transition: var(--transition);
  padding: 0 .2em;
}
.menu-item-container:nth-child(1) .menu-item {transition-delay: 0.00s;}
.menu-item-container:nth-child(2) .menu-item {transition-delay: 0.05s;}
.menu-item-container:nth-child(3) .menu-item {transition-delay: 0.10s;}
.menu-item-container:nth-child(4) .menu-item {transition-delay: 0.15s;}
.menu-item-container:nth-child(5) .menu-item {transition-delay: 0.20s;}
.menu-item:before {
  content: '';
  display: block;
  height: 5rem;
  background-color: var(--blackOpacity);
  position: absolute;
  left: 0;
  z-index: 1;
  transition: var(--transition);
}
.menu-item.off::before {
  width: 100%;
}
.menu-item:not(.off)::before {
  width: 0;
}
.submenu {
  position: absolute;
  top: -1.2em;
  padding-left: .7rem;
  pointer-events: none;
}
.submenu .menu-item {
  pointer-events: all;
}

/* Main */
main {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: var(--gutter);
  padding: var(--gutter) var(--gutter);
}


/* Footer */
footer {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: calc(var(--gutter)*5) var(--gutter) var(--gutter);
  column-gap: var(--gutter);
}
footer>*:nth-child(1) {
  grid-column: 1 / span 2;
}
footer>*:nth-child(2) {
  grid-column: 3 / span 4;
  display: flex;
  column-gap: var(--gutter);
  justify-content: space-between;
  align-items: flex-end;
}
footer>*:nth-child(2) div {
  display: flex;
  column-gap: var(--gutter);
}
footer ul {
  list-style: none;
  padding: 0;
  width: max-content;
}
footer img {
  height: 2.2rem;
  width: auto;
}

@media screen and (max-width: 900px) {
  footer div,
  footer p {
    grid-column: 1 / 4;
  }
}

@media screen and (max-width: 600px) {
  section:not(#hero) {
    grid-template-columns: repeat(1, 1fr);
  }
  section:not(#hero)>div {
    grid-column: unset;
  }
}
</style>