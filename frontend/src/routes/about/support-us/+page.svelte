<script>
const { data } = $props()
import { enhance, applyAction } from '$app/forms';
import { PortableText } from '@portabletext/svelte'
import PortableTextStyle from '$lib/components/PortableTextStyle.svelte';

// Multilanguage
import * as m from "$lib/paraglide/messages"

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
    <h2 class="text-l">{data.supportUs.title}</h2>
  </section>
  <section class="supportUs-grid text-xs">
    <div>
      {#if data.supportUs.body}
        <PortableText
        value={data.supportUs.body}
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
      {/if}
    </div>
    <div>
      <form
      id="form"
      action="?/create"
      method="POST"
      use:enhance={handleEnhance}
      >
        <input type="text" id="name" name="name" placeholder={m.nameAndSurname()} class:empty={isEmptyName} onclick={() => isEmptyName = false}>
        <input type="text" id="company" name="company" placeholder={m.company()} class:empty={isEmptyCompany} onclick={() => isEmptyCompany = false}>
        <input type="text" id="adress" name="adress" placeholder={m.adress()} class:empty={isEmptyAdress} onclick={() => isEmptyAdress = false}>
        <input type="email" id="email" name="email" placeholder={m.email()} class:empty={isEmptyEmail} onclick={() => isEmptyEmail = false}>
        <input type="tel" id="phone" name="phone" placeholder={m.phone()} class:empty={isEmptyPhone} onclick={() => isEmptyPhone = false}>
        <select id="membership" name="membership" class:empty={isEmptyMembership} onclick={() => isEmptyMembership = false}>
          <option value="" disabled selected>{m.memberKind()}</option>
          <option value="partner_or_sponsor">{m.memberPartner()}</option>
          <option value="collective_member">{m.memberCollective()}</option>
          <option value="individual_member">{m.memberIndividual()}</option>
          <option value="student_member">{m.memberStudent()}</option>
        </select>
        <textarea id="message" name="message" rows="5" placeholder={m.message()} class:empty={isEmptyMessage} onclick={() => isEmptyMessage = false}></textarea>
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
    </div>
  </section>
</article>