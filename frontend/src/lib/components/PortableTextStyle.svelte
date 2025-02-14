<!-- PortableTextStyle -->
<script lang="ts">
  import type {BlockComponentProps} from '@portabletext/svelte'

  export let portableText: BlockComponentProps

  $: ({global, value} = portableText)
  $: ({style, listItem} = value);  
</script>

{#if style === 'normal' && !listItem}
  <p class="portableText"><slot /></p>
{:else if style=== 'h3'}
  <h3 class="text-m"><slot /></h3>
{:else if style=== 'h4'}
  <h4><slot /></h4>
{:else if value.href}
  <a class="link" href={value.href} target={value.blank ? '_blank' : undefined}>
    <slot />
  </a>
{:else if listItem == 'bullet'}
  <li><slot /></li>
{:else if listItem == 'bumber'}
  <li><slot /></li>
{/if}

<style>
.link {
  color: var(--blue);
  text-decoration: underline;
}
a:hover {
  text-decoration: none;
}
p {
  margin: 0;
}
:global(ul) {
  list-style-type: none;
  padding-left: 2em;
}
li::before {
  display: inline-block;
  content: "— ";
  width: 2em;
  margin-left: -2em;
}
h3 {
  margin-top: .7em;
  margin-bottom: .3em;
}
h4 {
  margin-top: 1.5em;
  margin-bottom: .3em;
}
</style>