<script>
const { data } = $props()
$inspect(data)
import { PortableText } from '@portabletext/svelte'
import PortableTextStyle from '$lib/components/portableTextStyle.svelte';
import Project from '$lib/components/project.svelte';
</script>

<article class="content">
  <section class="page-title">
    <h2 class="text-l">{data.singleCompetition[0].title}</h2>
    {#if data.singleCompetition[0].subtitle}<h3 class="text-s page-subtitle">{data.singleCompetition[0].subtitle}</h3>{/if}
  </section>
  <section class="projects-grid">
    {#each data.singleCompetition[0].featuredSites as site, i}
      {#each site.winners as winner}
        <Project project={winner} prize=1/>
      {/each}
      {#each site.roundUps as roundUp}
        <Project project={roundUp} prize=2/>
      {/each}
      {#each site.specialMentions as specialMention}
        <Project project={specialMention} prize=3/>
      {/each}
    {/each}
  </section>
  {#if data.singleCompetition[0].jury}
    <section class="jury">
      <h4 class="text-ms">Jury</h4>
      <div>
        {#each data.singleCompetition[0].jury as person, i}
          <p class="mt-0">{person.name} {person.surname} ({person.country})</p>
        {/each}
      </div>
    </section>
  {/if}
</article>

<style>
.jury {
  margin-top: calc(var(--gutter)*1.5)
}
.jury h4 {
  margin-bottom: .5em;
}
</style>