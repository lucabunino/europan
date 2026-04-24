<script>
const { data } = $props()
$inspect(data)
import * as m from "$lib/paraglide/messages"
</script>

<div class="content pages-grid">
  <a class="page no-hover" href="/about/europan-switzerland">
    <h2 class="text-m">{m.europanSwitzerland()}</h2>
  </a>
  <a class="page no-hover" href="/about/team">
    <h2 class="text-m">{m.team()}</h2>
  </a>
  <a class="page no-hover" href="/about/partners">
    <h2 class="text-m">{m.partners()}</h2>
  </a>
  <a class="page no-hover" href="/about/support-us">
    <h2 class="text-m">{m.supportUs()}</h2>
  </a>
</div>