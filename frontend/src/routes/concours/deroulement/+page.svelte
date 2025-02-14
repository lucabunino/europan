<script>
const { data } = $props()
import { PortableText } from '@portabletext/svelte'
import PortableTextStyle from '$lib/components/portableTextStyle.svelte';
</script>

<article class="content">
  <section class="page-title">
    <h2 class="text-l page-title">Déroulement</h2>
  </section>
  <div class="body">
    <PortableText
    value={data.competition.processBody}
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