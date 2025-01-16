<script>
import { enhance, applyAction } from '$app/forms';
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
    console.log(result);
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

<article>
  <h2 class="text-l page-title">Contact</h2>
  <div class="contact-grid text-xs">
    <p>{data.contact[0].description}</p>
    <div>
      {#each data.contact[0].adresses as adress}
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
        <textarea id="message" name="message" rows="5" placeholder="Message" class:empty={isEmptyMessage} onclick={() => isEmptyMessage = false}></textarea>
        <input type="text" id="name" name="name" placeholder="Nom et prénom" class:empty={isEmptyName} onclick={() => isEmptyName = false}>
        <input type="email" id="email" name="email" placeholder="E-mail" class:empty={isEmptyEmail} onclick={() => isEmptyEmail = false}>
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

      <h3>Newsletter</h3>
      <p>{data.contact[0].newsletterMessage}</p>
      <form action="">
        <input type="email" id="email" name="email" placeholder="E-mail">
        <div class="button-container">
          <button type="submit" onclick={() => isSubmitting = true} style="{isErrorous ? 'widht:100%' : 'width:9rem'}{isEmpty ? 'widht:100%' : ''}">
            Inscription
          </button>
        </div>
      </form>
    </div>
  </div>
</article>

<style>
article {
  grid-column: 3 / span 4;
}
h3,
form:last-of-type {
  margin-top: 1em;
}
h3 + p {
  width: calc(50% - var(--gutter)/2);
}
.contact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--gutter);
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
form {
  display: flex;
  flex-direction: column;
  row-gap: 1em;
}
input, textarea {
  display: block;
  width: 100%;
  padding: .7rem 1rem;
  background-color: var(--gray);
  border: none;
  resize: vertical;
}
textarea {
  resize: vertical;
  height: 10rem;
}
input:focus-visible,
textarea:focus-visible {
  outline: solid 1px #000;
}
input.empty,
textarea.empty {
  outline: solid 1px #ff0000;
}
button {
  color: #fff;
  background-color: transparent;
  border: none;
  padding: .7rem 3rem .7rem 1rem;
  text-align: left;
  cursor: pointer;
  transition: var(--transition);
}
.button-container {
  display: inline-block;
  width: fit-content;
  position: relative;
  vertical-align: middle;
}
.button-container::before {
  content: '';
  display: block;
  height: 100%;
  width: 0;
  background-color: #E6E7E8;
  position: absolute;
  top: 0;
  z-index: -1;
  transition: var(--transition);
}
.button-container::after {
  content: '';
  display: block;
  height: 100%;
  width: 100%;
  background-color: #000;
  position: absolute;
  top: 0;
  z-index: -2;
  transition: var(--transition);
}
.button-container:hover button {
  color: #000;
}
.button-container:hover::before {
  width: 100%;
}
</style>