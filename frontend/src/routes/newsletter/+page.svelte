<script>
const { data } = $props()
$inspect(data)
</script>

<section class="page-title">
  <h2 class="text-l">Newsletter</h2>
</section>
<section class="content newsletter-grid text-xs">
  <div>
    <p class="newsletter-newsletter-info">{data.contact[0].newsletterMessage}</p>
    <form action="">
      <input type="email" id="email" name="email" placeholder="E-mail">
      <div class="button-container">
        <button type="submit">
          Inscription
        </button>
      </div>
    </form>
  </div>
</section>

<style>
h3,
form:last-of-type {
  margin-top: 1em;
}
.newsletter-newsletter-info {
  width: calc(50% - var(--gutter)/2);
}
.newsletter-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--gutter);
  row-gap: calc(var(--gutter)*2);
}
.newsletter-grid > *:nth-child(1) {
  grid-column: 1 / span 2;
}
@media screen and (max-width: 600px) {
  .newsletter-grid > *:nth-child(1) {
    grid-column: 1 / span 4;
  }
}
@media screen and (max-width: 380px) {
  .newsletter-newsletter-info {
    width: auto;
  }
}
</style>