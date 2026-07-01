<script>
const { data } = $props()
import Project from '$lib/components/Project.svelte';
import AttachmentButton from '$lib/components/AttachmentButton.svelte';
</script>

<div class="content projects-grid">
  {#each data.competition.attachments || [] as attachment, i}
    <AttachmentButton attachment={attachment}/>
  {/each}
  {#each data.competition.featuredProjects as project, i}
    <Project project={project} result={project.result}/>
  {/each}
</div>
