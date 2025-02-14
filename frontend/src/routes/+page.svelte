<script>
const { data } = $props()
$inspect(data)
import News from '$lib/components/News.svelte';
</script>

{#each data.featuredNewses[0].featuredNews as news}
  <News news={news}></News>
{/each}