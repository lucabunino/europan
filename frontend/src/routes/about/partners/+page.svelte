<script>
const { data } = $props()

// Multilanguage
import * as m from "$lib/paraglide/messages"
</script>

<article class="content">
  <section class="page-title">
    <h2 class="text-l page-title">{m.partners()}</h2>
  </section>
  <section class="grid cols-3 text-xs">
    {#each data.partners as partner, i}
      <a href={partner.url} target="_blank" rel="noopener noreferrer">
        <div class="logo">
          {#if partner.logo}
            <img src={partner.logoUrl} alt="">
          {/if}
        </div>
        <h3>{partner.title} ↗</h3>
      </a>
    {/each}
  </section>
</article>
  
<style>
.grid {
  row-gap: calc(var(--gutter)*3);
}
.logo {
  height: 6rem;
  max-width: 40%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: bottom left;
}
</style>