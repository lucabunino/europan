<script>
import { enhance, applyAction } from '$app/forms';
import * as m from "$lib/paraglide/messages"

const { data } = $props()
$inspect(data)

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

<section class="page-title">
  <h2 class="text-l">Contact</h2>
</section>
<section class="content contact-grid text-xs">
  <p>{data.contact.description}</p>
  <div>
    {#each data.contact.adresses as adress}
      <p>{adress.adressName}</p>
      <p class="mt-0">{adress.adressLine1}</p>
      <p class="mt-0">{adress.adressLine2}</p>
      <p class="mt-0">{adress.adressCountry}</p>
      <p class="mt-0"><a href="tel:{adress.adressPhone}">{adress.adressPhone}</a></p>
      <p class="mt-0"><a href="mailto:{adress.adressEmail}">{adress.adressEmail}</a></p>
      <p class="mt-0"><a href="{adress.adressWebsiteUrl}" target="_blank" rel="noopener noreferrer">{adress.adressWebsite} ↗</a></p>
    {/each}
  </div>
  <div>
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
            Envoyé
          {:else if isSubmitting}
            En cours
          {:else if isErrorous}
            Erreur lors de l'envoi. Veuillez réessayer.
          {:else if isEmpty}
            Champs vides
          {:else}
            Envoyer
          {/if}
        </button>
      </div>
    </form>
    <!-- HERE
    <h3>Newsletter</h3>
    <p class="contact-newsletter-info">{data.contact[0].newsletterMessage}</p>
    <form action="">
      <input type="email" id="email" name="email" placeholder="E-mail">
      <div class="button-container">
        <button type="submit" onclick={() => isSubmitting = true} style="{isErrorous ? 'widht:100%' : 'width:9rem'}{isEmpty ? 'widht:100%' : ''}">
          Inscription
        </button>
      </div>
    </form> -->
  </div>
</section>

<style>
/* h3,
form:last-of-type {
  margin-top: 1em;
}
.contact-newsletter-info {
  width: calc(50% - var(--gutter)/2);
} */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--gutter);
  row-gap: calc(var(--gutter)*2);
}
.contact-grid > *:nth-child(1) {
  grid-column: 1 / span 1;
}
.contact-grid > *:nth-child(2) {
  grid-column: 2 / span 1;
}
.contact-grid > *:nth-child(3) {
  grid-column: 3 / span 2;
}
@media screen and (max-width: 600px) {
  .contact-grid > *:nth-child(1) {
    grid-column: 1 / span 2;
  }
  .contact-grid > *:nth-child(2) {
    grid-column: 3 / span 2;
  }
  .contact-grid > *:nth-child(3) {
    grid-column: 1 / span 4;
  }
}
@media screen and (max-width: 380px) {
  .contact-grid > *:nth-child(1) {
    grid-column: 1 / span 4;
  }
  .contact-grid > *:nth-child(2) {
    grid-column: 1 / span 4;
  }
}
</style>