<script>
const { data } = $props()

import * as m from "$lib/paraglide/messages"
import { localizeHref } from "$lib/paraglide/runtime.js"
import { getNestedCompetition } from "$lib/utils/competition.js"

let nestedCompetition = $derived(getNestedCompetition(data));
</script>

<section class="content pages-grid">
	<a class="page no-hover" href={localizeHref("/competitions/what-is-europan")}>
    	<h2 class="text-m">{m.whatIsEuropan()}</h2>
	</a>
	<a class="page no-hover" href={localizeHref("/competitions/promoter")}>
    	<h2 class="text-m">{m.promoter()}</h2>
	</a>
	{#if nestedCompetition?.hasTopic}
		<a class="page no-hover" href={localizeHref(`/competitions/${nestedCompetition.slug.current}/topic`)}>
			<h2 class="text-m">E{nestedCompetition.edition}: {m.topic()}</h2>
		</a>
	{/if}
	{#if nestedCompetition?.hasProcess}
		<a class="page no-hover" href={localizeHref(`/competitions/${nestedCompetition.slug.current}/process`)}>
			<h2 class="text-m">E{nestedCompetition.edition}: {m.process()}</h2>
		</a>
	{/if}
	{#if nestedCompetition?.hasSites}
		<a class="page no-hover" href={localizeHref(`/competitions/${nestedCompetition.slug.current}/sites`)}>
			<h2 class="text-m">E{nestedCompetition.edition}: {m.sites()}</h2>
		</a>
	{/if}
	{#if nestedCompetition?.hasJury}
		<a class="page no-hover" href={localizeHref(`/competitions/${nestedCompetition.slug.current}/jury`)}>
			<h2 class="text-m">E{nestedCompetition.edition}: {m.jury()}</h2>
		</a>
	{/if}
	{#if nestedCompetition?.showResults}
		<a class="page no-hover" href={localizeHref(`/competitions/${nestedCompetition.slug.current}/results`)}>
			<h2 class="text-m">E{nestedCompetition.edition}: {m.results()}</h2>
		</a>
	{/if}
</section>
