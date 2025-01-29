<script>
const { data } = $props()
$inspect(data)
import { urlFor } from '$lib/utils/image';
</script>

<div class="content sites-grid">
  {#each data.competition.featuredSites as site, i}
  <a class="site no-hover" href="lieux/{site.slug.current}">
    {#if site.thumbnail}<img class="site-img" src={urlFor(site.thumbnail)} alt="Cover for {site.title}">{/if}
    <h2 class="text-m">{site.title}</h2>
  </a>
  {/each}
</div>

<style>

</style>