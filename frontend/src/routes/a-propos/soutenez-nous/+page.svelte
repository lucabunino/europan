<script>
const { data } = $props()
import { enhance, applyAction } from '$app/forms';
import { PortableText } from '@portabletext/svelte'
import PortableTextStyle from '$lib/components/portableTextStyle.svelte';

let isSubmitted = $state(false);
let isSubmitting = $state(false);
let isErrorous = $state(false);
let isEmpty = $state(false);
let isEmptyName = $state(false);
let isEmptyEmail = $state(false);
let isEmptyCompany = $state(false);
let isEmptyAdress = $state(false);
let isEmptyPhone = $state(false);
let isEmptyMembership = $state(false);
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
        if (result.data.emptyFields.includes('company')) {
          isEmptyCompany = true
        }
        if (result.data.emptyFields.includes('adress')) {
          isEmptyAdress = true
        }
        if (result.data.emptyFields.includes('email')) {
          isEmptyEmail = true
        }
        if (result.data.emptyFields.includes('phone')) {
          isEmptyPhone = true
        }
        if (result.data.emptyFields.includes('membership')) {
          isEmptyMembership = true
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
  
<article class="content">
  <section class="page-title">
    <h2 class="text-l">{data.supportUs[0].title}</h2>
  </section>
  <section class="supportUs-grid text-xs">
    <div>
      <PortableText
      value={data.supportUs[0].body}
      components={{
        block: {
          normal: PortableTextStyle,
          h3: PortableTextStyle,
          h4: PortableTextStyle,
        },
        listItem: PortableTextStyle,
        marks: {
          link: PortableTextStyle,
        },
      }}
      />
    </div>
    <div>
      <form
      id="form"
      action="?/create"
      method="POST"
      use:enhance={handleEnhance}
      >
        <input type="text" id="name" name="name" placeholder="Nom et prénom" class:empty={isEmptyName} onclick={() => isEmptyName = false}>
        <input type="text" id="company" name="company" placeholder="Société" class:empty={isEmptyCompany} onclick={() => isEmptyCompany = false}>
        <input type="text" id="adress" name="adress" placeholder="Adresse" class:empty={isEmptyAdress} onclick={() => isEmptyAdress = false}>
        <input type="email" id="email" name="email" placeholder="E-mail" class:empty={isEmptyEmail} onclick={() => isEmptyEmail = false}>
        <input type="tel" id="phone" name="phone" placeholder="Phone" class:empty={isEmptyPhone} onclick={() => isEmptyPhone = false}>
        <select id="membership" name="membership" class:empty={isEmptyMembership} onclick={() => isEmptyMembership = false}>
          <option value="" disabled selected>Type de membre</option>
          <option value="partner_or_sponsor">Membre partenaire ou sponsor : >CHF 500.-</option>
          <option value="collective_member">Membre collectif / personne morale-entreprise : CHF 500.-</option>
          <option value="individual_member">Membre individuel / personne physique : CHF 100.-</option>
          <option value="student_member">Membre étudiant (joindre une attestation) : CHF 50.-</option>
        </select>
        <textarea id="message" name="message" rows="5" placeholder="Message" class:empty={isEmptyMessage} onclick={() => isEmptyMessage = false}></textarea>
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
    </div>
  </section>
</article>