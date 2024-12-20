<script>
let dates = ['16.07.25',  '23.04.25',  '07.12.24',  '12.12.24',  '19.11.24',  '08.01.24',  '24.08.23',]
</script>

{#each dates as news, i}
<a class="news no-hover" href="/">
  <h2 class="text-xl">{news}</h2>
  <div class="info text-xs">
    <p>La ville adaptable I:</p>
    <p class="mt-0">Insérer les rythmes urbains</p>
    <p class="mt-0">Couvet, Kreuzlingen-Konstanz, Marly</p>
  </div>
</a>
{/each}


<style>
.news {
  grid-column: 3 / span 4;
  position: relative;
}
.news + .news {
  margin-top: 3rem;
}
h2 {
  height: .8em;
  width: fit-content;
}
.news h2::before {
  content: '';
  display: block;
  width: 0;
  height: inherit;
  background-color: var(--blackOpacity);
  position: absolute;
  z-index: -1;
  transition: var(--transition);
}
.news:hover h2::before {
  width: 100%;
}
.news .info {
  color: var(--white);
  padding: 1em;
  display: block;
  position: absolute;
  top: 0;
  transition: var(--transition);
  overflow: hidden;
  width: 100%;
}
.news .info p {
  transition: var(--transition);
  transform: translateX(-101%);
}
.news:hover .info p {
  transform: translateX(0);
}
</style>