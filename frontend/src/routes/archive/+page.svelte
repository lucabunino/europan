<script>
const { data } = $props()

let innerWidth = $state()
let innerHeight = $state()
let activeNews = $state(true)

import { tick } from 'svelte';
$effect.pre(() => {
  tick().then(() => {
    window.scrollTo(0, innerWidth*.4);
  });
});

function updateActiveNews() {
  const threshold = innerWidth*.4; // Y-position threshold
  const newsElements = document.querySelectorAll(".competition"); // Get all news elements

  for (let i = 0; i < newsElements.length; i++) {
    const rect = newsElements[i].getBoundingClientRect();
    if (rect.top >= threshold) {
      activeNews = i;
      break;
    }
  }
}
</script>

<svelte:window bind:innerWidth bind:innerHeight onscroll={updateActiveNews}></svelte:window>

<section class="content competitions-grid">
  {#each data.archive as competition, i}
  <a class={innerWidth < 601 && activeNews == i ? 'competition no-hover active-news' : 'competition no-hover'} href="archive/{competition.slug.current}">
    <h2 class="text-xl">E{competition.edition}</h2>
    <div class="info text-xs">
      <p>{competition.title}</p>
      {#if competition.subtitle}<p class="mt-0">{competition.subtitle}</p>{/if}
      {#if competition.featuredSites}
        <p class="mt-0">
          {#each competition.featuredSites as site, j}
            {site.siteReference.title}{#if j+1 < competition.featuredSites.length}{@html ', '}{/if}
          {/each}
        </p>
      {/if}
    </div>
  </a>
  {/each}
</section>

<style>
.competitions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gutter);
}
.competition {
  position: relative;
}
h2 {
  height: .8em;
  width: fit-content;
  margin-left: -0.08em;
}
.competition h2::before {
  content: '';
  display: block;
  width: 0;
  height: inherit;
  background-color: var(--blackOpacity);
  position: absolute;
  z-index: -1;
  /* transition: var(--transition); */
  margin-left: 0.08em;
}
.competition .info {
  color: var(--white);
  padding: 1em;
  display: block;
  position: absolute;
  top: 0;
  /* transition: var(--transition); */
  overflow: hidden;
  width: 100%;
}
.competition .info p {
  /* transition: var(--transition); */
  transform: translateX(-101%);
}
.competition.active-news h2::before {
  width: 100%;
}
.competition.active-news .info p {
  transform: translateX(0);
}
@media screen and (min-width: 601px) {
  .competition:hover h2::before {
    width: 100%;
  }
  .competition:hover .info p {
    transform: translateX(0);
  }
}
@media screen and (max-width: 600px) {
  .competition:first-of-type {
    margin-top: 40vw;
  }
  .competition:last-of-type {
    margin-bottom: 40vw;
  }
  .competitions-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>