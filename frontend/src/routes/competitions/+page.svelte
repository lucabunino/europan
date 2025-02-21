<script>
const { data } = $props()
$inspect(data)
</script>

<section class="content pages-grid">
  {#if data.competition.topicBody}
    <a class="page no-hover" href="/concours/sujet">
      <h2 class="text-m">Sujet</h2>
    </a>
  {/if}
  {#if data.competition.processBody}
      <a class="page no-hover" href="/concours/deroulement">
        <h2 class="text-m">Déroulement</h2>
      </a>
  {/if}
  {#if data.competition.featuredSites?.length > 0}
    <a class="page no-hover" href="/concours/lieux">
      <h2 class="text-m">Lieux</h2>
    </a>
  {/if}
  {#if data.competition.juryPresident || data.competition.jury?.length > 0}
    <a class="page no-hover" href="/concours/jury">
      <h2 class="text-m">Jury</h2>
    </a>
  {/if}
  {#if data.competition.showResults}
    <a class="page no-hover" href="/concours/resultats">
      <h2 class="text-m">Resultats</h2>
    </a>
  {/if}
</section>