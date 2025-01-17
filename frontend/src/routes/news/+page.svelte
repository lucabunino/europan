<script>
  const { data } = $props()
  import { formatDate } from "$lib/utils/date";
</script>

{#each data.newses as news, i}
<a class="news no-hover" href="/news/{news.slug.current}">
  <h2 class="text-xl">{formatDate(news.date)}</h2>
  <div class="info text-xs">
    <p>{news.title}</p>
    <p class="mt-0">{news.subtitle}</p>
    <p class="mt-0">{news.place}</p>
  </div>
</a>
{/each}


<style>
.news {
  grid-column: 3 / span 4;
  position: relative;
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
  transition: var(--transition);
}
.news:hover h2::before {
  width: 100%;
}
.news .info {
  color: var(--white);
  padding: 1em;
  display: block;
  position: absolute;
  top: 0;
  transition: var(--transition);
  overflow: hidden;
  width: 100%;
}
.news .info p {
  transition: var(--transition);
  transform: translateX(-101%);
}
.news:hover .info p {
  transform: translateX(0);
}
</style>