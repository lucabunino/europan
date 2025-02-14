<!-- <script>
const { data } = $props()
import { PortableText } from '@portabletext/svelte'
import PortableTextStyle from '$lib/components/PortableTextStyle.svelte'
</script>

<article class="content">
  <section class="page-title">
    <h2 class="text-l page-title">{data.whatIsEuropan[0].title}</h2>
  </section>
  <div class="body">
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
</article> -->