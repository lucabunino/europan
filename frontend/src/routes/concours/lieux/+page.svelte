<script>
let sites = ['Carouge',  'Biel/Bienne',  'Lausanne',  'Zürich',  'Lugano',  'Basel',]
</script>

<div class="sites-grid">
  {#each sites as site, i}
  <a class="site no-hover" href="/">
    <h2 class="text-m">{site}</h2>
  </a>
  {/each}
</div>

<style>
.sites-grid {
  grid-column: 3 / span 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gutter);
}
.site {
  color: var(--white);
  background-color: var(--gray);
  aspect-ratio: var(--aspectRatio);
  padding: .4em .8em;
}
</style>