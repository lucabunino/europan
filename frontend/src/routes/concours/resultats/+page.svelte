<script>
const { data } = $props()
$inspect(data)
import Project from '$lib/components/project.svelte';
</script>

<div class="content projects-grid">
  {#each data.competition.featuredProjects as project, i}
    <Project project={project} result={project.result}/>
  {/each}
</div>