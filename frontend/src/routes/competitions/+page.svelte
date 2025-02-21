<script>
const { data } = $props()
$inspect(data)

import * as m from "$lib/paraglide/messages"
</script>

<section class="content pages-grid">
  {#if data.competition.topicBody}
    <a class="page no-hover" href="/competitions/topic">
      <h2 class="text-m">{m.topic()} E{data.competition.edition}</h2>
    </a>
  {/if}
  {#if data.competition.processBody}
      <a class="page no-hover" href="/competitions/process">
        <h2 class="text-m">{m.process()}</h2>
      </a>
  {/if}
  {#if data.competition.featuredSites?.length > 0}
    <a class="page no-hover" href="/competitions/sites">
      <h2 class="text-m">{m.sites()}</h2>
    </a>
  {/if}
  {#if data.competition.juryPresident || data.competition.jury?.length > 0}
    <a class="page no-hover" href="/competitions/jury">
      <h2 class="text-m">{m.jury()}</h2>
    </a>
  {/if}
  {#if data.competition.showResults}
    <a class="page no-hover" href="/competitions/results">
      <h2 class="text-m">{m.results()}</h2>
    </a>
  {/if}
</section>