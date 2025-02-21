<script>
const { data } = $props()
import News from '$lib/components/News.svelte';
import * as m from "$lib/paraglide/messages"
import { onMount } from 'svelte';

// Stores
import { getTranslations } from "$lib/stores/translations.svelte.js";
let translations = getTranslations()

if (data.news[0]?._translations) {
  translations.setTranslations(data.news[0]?._translations)
} else {
  translations.setTranslations(null)
}
$effect(() => {
  return () => {
    translations.setTranslations(null)
  };
})
</script>

{#if data.news[0]}
  <News news={data.news[0]}/>
{/if}
{#if !data.news[0]?._translations}
  <h1 class="text-m content">{m.noTranslations()}</h1>
{/if}