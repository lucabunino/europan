<script>
  import { urlFor } from '$lib/utils/image';
  const { 
    person = [],
    president = false,
  } = $props();
</script>

<div class="juror">
  <div class="thumbnail">
    {#if person.thumbnail}
      <img src={urlFor(person.thumbnail)} alt="">
    {:else}
      <p class="text-m">{Array.from(person.name)[0]}{Array.from(person.surname)[0]}</p>
    {/if}
  </div>
  {#if person.thumbnail}<p class="mt-0">{person.role}</p>{/if}
  {#if president}<p>Président</p>{/if}
  {#if person.email}
    <h2 class="mt-0"><a href="mailto:{person.email}">{person.name} {person.surname}{#if person.country}{@html ` (${person.country})`}{/if} ↗</a></h2>
  {:else}
    <h2 class="mt-0">{person.name} {person.surname}{#if person.country}{@html ` (${person.country})`}{/if}</h2>
  {/if}
  {#each person.jobs as job, i}
    <p class="mt-0">{job}</p>
  {/each}
</div>

<style>
.jury p {
  max-width: 700px;
}
</style>