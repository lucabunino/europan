<script>
const { data } = $props()
import { formatDate } from "$lib/utils/date";
import { onMount } from "svelte";

let innerWidth = $state()
let innerHeight = $state()
let activeNews = $state(true)

onMount(() => {
  window.scrollTo(0, innerWidth*.4);
});

function updateActiveNews() {
  const threshold = innerWidth*.4; // Y-position threshold
  const newsElements = document.querySelectorAll(".news"); // Get all news elements

  for (let i = 0; i < newsElements.length; i++) {
    const rect = newsElements[i].getBoundingClientRect(); // Get element position
    if (rect.top >= threshold) {
      activeNews = i; // Set active news index
      break; // Stop after finding the first element matching the condition
    }
  }
}
</script>

<svelte:window bind:innerWidth bind:innerHeight onscroll={updateActiveNews}></svelte:window>

<div class="content">
  {#each data.newses as news, i}
  <a class={innerWidth < 601 && activeNews == i ? 'news no-hover active-news' : 'news no-hover'} href="/news/{news.slug.current}">
    <h2 class="text-xl date">{innerWidth > 600 ? formatDate(news.date) : news.date.split("-")[2]} <div class="date-small"><span>{news.date.split("-")[1]}</span><span>{news.date.split("-")[0].slice(-2)}</span></div></h2>
    <div class="info text-xs">
      <p>{news.title}</p>
      <p class="mt-0">{news.subtitle}</p>
      <p class="mt-0">{news.place}</p>
    </div>
  </a>
  {/each}
</div>


<style>
.news {
  position: relative;
  width: 100%;
}
.news + .news {
  margin-top: 3rem;
}
h2 {
  height: .8em;
  width: fit-content;
}
.news h2::before {
  content: '';
  display: block;
  width: 0;
  height: inherit;
  background-color: var(--blackOpacity);
  position: absolute;
  z-index: -1;
  /* transition: var(--transition); */
}
.news.active-news h2::before {
  width: 100%;
}
.news .info {
  color: var(--white);
  padding: 1em;
  display: block;
  position: absolute;
  top: 0;
  /* transition: var(--transition); */
  overflow: hidden;
  width: 100%;
}
.news .info p {
  /* transition: var(--transition); */
  transform: translateX(-101%);
}
.news.active-news .info p {
  transform: translateX(0);
}
.date-small {
  display: none;
}
@media screen and (min-width: 601px) {
  .news:hover .info p {
    transform: translateX(0);
  }
  .news:hover h2::before {
    width: 100%;
  }
}
@media screen and (max-width: 600px) {
  .news:first-of-type {
    margin-top: 40vw;
  }
  .news:last-of-type {
    margin-bottom: 40vw;
  }
  .news + .news {
    margin-top: 3vw;
  }
  .date {
    font-variant-numeric: tabular-nums;
    font-size: 46.5vw;
    letter-spacing: 0;
    display: inline-flex;
    width: 100%;
  }
  .date-small {
    display: flex;
    flex-direction: column;
    font-size: 20vw;
    line-height: .95;
    margin-left: .05em;
  }
}
</style>