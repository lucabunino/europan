<script>
import { register } from 'swiper/element/bundle';register();

$effect(() => {
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
})
</script>

<article>
  <h2 class="text-l page-title">Re-sourcing 2025</h2>
  <swiper-container
  init={false}
  slides-per-view={1}
  navigation={true}
  loop={true}
  speed={400}
  >
    <swiper-slide style="background-color: red;">Slide 1</swiper-slide>
    <swiper-slide style="background-color: blue;">Slide 2</swiper-slide>
    <swiper-slide style="background-color: green;">Slide 3</swiper-slide>
  </swiper-container>
  <p>The Europan 18 competition, themed "Re:sourcing - A new perspective on the existing", explores ways in which we can conserve natural resources by applying the 3 Rs (Re:duce, Re:use, Re:cycle) while tackling climate change and social inequalities in urban areas through innovative projects and planning processes. The aim is to transform neglected buildings and areas into vibrant and inclusive spaces that protect the environment and promote a balance between nature and society. Regeneration, integration of nature and culture, and the application of environmentally friendly strategies play a crucial role in shaping a more sustainable future and rethinking the use of our planet's resources. The Europan 18 competition, themed "Re:sourcing - A new perspective on the existing", explores ways in which we can conserve natural resources by applying the 3 Rs (Re:duce, Re:use, Re:cycle) while tackling climate change and social inequalities in urban areas through innovative projects and planning processes. The aim is to transform neglected buildings and areas into vibrant and inclusive spaces that protect the environment and promote a balance between nature and society. Regeneration, integration of nature and culture, and the application of environmentally friendly strategies play a crucial role in shaping a more sustainable future and rethinking the use of our planet's resources. 
  <p><a href="">Télécharger le concours ↧</a></p>
  <p class="mt-0"><a href="">Télécharger le photo ↧</a></p>
  <p><a href="">See more news →</a></p>
</article>

<style>
article {
  grid-column: 3 / span 4;
}
swiper-container {
  margin-bottom: var(--gutter);
}
swiper-slide {
  width: 100%;
  aspect-ratio: var(--aspectRatio);
}
</style>