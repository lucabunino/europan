<script>
const { data } = $props()
$inspect(data)
import { urlFor } from '$lib/utils/image';
</script>

<h2 class="text-l page-title">Jury</h2>
<div class="content cols-3 text-xs">
  {#each data.jury.jury as juror, i}
  <div class="jury">
    <div class="thumbnail">
      {#if juror.thumbnail}
        <img src={urlFor(juror.thumbnail)} alt="">
      {:else}
        <p class="text-m">{Array.from(juror.name)[0]}{Array.from(juror.surname)[0]}</p>
      {/if}
    </div>
    {#if juror.thumbnail}<p class="mt-0">{juror.role}</p>{/if}
    <h2 class="mt-0"><a href="mailto:{juror.email}">{juror.name} {juror.surname} ↗</a></h2>
    {#each juror.jobs as job, i}
      <p class="mt-0">{job}</p>
    {/each}
    <p class="mt-0">{juror.country}</p>
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