<script>
let {data} = $props()
$inspect(data)

// Imports
import { onMount } from "svelte";

// Multilanguage
import * as m from "$lib/paraglide/messages"

// Variables
let headerType = $state(true)
let activeMenuItem = $state(false)
let activeMenuItemLast = $state(false)
let activeSubmenu = $state(false)
let activeSubmenuItem = $state(false)
let activeSubmenuItemLast = $state(false)
let activeMenu = $state(true)
let allOff = $state(false)
let timer;
let timer2;
let mobileMargin = $state()
let isLoaded = $state(false);

// Lifecycle
onMount(() => {
  setTimeout(() => {
    isLoaded = true
  }, 700);
  setTimeout(() => {
    headerType = false
    activeMenu = false
  }, 700);
})

function startCloseMenu() {
  timer = setTimeout(() => {
    closeMenu()
  }, 3000);
}

function closeMenu() {  
  activeMenu = false;
  activeMenuItem = false;
  activeMenuItemLast = false;
  activeSubmenu = false;
  activeSubmenuItem = false;
  activeSubmenuItemLast = false;
}

function startCloseSubmenu() {
  timer2 = setTimeout(() => {
    activeSubmenu = false;
    activeSubmenuItem = false;
    activeSubmenuItemLast = false;
  }, 700);
}

