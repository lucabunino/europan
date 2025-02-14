<script>
const { data } = $props()
import Project from "$lib/components/Project.svelte";
import Person from "$lib/components/Person.svelte";
</script>

<article class="content">
  <section class="page-title">
    <h2 class="text-l">{data.singleCompetition[0].title}</h2>
    {#if data.singleCompetition[0].subtitle}<h3 class="text-s page-subtitle">{data.singleCompetition[0].subtitle}</h3>{/if}
  </section>
  <section class="projects-grid">
    {#each data.singleCompetition[0].featuredProjects as project}
      <Project project={project} result={project.result}/>
    {/each}
  </section>

  {#if data.singleCompetition[0].jury}
    <section class="jury">
      <p class="mt-0 jury-title text-m">Jury
      <div class="content grid cols-3 text-xs">
        {#if data.singleCompetition[0].juryPresident}
          <Person person={data.singleCompetition[0].juryPresident} president={true}/>
        {/if}      
        {#each data.singleCompetition[0].jury as juror, i}
          <Person person={juror}/>
        {/each}
      </div>
    </section>
  {/if}
</article>

<style>
.jury {
  margin-top: calc(var(--gutter)*6);
  margin-bottom: calc(var(--gutter)*3);
}
.jury-title {
  margin-bottom: calc(var(--gutter)*1);
}
.content {
  row-gap: calc(var(--gutter)*2);
}
</style>