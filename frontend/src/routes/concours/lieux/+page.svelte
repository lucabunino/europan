<script>
const { data } = $props()
$inspect(data)
import { urlFor } from '$lib/utils/image';
</script>

<div class="content sites-grid">
  {#each data.competition.featuredSites as featuredSite, i}
  {$inspect(featuredSite)}
  {#if featuredSite.siteUrl}
  <a class="site no-hover" href={featuredSite.siteUrl} target="_blank" rel="noopener noreferrer">
    {#if featuredSite.site.thumbnail}<img class="site-img" src={urlFor(featuredSite.site.thumbnail)} alt="Cover for {featuredSite.site.title}">{/if}
    <h2 class="text-m">{featuredSite.site.title}</h2>
  </a>
  {:else}
  <a class="site no-hover" href="lieux/{featuredSite.site.slug.current}">
    {#if featuredSite.site.thumbnail}<img class="site-img" src={urlFor(featuredSite.site.thumbnail)} alt="Cover for {featuredSite.site.title}">{/if}
    <h2 class="text-m">{featuredSite.site.title}</h2>
  </a>
  {/if}
  {/each}
</div>

<style>

</style>