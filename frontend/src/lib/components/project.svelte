<script>
const {
  project = null,
  result = null,
} = $props();
import { urlFor } from '$lib/utils/image';
import { PortableText } from '@portabletext/svelte'
import PortableTextStyle from '$lib/components/portableTextStyle.svelte';
</script>

<div class="project">
  <div class="project-img-container">
    <h2 class="text-m">{project.title}</h2>
    {#if project.thumbnail}<img class="project-img" src={urlFor(project.thumbnail).width(1080)} alt="Cover for {project.title}">{/if}
  </div>
  <div class="project-info text-xs">
    <div>
      <p class="mt-0">{project.title}</p>
      <p class="mt-0">{project.site.title}</p>
      {#if result == 1}<p class="mt-0">Lauréat</p>{/if}
      {#if result == 2}<p class="mt-0">Finaliste</p>{/if}
      {#if result == 3}<p class="mt-0">Mentionné</p>{/if}
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
    <a class="externalLink" target="_blank" rel="noopener noreferrer" href={project.europanEuropeUrl}>Voir le projet sur Europan Europe ↗</a>
  </div>
</div>