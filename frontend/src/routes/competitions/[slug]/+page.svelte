<script>
const { data } = $props()

import * as m from "$lib/paraglide/messages"
import { localizeHref } from "$lib/paraglide/runtime.js"
</script>

<section class="content pages-grid">
	{#if data.competition.topicBody}
		<a class="page no-hover" href={localizeHref(`/competitions/${data.competition.slug.current}/topic`)}>
			<h2 class="text-m">E{data.competition.edition}: {m.topic()} E{data.competition.edition}</h2>
		</a>
	{/if}
	{#if data.competition.processBody}
		<a class="page no-hover" href={localizeHref(`/competitions/${data.competition.slug.current}/process`)}>
			<h2 class="text-m">E{data.competition.edition}: {m.process()}</h2>
		</a>
	{/if}
	{#if data.competition.featuredSites?.length > 0}
		<a class="page no-hover" href={localizeHref(`/competitions/${data.competition.slug.current}/sites`)}>
			<h2 class="text-m">E{data.competition.edition}: {m.sites()}</h2>
		</a>
	{/if}
	{#if data.competition.juryPresident || data.competition.jury?.length > 0}
		<a class="page no-hover" href={localizeHref(`/competitions/${data.competition.slug.current}/jury`)}>
			<h2 class="text-m">E{data.competition.edition}: {m.jury()}</h2>
		</a>
	{/if}
	{#if data.competition.showResults}
		<a class="page no-hover" href={localizeHref(`/competitions/${data.competition.slug.current}/results`)}>
			<h2 class="text-m">E{data.competition.edition}: {m.results()}</h2>
		</a>
	{/if}
</section>