function handleMenuEnter(e) {
  activeMenuItemLast = false
  activeMenuItem = e.target.getAttribute('data-item')
  activeSubmenu = true
  activeSubmenuItem = false
}
function handleMenuEnterTouch(e) {
  activeMenuItem = true
  activeSubmenuItem = false
}
function handleMenuTouch(e) {
  if (activeMenuItemLast == e.target.getAttribute('data-item')) {
    activeMenuItem = true
    activeMenuItemLast = false
    activeSubmenu = false
    return
  }
  activeMenuItemLast = e.target.getAttribute('data-item')
  activeMenuItem = e.target.getAttribute('data-item')
  activeSubmenu = true
  activeSubmenuItem = false

  const submenuContainer = e.target.nextElementSibling;
  
  if (submenuContainer) {
    const submenu = submenuContainer.querySelector('.submenu');
    if (submenu) {
      const submenuHeight = submenu.offsetHeight;
      mobileMargin = submenuHeight
    }
  }
}
function handleMenuLeave(e) {
  activeMenuItemLast = e.target.getAttribute('data-item')
  if (innerWidth > 900) {
    activeMenuItem = true 
  }
}
function handleSubMenuEnter(e) {
  activeSubmenuItem = e.target.getAttribute('data-item')
}
function handleSubMenuLeave(e) {
  activeSubmenuItem = true
}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<header
class:on={activeMenu}
onmouseenter={() => {
  if (innerWidth > 900) {
    clearTimeout(timer);
  }
}}
onmouseleave={() => {
  if (innerWidth > 900) {
    startCloseMenu();
  }
}}
>
  <a class="logo no-hover desktop-only" href="/" data-item="0"
  aria-label="logo"
  class:type={headerType}
  onmouseenter={(e) => {
    if (!activeMenu) {
      activeMenu = true;
    }
    clearTimeout(timer);
    setTimeout(() => {
      if (!activeMenuItem) {
        activeMenuItem = true 
      }
    }, 1500);
  }}
  onmouseleave={(e) => {
    handleMenuLeave(e)
  }}
  onclick={() => {
    if (activeMenu) {
      closeMenu();
    }
  }}
  >
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
  <button class="logo no-hover mobile-only"
  aria-label="logo"
  data-item="0"
  class:type={headerType}
  onclick={() => {
    if (activeMenu) {
      closeMenu();
    } else {
      activeMenu = true
    }  }}
  >
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
  </button>
   
  <nav class="text-l">
    <div class="menu-container" class:off={!activeMenu}>
      <ul class="menu">
        <li class="menu-item-container mobile-only">
          <a class="menu-item"
          href="/"
          data-item="0"
          class:off={activeMenuItem && activeMenuItem !== '0'}
          onmouseenter={(e) => handleMenuEnter(e)}
          onmouseleave={(e) => handleMenuLeave(e)}
          onclick={(e) => {
            closeMenu()
            }}
          >{m.homepage()}</a>
        </li>
        <li class="menu-item-container"
        style="margin-bottom: {activeSubmenu && activeMenuItem === '1' || activeSubmenu && activeMenuItemLast === '1' ? mobileMargin : ''}px"
        class:undelayed={activeSubmenu && activeMenuItem === '1' || activeSubmenu && activeMenuItemLast === '1' ? mobileMargin : ''}
        >
          <a class="menu-item desktop-only"
          href="/competitions"
          data-item="1"
          class:off={activeMenuItem && activeMenuItem !== '1'}
          onmouseenter={(e) => handleMenuEnter(e)}
          onmouseleave={(e) => handleMenuLeave(e)}
          onclick={(e) => {
            closeMenu()
            }}
          >{m.competitions()}</a>

          <button class="menu-item mobile-only black"
          data-item="1"
          class:off={activeMenuItem && activeMenuItem !== '1'}
          onmouseenter={(e) => handleMenuEnterTouch(e)}
          onclick={(e) => {
            handleMenuTouch(e)
          }}
          >{m.competitions()}</button>
          <div class="submenu-container">
          <ul class="submenu"
          class:on={activeSubmenu && activeMenuItem === '1' || activeSubmenu && activeMenuItemLast === '1'}
          onmouseenter={(e) => {
            clearTimeout(timer);
            clearTimeout(timer2);
          }}
          onmouseleave={(e) => {
            startCloseSubmenu();
          }}
          >
            {#if data.competition?.topicBody}
            <li class="menu-item-container"><a class="menu-item" data-item="1" class:off={activeSubmenuItem && activeSubmenuItem !== '1'} onmouseenter={(e) => handleSubMenuEnter(e)} onmouseleave={(e) => handleSubMenuLeave(e)} onclick={(e) => {closeMenu()}} href="/competitions/topic">{m.topic()} E{data.competition.edition}</a></li>{/if}
            {#if data.competition?.processBody}
            <li class="menu-item-container"><a class="menu-item" data-item="2" class:off={activeSubmenuItem && activeSubmenuItem !== '2'} onmouseenter={(e) => handleSubMenuEnter(e)} onmouseleave={(e) => handleSubMenuLeave(e)} onclick={(e) => {closeMenu()}} href="/competitions/process">{m.process()}</a></li>{/if}
            {#if data.competition?.featuredSites?.length > 0}
            <li class="menu-item-container"><a class="menu-item" data-item="3" class:off={activeSubmenuItem && activeSubmenuItem !== '3'} onmouseenter={(e) => handleSubMenuEnter(e)} onmouseleave={(e) => handleSubMenuLeave(e)} onclick={(e) => {closeMenu()}} href="/competitions/sites">{m.sites()}</a></li>{/if}
            {#if data.competition?.juryPresident || data.competition?.jury?.length > 0}
            <li class="menu-item-container"><a class="menu-item" data-item="4" class:off={activeSubmenuItem && activeSubmenuItem !== '4'} onmouseenter={(e) => handleSubMenuEnter(e)} onmouseleave={(e) => handleSubMenuLeave(e)} onclick={(e) => {closeMenu()}} href="/competitions/jury">{m.jury()}</a></li>{/if}
            {#if data.competition?.showResults}
            <li class="menu-item-container"><a class="menu-item" data-item="5" class:off={activeSubmenuItem && activeSubmenuItem !== '5'} onmouseenter={(e) => handleSubMenuEnter(e)} onmouseleave={(e) => handleSubMenuLeave(e)} onclick={(e) => {closeMenu()}} href="/competitions/results">{m.results()}</a></li>{/if}
          </ul>
        </div>
        </li>
        <li class="menu-item-container">
          <a class="menu-item"
          href="/archive"
          data-item="2"
          class:off={activeMenuItem && activeMenuItem !== '2'}
          onmouseenter={(e) => handleMenuEnter(e)}
          onmouseleave={(e) => handleMenuLeave(e)}
          onclick={(e) => {closeMenu()}}
          >{m.archive()}</a>
        </li>
        <li class="menu-item-container"
        style="margin-bottom: {activeSubmenu && activeMenuItem === '3' || activeSubmenu && activeMenuItemLast === '3' ? mobileMargin : ''}px"
        class:undelayed={activeSubmenu && activeMenuItem === '3' || activeSubmenu && activeMenuItemLast === '3' ? mobileMargin : ''}
        >
          <a class="menu-item desktop-only"
          href="/about"
          data-item="3"
          class:off={activeMenuItem && activeMenuItem !== '3'}
          onmouseenter={(e) => handleMenuEnter(e)}
          onmouseleave={(e) => handleMenuLeave(e)}
          onclick={(e) => {closeMenu()}}
          >{m.about()}</a>

          <button class="menu-item mobile-only black"
          data-item="3"
          class:off={activeMenuItem && activeMenuItem !== '3'}
          onmouseenter={(e) => handleMenuEnterTouch(e)}
          onclick={(e) => {
            handleMenuTouch(e)
          }}
          >{m.about()}</button>
          <div class="submenu-container">
            <ul class="submenu"
            class:on={activeSubmenu && activeMenuItem === '3' || activeSubmenu && activeMenuItemLast === '3'}
            onmouseenter={(e) => {
              clearTimeout(timer);
              clearTimeout(timer2);
            }}
            onmouseleave={(e) => {
              startCloseSubmenu();
            }}
            >
              <li class="menu-item-container"><a class="menu-item" data-item="1" class:off={activeSubmenuItem && activeSubmenuItem !== '1'} onmouseenter={(e) => handleSubMenuEnter(e)} onmouseleave={(e) => handleSubMenuLeave(e)} onclick={(e) => {closeMenu()}} href="/about/what-is-europan">{m.whatIsEuropan()}</a></li>
              <li class="menu-item-container"><a class="menu-item" data-item="2" class:off={activeSubmenuItem && activeSubmenuItem !== '2'} onmouseenter={(e) => handleSubMenuEnter(e)} onmouseleave={(e) => handleSubMenuLeave(e)} onclick={(e) => {closeMenu()}} href="/about/team">{m.team()}</a></li>
              <li class="menu-item-container"><a class="menu-item" data-item="3" class:off={activeSubmenuItem && activeSubmenuItem !== '3'} onmouseenter={(e) => handleSubMenuEnter(e)} onmouseleave={(e) => handleSubMenuLeave(e)} onclick={(e) => {closeMenu()}} href="/about/partners">{m.partners()}</a></li>
              <li class="menu-item-container"><a class="menu-item" data-item="4" class:off={activeSubmenuItem && activeSubmenuItem !== '4'} onmouseenter={(e) => handleSubMenuEnter(e)} onmouseleave={(e) => handleSubMenuLeave(e)} onclick={(e) => {closeMenu()}} href="/about/support-us">{m.supportUs()}</a></li>
            </ul>
          </div>
        </li>
        <li class="menu-item-container">
          <a class="menu-item"
          href="/news"
          data-item="4"
          class:off={activeMenuItem && activeMenuItem !== '4'}
          onmouseenter={(e) => handleMenuEnter(e)}
          onmouseleave={(e) => handleMenuLeave(e)}
          onclick={(e) => {closeMenu()}}
          >{m.news()}</a>
        </li>
        <li class="menu-item-container">
          <a class="menu-item"
          href="/contact"
          data-item="5"
          class:off={activeMenuItem && activeMenuItem !== '5'}
          onmouseenter={(e) => handleMenuEnter(e)}
          onmouseleave={(e) => handleMenuLeave(e)}
          onclick={(e) => {closeMenu()}}
          >{m.contact()}</a>
        </li>
      </ul>
    </div>
  </nav>
</header>

<style>
/* Common */
.black {
  color: var(--black);
}
.mobile-only {
  display: none !important;
}

/* Header */
header {
  position: fixed;
  top: 0;
  left: 0;
  margin: var(--gutter);
  gap: .7rem;
  z-index: 3;
  pointer-events: none;
}
header.on {
  pointer-events: all;
}
.logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 4.444rem;
  z-index: 2;
  gap: .5rem;
  cursor: pointer;
  pointer-events: all;
  width: -webkit-fit-content;
  width: -moz-fit-content;
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
  -webkit-transition: var(--transition);
  -o-transition: var(--transition);
  transition: var(--transition);
}
.logo.type>div:first-of-type::after,
.logo:hover>div:first-of-type::after {
  width: 0%;
}
.logo>div svg {
  width: auto;
  height: 100%;
  -webkit-transition: var(--transition);
  -o-transition: var(--transition);
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
  -webkit-transform: rotate3d(0, 0, 1, -1turn);
          transform: rotate3d(0, 0, 1, -1turn)
}
nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: -webkit-fill-available;
  padding-top: .7rem;
}
.submenu-container {
  left: 100%;
  top: 0;
  position: absolute;
}
.menu,
.submenu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  gap: .7rem;
  list-style: none;
  padding: 0;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  position: relative;
}
.submenu {
  position: absolute;
  padding-left: .7rem;
  pointer-events: none;
}
.submenu.on {
  pointer-events: all;
}
.submenu .menu-item {
  pointer-events: all;
}
.menu-container.off .menu-item,
.submenu:not(.on) .menu-item {
  -webkit-transform: translateX(-101%);
      -ms-transform: translateX(-101%);
          transform: translateX(-101%);
}
.menu-item-container {
  overflow: hidden;
  -webkit-transition: var(--transition);
  -o-transition: var(--transition);
  transition: var(--transition);
  -webkit-transition-delay: .3s;
       -o-transition-delay: .3s;
          transition-delay: .3s;
}
.menu-item-container.undelayed {
  -webkit-transition-delay: 0s;
       -o-transition-delay: 0s;
          transition-delay: 0s;
}
.menu-item {
  display: inline-block;
  width: auto;
  position: relative;
  background-color: var(--grayOpacity);
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  -webkit-transition: var(--transition);
  -o-transition: var(--transition);
  transition: var(--transition);
  line-height: 1;
  padding: .1em .1em;
}
.menu-item-container:nth-child(1) .menu-item {-webkit-transition-delay: 0.00s;-o-transition-delay: 0.00s;transition-delay: 0.00s;}
.menu-item-container:nth-child(2) .menu-item {-webkit-transition-delay: 0.03s;-o-transition-delay: 0.03s;transition-delay: 0.03s;}
.menu-item-container:nth-child(3) .menu-item {-webkit-transition-delay: 0.06s;-o-transition-delay: 0.06s;transition-delay: 0.06s;}
.menu-item-container:nth-child(4) .menu-item {-webkit-transition-delay: 0.09s;-o-transition-delay: 0.09s;transition-delay: 0.09s;}
.menu-item-container:nth-child(5) .menu-item {-webkit-transition-delay: 0.12s;-o-transition-delay: 0.12s;transition-delay: 0.12s;}
.menu-item:before {
  content: '';
  display: block;
  height: 1.3em;
  top: -.1em;
  background-color: var(--blackOpacity);
  position: absolute;
  left: 0;
  z-index: 1;
  -webkit-transition: var(--transition);
  -o-transition: var(--transition);
  transition: var(--transition);
}
.menu-item.off::before {
  width: 100%;
}
.menu-item:not(.off)::before {
  width: 0;
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