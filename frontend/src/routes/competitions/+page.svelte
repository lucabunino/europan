<script>
const { data } = $props()

import * as m from "$lib/paraglide/messages"
import { localizeHref } from "$lib/paraglide/runtime.js"
</script>

<section class="content pages-grid">
	<a class="page no-hover" href={localizeHref("/competitions/what-is-europan")}>
    	<h2 class="text-m">{m.whatIsEuropan()}</h2>
	</a>
	<a class="page no-hover" href={localizeHref("/competitions/promoter")}>
    	<h2 class="text-m">{m.promoter()}</h2>
	</a>
	{#each data.menuCompetitions || [] as comp}
		<a class="page no-hover" href={localizeHref(`/competitions/${comp.slug.current}`)}>
			<h2 class="text-m">E{comp.edition}</h2>
		</a>
	{/each}
</section>
