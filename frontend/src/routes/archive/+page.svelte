<script>
let competitions = ['E16', 'E15', 'E14', 'E13', 'E12', 'E11', 'E10', 'E9', 'E8', 'E7', 'E6', 'E5', 'E4', 'E3', 'E2', 'E1',]
</script>

<div class="competitions-grid">
  {#each competitions as competition, i}
  <a class="competition no-hover" href="/">
    <h2 class="text-xl">{competition}</h2>
    <div class="info text-xs">
      <p>La ville adaptable I:</p>
      <p class="mt-0">Insérer les rythmes urbains</p>
      <p class="mt-0">Couvet, Kreuzlingen-Konstanz, Marly</p>
    </div>
  </a>
  {/each}
</div>

<style>
.competitions-grid {
  grid-column: 3 / span 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gutter);
}
.competition {
  position: relative;
}
h2 {
  height: .8em;
  width: fit-content;
  margin-left: -0.08em;
}
.competition h2::before {
  content: '';
  display: block;
  width: 0;
  height: inherit;
  background-color: var(--blackOpacity);
  position: absolute;
  z-index: -1;
  transition: var(--transition);
  margin-left: 0.08em;
}
.competition:hover h2::before {
  width: 100%;
}
.competition .info {
  color: var(--white);
  padding: 1em;
  display: block;
  position: absolute;
  top: 0;
  transition: var(--transition);
  overflow: hidden;
  width: 100%;
}
.competition .info p {
  transition: var(--transition);
  transform: translateX(-101%);
}
.competition:hover .info p {
  transform: translateX(0);
}
</style>