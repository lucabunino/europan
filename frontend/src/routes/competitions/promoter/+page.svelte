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

// Form
import { enhance, applyAction } from '$app/forms';

let isSubmitted = $state(false);
let isSubmitting = $state(false);
let isErrorous = $state(false);
let isEmpty = $state(false);
let isEmptyName = $state(false);
let isEmptyEmail = $state(false);
let isEmptyMessage = $state(false);

const handleEnhance = ({ formElement, formData, action, cancel }) => {
  return async ({ result }) => {
    if (result.data.success) {
      isSubmitted = true;
      formElement.reset()
    } else if (!result.data.success) {
      if (result.data.empty) {
        isEmpty = true
        if (result.data.emptyFields.includes('name')) {
          isEmptyName = true
        }
        if (result.data.emptyFields.includes('email')) {
          isEmptyEmail = true
        }
        if (result.data.emptyFields.includes('message')) {
          isEmptyMessage = true
        }
      } else {
        isErrorous = true;
      }
    }
    isSubmitting = false
    await applyAction(result);
  };
};

const resetFormStates = () => {
  setTimeout(() => {
    isSubmitted = false;
    isSubmitting = false;
    isErrorous = false;
    isEmpty = false
  }, 5000);
};

$effect(() => {
  if (isSubmitted || isErrorous || isEmpty) resetFormStates();
});
</script>

{#if data.page}
  <Page page={data.page}/>
{/if}
{#if !data.page?._translations}
  <h1 class="text-m content">{m.noTranslations()}</h1>
{/if}

<form
id="form"
action="?/create"
method="POST"
use:enhance={handleEnhance}
>
	<textarea id="message" name="message" rows="5" placeholder={m.message()} class:empty={isEmptyMessage} onclick={() => isEmptyMessage = false}></textarea>
	<input type="text" id="name" name="name" placeholder={m.nameAndSurname()} class:empty={isEmptyName} onclick={() => isEmptyName = false}>
	<input type="email" id="email" name="email" placeholder={m.email()} class:empty={isEmptyEmail} onclick={() => isEmptyEmail = false}>
	<div class="button-container">
	<button type="submit" onclick={() => isSubmitting = true} style="{isErrorous ? 'widht:100%' : 'width:9rem'}{isEmpty ? 'widht:100%' : ''}">
		{#if isSubmitted}
			{m.sent()}
		{:else if isSubmitting}
			{m.sending()}
		{:else if isErrorous}
			{m.sendError()}
		{:else if isEmpty}
			{m.emptyFields()}
		{:else}
			{m.send()}
		{/if}
	</button>
	</div>
</form>

<style>
	form {
		margin-top: 5rem;
		grid-column: 3 / span 2;
	}

	@media screen and (max-width: 1200px) {
		form {
			grid-column: 1 / span 3;
		}
	}

	@media screen and (max-width: 600px) {
		form {
			grid-column: 1 / span 6;
		}
	}

</style>