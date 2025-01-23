<script>
import { urlFor } from '$lib/utils/image';
const {
  project = null,
  prize = null,
} = $props();
</script>

<div class="project">
  <a class="no-hover" target="_blank" rel="noopener noreferrer" href={project.europanEuropeUrl}>
    <h2 class="text-m">{project.title}</h2>
    {#if project.thumbnail}<img class="project-img" src={urlFor(project.thumbnail)} alt="Cover for {project.title}">{/if}
  </a>
  <div class="project-info text-xs">
    <div>
      <p class="mt-0">{project.site.title}</p>
      {#if prize == 1}<p class="mt-0">Lauréat</p>{/if}
      {#if prize == 2}<p class="mt-0">Finaliste</p>{/if}
      {#if prize == 3}<p class="mt-0">Mentionné</p>{/if}
    </div>
    <div>
      {#each project.team as person, i}
        <p class="mt-0">{person.name} {person.surname} ({person.country})</p>
      {/each}
    </div>
  </div>
</div>