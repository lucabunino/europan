<script>
const { 
  page = [],
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
  if (page.images) {
    const swiperEl = document.querySelector('swiper-container');
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
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
    swiperLoaded = true
  }
})
</script>

<svelte:window bind:innerWidth></svelte:window>

<article class="content">
  <section class="page-title">
    <h2 class="text-l">{page.title}</h2>
    {#if page.subtitle}<h3 class="text-s page-subtitle">{page.subtitle}</h3>{/if}
  </section>
  {#if page.images}
  <div class="swiper-container-container">
    <swiper-container
    class:loaded={swiperLoaded}
    init={false}
    slides-per-view={1}
    navigation={true}
    loop={true}
    speed={400}
    >
    {#each page.images as image}
    	<swiper-slide>
    		<img class="page-img {image.objectFit} {image.overlay ? 'overlay' : ''}" src={urlFor(image.image).width(1920)} alt="Image for {page.title}">
    	</swiper-slide>
    {/each}
    </swiper-container>
  </div>
  {/if}

  <section class="body">
    {#if page.from}<h3 class="text-s">{formatDate(page.from, page.to)}</h3>{/if}
	{#if page.body}
		<PortableText
		value={page.body}
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
  </section>
  <section>
    {#if page.attachments}
      {#each page.attachments as attachment, i}
        <p class={i > 0 ? 'mt-0' : ''}><a href={attachment.url} target="_blank" rel="noopener noreferrer">{attachment.title} ↧</a></p>
      {/each}
    {/if}
  </section>
</article>