<script>
const { data } = $props()
$inspect(data)
import { PortableText } from '@portabletext/svelte'
import PortableTextStyle from '$lib/components/portableTextStyle.svelte';
</script>

<article class="content">
  <section class="page-title">
    <h2 class="text-l">Sujet E{data.competition.edition}</h2>
  </section>
  <section class="body">
    <PortableText
    value={data.competition.topicBody}
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
  </section>
</article>