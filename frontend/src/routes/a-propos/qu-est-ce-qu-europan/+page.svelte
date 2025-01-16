<script>
const { data } = $props()
import { PortableText } from '@portabletext/svelte'
import PortableTextStyle from '$lib/components/portableTextStyle.svelte';
</script>

<article>
  <h2 class="text-l page-title">{data.whatIsEuropan[0].title}</h2>
  <div class="content cols-1 body">
    <PortableText
    value={data.whatIsEuropan[0].body}
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
</article>

<style>
article {
  grid-column: 3 / span 4;
}
</style>