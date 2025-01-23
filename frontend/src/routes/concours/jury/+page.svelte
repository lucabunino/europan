<script>
const { data } = $props()
$inspect(data)
import { urlFor } from '$lib/utils/image';
</script>

<div class="page-title">
  <h2 class="text-l">Jury</h2>
</div>
<div class="content grid cols-3 text-xs">
  {#if data.competition.juryPresident}
    <div class="jury">
      <div class="thumbnail">
        {#if data.competition.juryPresident.thumbnail}
          <img src={urlFor(data.competition.juryPresident.thumbnail)} alt="">
        {:else}
          <p class="text-m">{Array.from(data.competition.juryPresident.name)[0]}{Array.from(data.competition.juryPresident.surname)[0]}</p>
        {/if}
      </div>
      {#if data.competition.juryPresident.thumbnail}<p class="mt-0">{data.competition.juryPresident.role}</p>{/if}
      {#if data.competition.juryPresident.email}<h2 class="mt-0"><a href="mailto:{data.competition.juryPresident.email}">{data.competition.juryPresident.name} {data.competition.juryPresident.surname} ↗</a></h2>{/if}
      {#each data.competition.juryPresident.jobs as job, i}
        <p class="mt-0">{job}</p>
      {/each}
      <p class="mt-0">{data.competition.juryPresident.country}</p>
    </div>
  {/if}

  {#each data.competition.jury as juror, i}
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
  row-gap: calc(var(--gutter)*2);
}
</style>