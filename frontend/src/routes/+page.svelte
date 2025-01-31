<script>
const { data } = $props()
$inspect(data)

import { urlFor } from '$lib/utils/image';
import { PortableText } from '@portabletext/svelte'
import PortableTextStyle from '$lib/components/portableTextStyle.svelte';
import { formatDate } from "$lib/utils/date";
import { register } from 'swiper/element/bundle';register();

let swiperLoaded = $state(false)
$effect(() => {
  const swiperEls = document.querySelectorAll('swiper-container');
  const swiperParams = {
    slidesPerView: 1,
    injectStyles: [
      `
      .swiper-button-prev,
      .swiper-button-next {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none"><circle cx="18.803" cy="18.803" r="18.803" fill="%23fff"/><path d="m4.932 19.111 21.27-12.28v24.56l-21.27-12.28Z" fill="%23000"/></svg>');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        width: 38px; /* Match the SVG dimensions */
        height: 38px;
        border: none; /* Remove any default button styles */
        cursor: pointer;
      }
      .swiper-button-next {
        transform: rotate(180deg);
      }
      .swiper-button-next svg,
      .swiper-button-prev svg {
        display: none;
      }
      `,
    ],
  };
  swiperEls.forEach((swiperEl, index) => {
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  });
  swiperLoaded = true
})
</script>

{#each data.featuredNewses[0].featuredNews as news}
<article class="content">
  <div class="page-title">
    <h2 class="text-l">{news.title}</h2>
  </div>
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
        <img class="news-img" src={urlFor(image).width(1080)} alt="Image for {news.title}">
      </swiper-slide>
    {/each}
    </swiper-container>
  </div>
  {/if}

  <div class="body">
    {#if news.from}<h3 class="text-s page-subtitle">{formatDate(news.from, news.to)}</h3>{/if}
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
  </div>
  
  {#if news.attachments}
    {#each news.attachments as attachment, i}
      <p class={i > 0 ? 'mt-0' : ''}><a href={attachment.url} target="_blank" rel="noopener noreferrer">{attachment.title} ↧</a></p>
    {/each}
  {/if}
  <p><a href=/news>See more news →</a></p>
</article>
{/each}

<style>
article + article {
  margin-top: 10rem;
}
</style>