<script>
const {
  project = null,
  prize = null,
} = $props();
import { urlFor } from '$lib/utils/image';
import { PortableText } from '@portabletext/svelte'
import PortableTextStyle from '$lib/components/portableTextStyle.svelte';
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
    <div class="body">
      {#if project.body}
        <PortableText
        value={project.body}
        components={{
          block: {
            normal: PortableTextStyle,
            h3: PortableTextStyle,
            h4: PortableTextStyle,
          },
          listItem: PortableTextStyle,
          marks: {
            link: PortableTextStyle,
          },
        }}
        />
      {/if}
    </div>
  </div>
</div>

<style>
.body {
  margin-top: 1.2em;
  grid-column: 1 / span 2;
}
</style>