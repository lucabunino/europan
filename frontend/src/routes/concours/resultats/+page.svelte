<script>
const { data } = $props()
import { urlFor } from '$lib/utils/image';
import Project from '$lib/components/project.svelte';
</script>

<div class="content projects-grid">
  {#each data.competition.featuredSites as site, i}
    {#each site.winners as winner, i}
      <Project project={winner} prize=1/>
    {/each}
    {#each site.roundUps as roundUp, i}
      <Project project={roundUp} prize=2/>
    {/each}
    {#each site.specialMentions as specialMention, i}
      <Project project={specialMention} prize=3/>
    {/each}
  {/each}
</div>