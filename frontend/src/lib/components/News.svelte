<script>
const { 
  news = [],
} = $props();

import { urlFor } from '$lib/utils/image';
import { PortableText } from '@portabletext/svelte'
import PortableTextStyle from '$lib/components/PortableTextStyle.svelte';
import { formatDate } from "$lib/utils/date";
import { register } from 'swiper/element/bundle';register();
import * as m from "$lib/paraglide/messages"

let innerWidth = $state()
let swiperLoaded = $state(false)

$effect(() => {
  if (news.images) {
    const swiperEl = document.querySelector('swiper-container');
    const swiperParams = {
      slidesPerView: 1,
    };
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
    swiperLoaded = true
  }
})
</script>

<svelte:window bind:innerWidth></svelte:window>

<article class="content news">
  <section class="page-title">
    <h2 class="text-l">{news.title}</h2>
    {#if news.subtitle}<h3 class="text-s page-subtitle">{news.subtitle}</h3>{/if}
  </section>
  {#if news.images}
  <div class="swiper-container-container">
    <swiper-container
    class:loaded={swiperLoaded}
    init={false}
    slides-per-view={1}
    navigation={true}
    loop={true}
    speed={400}
    >
    {#each news.images as image}
      <swiper-slide>
        <img class="news-img {image.objectFit} {image.overlay ? 'overlay' : ''}" src={urlFor(image.image).width(1920)} alt="Image for {news.title}">
      </swiper-slide>
    {/each}
    </swiper-container>
  </div>
  {/if}

  <section class="body">
    {#if news.from}<h3 class="text-s">{formatDate(news.from, news.to)}</h3>{/if}
    <PortableText
    value={news.body}
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
  <section>
    {#if news.attachments}
      {#each news.attachments as attachment, i}
        <p class={i > 0 ? 'mt-0' : ''}><a href={attachment.url} target="_blank" rel="noopener noreferrer">{attachment.title} ↧</a></p>
      {/each}
    {/if}
    <p><a href=/news>{m.seeMoreNews()} →</a></p>
  </section>
</article>