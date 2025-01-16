<script>
const { data } = $props()
import { urlFor } from '$lib/utils/image';
</script>

<h2 class="text-l page-title">Equipe</h2>
<div class="content cols-3 text-xs">
  {#each data.team as member, i}
  <div class="member">
    <div class="thumbnail">
      {#if member.thumbnail}
        <img src={urlFor(member.thumbnail)} alt="">
      {:else}
        <p class="text-m">{Array.from(member.name)[0]}{Array.from(member.surname)[0]}</p>
      {/if}
    </div>
    <p class="mt-0">{member.role}</p>
    <h2 class="mt-0"><a href="mailto:{member.email}">{member.name} {member.surname} ↗</a></h2>
    <p class="mt-0">{member.email}</p>
    {#each member.jobs as job, i}
      <p class="mt-0">{job}</p>
    {/each}
    <p class="mt-0">{member.city}</p>
  </div>
  {/each}
</div>

<style>
h2 {
  grid-column: 3 / span 4;
}
.content {
  grid-column: 3 / span 3;
  row-gap: calc(var(--gutter)*2);
}
.thumbnail {
  background-color: var(--gray);
  width: 50%;
  aspect-ratio: 1;
  border-radius: 50%;
  margin-bottom: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.thumbnail p {
  text-align: center;
  margin-top: .1em;
}
</style>