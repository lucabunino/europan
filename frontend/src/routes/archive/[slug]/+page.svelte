<script>
const { data } = $props()
$inspect(data)
import Project from '$lib/components/project.svelte';
</script>

<article class="content">
  <section class="page-title">
    <h2 class="text-l">{data.singleCompetition[0].title}</h2>
    {#if data.singleCompetition[0].subtitle}<h3 class="text-s page-subtitle">{data.singleCompetition[0].subtitle}</h3>{/if}
  </section>
  {#if data.singleCompetition[0].jury}
    <section class="jury">
        <p class="mt-0">Jury: 
          {#each data.singleCompetition[0].jury as person, i}
            {person.name} {person.surname} ({person.country}){#if i+1 < data.singleCompetition[0].jury.length}{@html ', '}{/if}
          {/each}
        </p>
    </section>
  {/if}
  <section class="projects-grid">
    {#each data.singleCompetition[0].featuredProjects as project}
      <Project project={project} result={project.result}/>
    {/each}
  </section>
</article>

<style>
.jury {
  margin-bottom: calc(var(--gutter)*3)
}
.jury h4 {
  margin-bottom: .5em;
}
.jury p {
  max-width: 700px;
}
</style>