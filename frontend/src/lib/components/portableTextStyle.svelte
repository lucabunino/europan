<!-- PortableTextStyle -->
<script>
  let { portableText, children } = $props();
  let { value } = $derived(portableText);
  let { style, listItem } = $derived(value);
</script>

{#if style === 'normal' && !listItem}
  <p class="portableText">{@render children()}</p>
{:else if style=== 'h3'}
  <h3 class="text-m">{@render children()}</h3>
{:else if style=== 'h4'}
  <h4>{@render children()}</h4>
{:else if value.href}
  <a class="link" href={value.href} target={value.blank ? '_blank' : undefined}>
    {@render children()}
  </a>
{:else if listItem == 'bullet'}
  <li>{@render children()}</li>
{:else if listItem == 'bumber'}
  <li>{@render children()}</li>
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