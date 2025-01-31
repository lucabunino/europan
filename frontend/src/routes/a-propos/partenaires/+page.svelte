<script>
  const { data } = $props()
  $inspect(data)
  import { urlFor } from '$lib/utils/image';
</script>

<article class="content">
  <section class="page-title">
    <h2 class="text-l page-title">Partenaires</h2>
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
  /* max-width: 50%; */
  /* aspect-ratio: 1; */
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