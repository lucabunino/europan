<script>
const { data } = $props()
$inspect(data)
import Project from '$lib/components/Project.svelte';
</script>

<article class="content">
  <section class="page-title">
    <h2 class="text-l">{data.singleSite.title}</h2>
  </section>
  <section class="projects-grid">
    {#each data.singleSite.referencingProjects as project}
      <Project project={project} result={project.result}/>
    {/each}
  </section>
</article>