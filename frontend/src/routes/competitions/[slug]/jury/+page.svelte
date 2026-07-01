<script>
const { data } = $props()
import Person from '$lib/components/Person.svelte';

// Multilanguage
import * as m from "$lib/paraglide/messages"
</script>

<div class="page-title">
  <h2 class="text-l">E{data.competition.edition}: {m.jury()}</h2>
</div>
<div class="content grid cols-3 text-xs">
  {#if data.competition.juryPresident}
    <Person person={data.competition.juryPresident} president={true} presidentFeminine={data.competition.juryPresidentFeminine ? true : false}/>
  {/if}
  {#if data.competition.jury}
    {#each data.competition.jury as juror, i}
      <Person person={juror}/>
    {/each}
  {/if}
</div>

<style>
h2 {
  grid-column: 3 / span 4;
}
.content {
  row-gap: calc(var(--gutter)*2);
}
</style>
