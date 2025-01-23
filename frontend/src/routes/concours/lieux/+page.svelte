<script>
const { data } = $props()
$inspect(data)
import { urlFor } from '$lib/utils/image';
</script>

<div class="content sites-grid">
  {#each data.competition.featuredSites as site, i}
  <a class="site no-hover" href="/">
    {#if site.siteReference.thumbnail}<img class="site-img" src={urlFor(site.siteReference.thumbnail)} alt="Cover for {site.siteReference.title}">{/if}
    <h2 class="text-m">{site.siteReference.title}</h2>
  </a>
  {/each}
</div>

<style>

</style>