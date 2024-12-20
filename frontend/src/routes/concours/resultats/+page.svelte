<script>
let results = [
  {
    name: 'The city as a living organism',
    site: 'Biel/Bienne',
    position: 'Lauréat',
    participants: ['Charlélie Michel (FR)', 'Gaetan Amossé (FR)', 'Soukaina Laabida (MA)']
  },
  {
    name: 'My house',
    site: 'Biel/Bienne',
    position: 'Lauréat',
    participants: ['Morten Vestberg (DK)', 'Hansen (DK)', 'Christopher Galliano (DK)', 'Casper Juhler (DK)']
  },
  {
    name: 'Au fil de l’or',
    site: 'Carouge',
    position: 'Lauréat',
    participants: ['Marc de Tassigny (CH)', 'Leonhard Kanapin (CH)', 'Kim Pittier (CH)', 'Stefania Malangone (CH)', 'Félix Brüssow (DE)', 'Nicolas Waechter (FR)']
  },
  {
    name: 'Cultivating synergies',
    site: 'Carouge',
    position: 'Mentionné',
    participants: ['Steve Hardy (FR)', 'Lili Szabo (FR)', 'Dimitri Szabo (FR)']
  },
  {
    name: 'Regenerating carouge grounds',
    site: 'Carouge',
    position: 'Mentionné',
    participants: ['Philipp R.W. Urech (CH)', 'Antoine Vialle (FR)', 'Yannick Poyat (FR)']
  }
];

</script>

<div class="sites-grid">
  {#each results as result, i}
  <div class="site">
    <a class="no-hover" href="/">
      <h2 class="text-m">{result.name}</h2>
    </a>
    <div class="info text-xs">
      <div>
        <p class="mt-0">{result.site}</p>
        <p class="mt-0">{result.position}</p>
      </div>
      <div>
        {#each result.participants as participant, i}
        <p class="mt-0"><a href="#" target="_blank" rel="noopener noreferrer">{participant}</a></p>
        {/each}
      </div>
    </div>
  </div>
  {/each}
</div>

<style>
.sites-grid {
  grid-column: 3 / span 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: var(--gutter);
  row-gap: calc(var(--gutter)*1.5);
}
.site {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
.site>a {
  color: var(--white);
  background-color: var(--gray);
  aspect-ratio: var(--aspectRatio);
  padding: .4em .8em;
}
.info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: var(--gutter);
}
</style>