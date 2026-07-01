<script>
const { data } = $props()
import { PortableText } from '@portabletext/svelte'
import PortableTextStyle from '$lib/components/PortableTextStyle.svelte';

// Multilanguage
import * as m from "$lib/paraglide/messages"
</script>

<article class="content">
  <section class="page-title">
    <h2 class="text-l">E{data.competition.edition}: {m.topic()}</h2>
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
	  types: {
        attachmentBlock: PortableTextStyle,
      }
    }}
    />
  </section>
</article>
