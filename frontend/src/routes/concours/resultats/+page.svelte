<script>
const { data } = $props()
import Project from '$lib/components/Project.svelte';
</script>

<div class="content projects-grid">
  {#each data.competition.featuredProjects as project, i}
    <Project project={project} result={project.result}/>
  {/each}
</div>