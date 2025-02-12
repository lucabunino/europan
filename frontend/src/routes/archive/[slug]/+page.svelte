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
  <section class="projects-grid">
    {#each data.singleCompetition[0].featuredProjects as project}
      <Project project={project} result={project.result}/>
    {/each}
  </section>

  <!-- {#if data.singleCompetition[0].jury}
    <section class="jury">
        <p class="mt-0">Jury: 
          {#each data.singleCompetition[0].jury as person, i}
            {person.name} {person.surname} ({person.country}){#if i+1 < data.singleCompetition[0].jury.length}{@html ', '}{/if}
          {/each}
        </p>
    </section>
  {/if} -->
  {#if data.singleCompetition[0].jury}
    <section class="jury">
      <p class="mt-0 jury-title text-m">Jury
      <div class="content grid cols-3 text-xs">
        {#if data.singleCompetition[0].juryPresident}
          <div class="juror">
            <div class="thumbnail">
              {#if data.singleCompetition[0].juryPresident.thumbnail}
                <img src={urlFor(data.singleCompetition[0].juryPresident.thumbnail)} alt="">
              {:else}
                <p class="text-m">{Array.from(data.singleCompetition[0].juryPresident.name)[0]}{Array.from(data.singleCompetition[0].juryPresident.surname)[0]}</p>
              {/if}
            </div>
            {#if data.singleCompetition[0].juryPresident.thumbnail}<p class="mt-0">{data.singleCompetition[0].juryPresident.role}</p>{/if}
            <p>Président</p>
            {#if data.singleCompetition[0].juryPresident.email}
              <h2 class="mt-0"><a href="mailto:{data.singleCompetition[0].juryPresident.email}">{data.singleCompetition[0].juryPresident.name} {data.singleCompetition[0].juryPresident.surname} ↗</a></h2>
            {:else}
              <h2 class="mt-0">{data.singleCompetition[0].juryPresident.name} {data.singleCompetition[0].juryPresident.surname}</h2>
            {/if}
            {#each data.singleCompetition[0].juryPresident.jobs as job, i}
              <p class="mt-0">{job}</p>
            {/each}
            <p class="mt-0">{data.singleCompetition[0].juryPresident.country}</p>
          </div>
        {/if}
      
        {#each data.singleCompetition[0].jury as juror, i}
        <div class="juror">
          <div class="thumbnail">
            {#if juror.thumbnail}
              <img src={urlFor(juror.thumbnail)} alt="">
            {:else}
              <p class="text-m">{Array.from(juror.name)[0]}{Array.from(juror.surname)[0]}</p>
            {/if}
          </div>
          {#if juror.thumbnail}<p class="mt-0">{juror.role}</p>{/if}
          {#if juror.email}
              <h2 class="mt-0"><a href="mailto:{juror.email}">{juror.name} {juror.surname} ↗</a></h2>
            {:else}
              <h2 class="mt-0">{juror.name} {juror.surname}</h2>
            {/if}
          {#each juror.jobs as job, i}
            <p class="mt-0">{job}</p>
          {/each}
          <p class="mt-0">{juror.country}</p>
        </div>
        {/each}
      </div>
    </section>
  {/if}
</article>

<style>
.jury {
  margin-top: calc(var(--gutter)*3);
  margin-bottom: calc(var(--gutter)*3);
}
.jury-title {
  margin-bottom: calc(var(--gutter)*2);
}
.content {
  row-gap: calc(var(--gutter)*2);
}
.jury h4 {
  /* margin-bottom: .5em; */
}
.jury p {
  max-width: 700px;
}
</style>