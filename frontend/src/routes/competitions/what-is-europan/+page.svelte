<script>
const { data } = $props()
import Page from '$lib/components/Page.svelte';
import * as m from "$lib/paraglide/messages"

// Stores
import { getTranslations } from "$lib/stores/translations.svelte.js";
let translations = getTranslations()

if (data.page[0]?._translations) {
  translations.setTranslations(data.page[0]?._translations)
} else {
  translations.setTranslations(null)
}
</script>

{#if data.page}
  <Page page={data.page}/>
{/if}
{#if !data.page?._translations}
  <h1 class="text-m content">{m.noTranslations()}</h1>
{/if}