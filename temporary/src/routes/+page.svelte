<script>
import { register } from 'swiper/element/bundle';register();
import { enhance, applyAction } from '$app/forms';
let isSubmitted = $state(false);
let isSubmitting = $state(false);
let isErrorous = $state(false);
let innerWidth = $state()
let innerHeight = $state()

const handleEnhance = ({ formElement, formData, action, cancel }) => {
  isSubmitting = false
  return async ({ result }) => {    
    console.log(result);
    
    if (result.data.success) {
      isSubmitted = true;
    } else if (!result.data.success) {
      isErrorous = true;
    }
    await applyAction(result);
  };
};

const resetFormStates = () => {
  setTimeout(() => {
    isSubmitted = false;
    isSubmitting = false;
    isErrorous = false;
  }, 5000);
};

$effect(() => {
  if (isSubmitted || isErrorous) resetFormStates();
});
</script>

<svelte:window bind:innerWidth bind:innerHeight></svelte:window>

<section id="hero">
  <swiper-container
  autoplay-delay=5000
  speed="500"
  direction='horizontal'
  loop={true}
  grabCursor={true}
  pagination={true}
  pagination-clickable={true}
  >
    <swiper-slide>
      <div class="slide">
        <svg class="slide-type" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 777.4 524.48">
          <path class="cls-1" d="m84.88 106.6-4.51-24.73c-1.34-6.91-3.45-12.17-6.35-15.79-2.9-3.62-7.18-5.71-12.87-6.27 7.46-1.78 13.37-5.21 17.71-10.28 4.34-5.07 6.52-11.28 6.52-18.63 0-9.36-3.29-16.85-9.86-22.47C68.95 2.81 60.15 0 49.12 0H0v121.14h10.86V64h34.59c4.45 0 8.1.39 10.94 1.17 2.84.78 5.15 2.03 6.93 3.76 1.78 1.73 3.17 3.96 4.18 6.68 1 2.73 1.89 5.99 2.67 9.77l4.01 22.22c.33 2.12.75 4.34 1.25 6.68s.97 4.62 1.42 6.85h13.03c-1.34-1.78-2.34-3.79-3.01-6.02-.67-2.23-1.34-5.07-2-8.52ZM48.79 55.14H10.86V8.86h37.93c7.8 0 13.98 2.12 18.55 6.35 4.57 4.23 6.85 9.86 6.85 16.88s-2.31 12.48-6.93 16.71c-4.62 4.23-10.78 6.35-18.46 6.35ZM165.08 0h-10.69l-16.71 24.22h7.68L165.08 0zM177.78 61.73c-1.67-5.51-4.12-10.16-7.35-13.95-3.24-3.78-7.16-6.71-11.78-8.77-4.63-2.06-9.72-3.09-15.29-3.09s-10.5 1.06-15.12 3.17a32.855 32.855 0 0 0-11.78 9.03c-3.23 3.9-5.77 8.55-7.6 13.95-1.84 5.4-2.76 11.33-2.76 17.79v.17h73.68c.34-6.68-.33-12.78-2-18.3Zm-60.82 11.11c.89-9.02 3.68-16.15 8.35-21.38 4.68-5.24 10.7-7.86 18.05-7.86s13.09 2.54 17.88 7.61c4.79 5.07 7.4 12.28 7.85 21.63h-52.13ZM262.82 53.3c-3.12-5.46-7.24-9.72-12.36-12.78-5.12-3.06-10.81-4.6-17.04-4.6-5.12 0-9.89 1.06-14.29 3.17-4.4 2.12-8.22 5.1-11.45 8.94-3.23 3.84-5.76 8.47-7.6 13.87-1.84 5.4-2.76 11.39-2.76 17.96s.92 12.34 2.76 17.63c1.84 5.29 4.37 9.8 7.6 13.53 3.23 3.73 7.04 6.63 11.45 8.69 4.4 2.06 9.16 3.09 14.29 3.09 6.35 0 12.14-1.67 17.38-5.01 5.23-3.34 9.41-7.96 12.53-13.87v17.21h9.69V0h-10.19v53.3Zm-7.6 51.71c-5.07 6.41-11.67 9.61-19.8 9.61s-14.7-3.2-19.72-9.61c-5.01-6.4-7.52-14.95-7.52-25.65s2.51-19.24 7.52-25.65c5.01-6.4 11.58-9.61 19.72-9.61s14.73 3.2 19.8 9.61c5.07 6.41 7.6 14.95 7.6 25.65s-2.54 19.24-7.6 25.65ZM395.83 0h10.36v20.05h-10.36zM395.83 37.59h10.36v83.54h-10.36zM444.62 75.02c0-9.58 2.26-16.82 6.77-21.72 4.51-4.9 10.5-7.35 17.96-7.35 1.45 0 2.92.11 4.43.33 1.5.22 2.76.45 3.76.67v-9.36c-1-.22-2.15-.42-3.43-.58-1.28-.17-2.59-.25-3.93-.25-5.91 0-11.17 1.53-15.79 4.6-4.62 3.06-8.1 7.44-10.44 13.12V37.6h-9.69v83.54h10.36V75.02ZM523.48 122.81c8.69 0 16.15-2.45 22.39-7.35 6.24-4.9 10.36-11.64 12.36-20.22H547.7c-1.45 6.24-4.32 11.11-8.61 14.62-4.29 3.51-9.5 5.26-15.62 5.26-8.35 0-15.01-3.17-19.97-9.52-4.96-6.35-7.49-14.87-7.6-25.56h63.16c.33-6.68-.33-12.78-2.01-18.3-1.67-5.51-4.12-10.16-7.35-13.95-3.23-3.79-7.16-6.71-11.78-8.77-4.62-2.06-9.72-3.09-15.29-3.09s-10.5 1.06-15.12 3.17c-4.62 2.12-8.55 5.12-11.78 9.02-3.23 3.9-5.76 8.55-7.6 13.95-1.84 5.4-2.76 11.34-2.76 17.79 0 12.81 3.48 23.17 10.44 31.08 6.96 7.91 16.18 11.86 27.65 11.86ZM504.6 51.46c4.68-5.23 10.69-7.85 18.05-7.85s13.09 2.54 17.88 7.6c4.79 5.07 7.41 12.28 7.85 21.64h-52.13c.89-9.02 3.68-16.15 8.35-21.39ZM84.88 296.41l-4.51-24.73c-1.34-6.91-3.45-12.17-6.35-15.79-2.9-3.62-7.18-5.71-12.87-6.27 7.46-1.78 13.37-5.21 17.71-10.28 4.34-5.07 6.52-11.28 6.52-18.63 0-9.36-3.29-16.85-9.86-22.47-6.57-5.62-15.37-8.44-26.4-8.44H0v121.14h10.86V253.8h34.59c4.45 0 8.1.39 10.94 1.17 2.84.78 5.15 2.03 6.93 3.76 1.78 1.73 3.17 3.96 4.18 6.68 1 2.73 1.89 5.99 2.67 9.77l4.01 22.22c.33 2.12.75 4.34 1.25 6.68s.97 4.62 1.42 6.85h13.03c-1.34-1.78-2.34-3.79-3.01-6.02-.67-2.23-1.34-5.07-2-8.52Zm-36.09-51.46H10.86v-46.28h37.93c7.8 0 13.98 2.12 18.55 6.35 4.57 4.23 6.85 9.86 6.85 16.88s-2.31 12.48-6.93 16.71c-4.62 4.23-10.78 6.35-18.46 6.35ZM144.19 312.62c8.69 0 16.15-2.45 22.39-7.35 6.24-4.9 10.36-11.64 12.36-20.22h-10.53c-1.45 6.24-4.32 11.11-8.6 14.62-4.29 3.51-9.5 5.26-15.62 5.26-8.35 0-15.01-3.17-19.97-9.52-4.96-6.35-7.49-14.87-7.6-25.56h63.16c.33-6.68-.33-12.78-2-18.3-1.67-5.51-4.12-10.16-7.35-13.95-3.23-3.79-7.16-6.71-11.78-8.77-4.62-2.06-9.72-3.09-15.29-3.09s-10.5 1.06-15.12 3.17c-4.62 2.12-8.55 5.12-11.78 9.02-3.23 3.9-5.76 8.55-7.6 13.95-1.84 5.4-2.76 11.34-2.76 17.79 0 12.81 3.48 23.17 10.44 31.08 6.96 7.91 16.18 11.86 27.65 11.86Zm-18.88-71.35c4.68-5.23 10.69-7.85 18.05-7.85s13.09 2.54 17.88 7.6c4.79 5.07 7.41 12.28 7.85 21.64h-52.13c.89-9.02 3.68-16.15 8.35-21.39ZM145.36 214.04l19.72-24.23h-10.69l-16.71 24.23h7.68zM258.98 277.36c0 3.45-.58 6.8-1.75 10.03-1.17 3.23-2.84 6.1-5.01 8.6-2.17 2.51-4.76 4.48-7.77 5.93-3.01 1.45-6.35 2.17-10.03 2.17-7.02 0-12.48-2.2-16.37-6.6-3.9-4.4-5.85-10.66-5.85-18.8v-51.3h-10.19v54.97c0 9.36 2.62 16.74 7.85 22.14 5.23 5.4 12.53 8.1 21.89 8.1 6.35 0 11.95-1.56 16.79-4.68 4.85-3.12 8.49-7.07 10.94-11.86v14.87h9.86v-83.54h-10.36v49.96ZM305.6 287.56c0 8.35 2.09 14.51 6.27 18.46 4.18 3.96 9.94 5.93 17.29 5.93 1.56 0 3.26-.11 5.1-.33 1.84-.22 3.53-.45 5.1-.67v-8.19c-1.56.22-3.04.39-4.43.5-1.39.11-2.65.17-3.76.17-5.24 0-9.16-1.28-11.78-3.84-2.62-2.56-3.93-6.96-3.93-13.2V235.6h24.06v-8.19h-24.06v-22.56h-9.86v22.56h-18.71v8.19h18.71v51.96ZM363.74 204.84h9.86v11.42h-9.86zM387.3 311.95c1.56 0 3.26-.12 5.1-.34 1.83-.22 3.53-.44 5.09-.67v-8.18c-1.56.22-3.03.39-4.43.5-1.39.11-2.64.16-3.76.16-5.23 0-9.16-1.27-11.77-3.84-2.62-2.56-3.93-6.96-3.93-13.2v-56.63h-9.86v57.8c0 8.36 2.09 14.51 6.27 18.46 4.17 3.96 9.94 5.94 17.29 5.94ZM447.45 303.42c-5.24 0-9.17-1.27-11.78-3.84-2.62-2.56-3.93-6.96-3.93-13.2v-81.54h-9.86v82.71c0 8.36 2.09 14.51 6.27 18.46 4.18 3.96 9.94 5.94 17.29 5.94 1.56 0 3.26-.12 5.1-.34 1.84-.22 3.53-.44 5.1-.67v-8.18c-1.57.22-3.04.39-4.43.5-1.4.11-2.65.16-3.76.16ZM503.59 311.95c1.56 0 3.26-.12 5.09-.34 1.84-.22 3.54-.44 5.1-.67v-8.18c-1.56.22-3.04.39-4.43.5-1.39.11-2.64.16-3.76.16-5.23 0-9.16-1.27-11.78-3.84-2.61-2.56-3.92-6.96-3.92-13.2v-56.63h-9.86v57.8c0 8.36 2.09 14.51 6.26 18.46 4.18 3.96 9.95 5.94 17.3 5.94ZM480.03 204.84h9.86v11.42h-9.86zM582.87 271.35c-2.84-1.78-6.13-3.26-9.86-4.43-3.73-1.17-7.49-2.26-11.28-3.26-2.79-.67-5.51-1.39-8.19-2.17-2.67-.78-5.04-1.75-7.1-2.92-2.06-1.17-3.7-2.64-4.93-4.43-1.23-1.78-1.84-4.01-1.84-6.68 0-4.12 1.7-7.52 5.1-10.19 3.4-2.67 7.99-4.01 13.79-4.01s11.17 1.56 15.46 4.68c4.29 3.12 6.71 7.41 7.27 12.87h10.19c-.56-7.57-3.93-13.64-10.11-18.21s-13.68-6.85-22.47-6.85-15.54 2.09-20.89 6.27c-5.35 4.18-8.02 9.61-8.02 16.29 0 3.79.72 6.96 2.17 9.52 1.45 2.56 3.37 4.74 5.76 6.52 2.39 1.78 5.18 3.26 8.35 4.43s6.43 2.2 9.77 3.09c3.34.89 6.6 1.75 9.78 2.59 3.17.84 5.99 1.87 8.44 3.09 2.45 1.23 4.43 2.79 5.93 4.68 1.5 1.9 2.26 4.29 2.26 7.18 0 4.57-1.81 8.3-5.43 11.19-3.62 2.9-8.6 4.34-14.95 4.34-6.68 0-12.25-1.64-16.71-4.93-4.46-3.28-7.18-8.27-8.19-14.95h-10.19c.78 8.8 4.34 15.6 10.69 20.38 6.35 4.79 14.31 7.18 23.89 7.18s16.85-2.23 22.47-6.68c5.62-4.45 8.44-10.36 8.44-17.71 0-4.12-.89-7.52-2.67-10.19-1.78-2.67-4.09-4.9-6.93-6.68ZM673.34 237.6c-3.23-3.79-7.16-6.71-11.78-8.77-4.62-2.06-9.72-3.09-15.29-3.09s-10.5 1.06-15.12 3.17c-4.62 2.12-8.55 5.12-11.78 9.02-3.23 3.9-5.76 8.55-7.6 13.95-1.84 5.4-2.76 11.34-2.76 17.79 0 12.81 3.48 23.17 10.44 31.08 6.96 7.91 16.18 11.86 27.65 11.86 8.69 0 16.15-2.45 22.39-7.35 6.24-4.9 10.36-11.64 12.36-20.22h-10.53c-1.45 6.24-4.32 11.11-8.6 14.62-4.29 3.51-9.5 5.26-15.62 5.26-8.35 0-15.01-3.17-19.97-9.52-4.96-6.35-7.49-14.87-7.6-25.56h63.16c.33-6.68-.33-12.78-2.01-18.3-1.67-5.51-4.12-10.16-7.35-13.95Zm-53.46 25.06c.89-9.02 3.68-16.15 8.35-21.39 4.68-5.23 10.69-7.85 18.05-7.85s13.09 2.54 17.88 7.6c4.79 5.07 7.41 12.28 7.85 21.64h-52.13ZM745.44 226.82c-1.28-.17-2.59-.25-3.93-.25-5.91 0-11.17 1.53-15.79 4.6-4.62 3.06-8.1 7.44-10.44 13.12v-16.88h-9.69v83.54h10.36v-46.12c0-9.58 2.26-16.82 6.77-21.72 4.51-4.9 10.5-7.35 17.96-7.35 1.45 0 2.92.11 4.43.33 1.5.22 2.76.45 3.76.67v-9.36c-1-.22-2.15-.42-3.42-.58ZM170.43 416.88c-3.23-3.79-7.16-6.71-11.78-8.77-4.62-2.06-9.72-3.09-15.29-3.09s-10.5 1.06-15.12 3.17c-4.62 2.12-8.55 5.13-11.78 9.02-3.23 3.9-5.76 8.55-7.6 13.95-1.84 5.4-2.76 11.34-2.76 17.79 0 12.81 3.48 23.17 10.44 31.08 6.96 7.91 16.18 11.86 27.65 11.86 8.69 0 16.15-2.45 22.39-7.35 6.24-4.9 10.36-11.64 12.36-20.22h-10.53c-1.45 6.24-4.32 11.11-8.6 14.62-4.29 3.51-9.5 5.26-15.62 5.26-8.35 0-15.01-3.17-19.97-9.52-4.96-6.35-7.49-14.87-7.6-25.56h63.16c.33-6.68-.33-12.78-2-18.3-1.67-5.51-4.12-10.16-7.35-13.95Zm-53.47 25.06c.89-9.02 3.68-16.15 8.35-21.39 4.68-5.23 10.69-7.85 18.05-7.85s13.09 2.54 17.88 7.6c4.79 5.07 7.41 12.28 7.85 21.64h-52.13ZM84.88 475.7l-4.51-24.73c-1.34-6.91-3.45-12.17-6.35-15.79-2.9-3.62-7.18-5.71-12.87-6.27 7.46-1.78 13.37-5.21 17.71-10.28 4.34-5.07 6.52-11.28 6.52-18.63 0-9.36-3.29-16.85-9.86-22.47-6.57-5.62-15.37-8.44-26.4-8.44H0v121.14h10.86v-57.14h34.59c4.45 0 8.1.39 10.94 1.17 2.84.78 5.15 2.03 6.93 3.76 1.78 1.73 3.17 3.96 4.18 6.68 1 2.73 1.89 5.99 2.67 9.77l4.01 22.22c.33 2.12.75 4.34 1.25 6.68s.97 4.62 1.42 6.85h13.03c-1.34-1.78-2.34-3.79-3.01-6.02-.67-2.23-1.34-5.07-2-8.52Zm-36.09-51.47H10.86v-46.28h37.93c7.8 0 13.98 2.12 18.55 6.35 4.57 4.23 6.85 9.86 6.85 16.88s-2.31 12.48-6.93 16.71c-4.62 4.23-10.78 6.35-18.46 6.35ZM317.63 478.7l-29.91-72.01h-10.53l35.09 83.88-3.17 7.35c-3.01 7.24-5.82 12.08-8.44 14.54-2.62 2.45-6.49 3.68-11.61 3.68-1.23 0-2.54-.06-3.93-.17-1.39-.11-2.81-.28-4.26-.5v8.19c1.56.22 3.15.42 4.76.58 1.61.17 3.2.25 4.76.25 6.68 0 12.03-1.78 16.04-5.35 4.01-3.57 7.91-9.86 11.7-18.88l39.1-93.57h-10.19l-29.41 72.01ZM556.73 413.21c5.68 0 10.64 1.75 14.87 5.26 4.23 3.51 7.02 8.22 8.35 14.12h11.03c-1.56-8.35-5.49-15.04-11.78-20.05-6.29-5.01-13.78-7.52-22.47-7.52-5.46 0-10.5 1.09-15.12 3.26a35.38 35.38 0 0 0-11.95 9.11c-3.34 3.9-5.96 8.55-7.85 13.95-1.1 3.13-1.87 6.42-2.33 9.87h-52.06v10.36h51.6c.44 11.72 3.9 21.24 10.39 28.56 6.96 7.85 16.07 11.78 27.32 11.78 8.69 0 16.12-2.51 22.31-7.52 6.18-5.01 10.16-11.7 11.95-20.05h-10.53c-1.34 6.02-4.12 10.75-8.35 14.2-4.23 3.45-9.3 5.18-15.21 5.18-8.02 0-14.54-3.2-19.55-9.61-4.52-5.77-6.99-13.29-7.44-22.55h58.65V441.2h-58.3c.9-7.29 3.24-13.39 7-18.3 4.96-6.46 11.45-9.69 19.47-9.69ZM648.8 405.85c-5.91 0-11.17 1.53-15.79 4.6-4.62 3.07-8.1 7.44-10.44 13.12v-16.88h-9.69v83.54h10.36v-46.12c0-9.58 2.26-16.82 6.77-21.72 4.51-4.9 10.5-7.35 17.96-7.35 1.45 0 2.92.11 4.43.33 1.5.22 2.76.45 3.76.67v-9.36c-1-.22-2.15-.42-3.42-.58-1.28-.17-2.59-.25-3.93-.25ZM404.68 413.21c5.68 0 10.64 1.75 14.87 5.26 4.23 3.51 7.02 8.22 8.35 14.12h11.03c-1.56-8.35-5.49-15.04-11.78-20.05-6.29-5.01-13.78-7.52-22.47-7.52-5.46 0-10.5 1.09-15.12 3.26-4.62 2.17-8.6 5.21-11.95 9.11-3.34 3.9-5.96 8.55-7.85 13.95-1.9 5.4-2.84 11.28-2.84 17.63 0 12.92 3.48 23.31 10.44 31.16 6.96 7.85 16.07 11.78 27.32 11.78 8.69 0 16.12-2.51 22.31-7.52 6.18-5.01 10.16-11.7 11.95-20.05h-10.53c-1.34 6.02-4.12 10.75-8.35 14.2-4.23 3.45-9.3 5.18-15.21 5.18-8.02 0-14.54-3.2-19.55-9.61-5.01-6.4-7.52-14.95-7.52-25.65s2.48-19.1 7.44-25.56c4.96-6.46 11.45-9.69 19.47-9.69ZM231.75 413.21c5.68 0 10.64 1.75 14.87 5.26 4.23 3.51 7.02 8.22 8.35 14.12H266c-1.56-8.35-5.49-15.04-11.78-20.05-6.29-5.01-13.78-7.52-22.47-7.52-5.46 0-10.5 1.09-15.12 3.26-4.62 2.17-8.6 5.21-11.95 9.11-3.34 3.9-5.96 8.55-7.85 13.95-1.9 5.4-2.84 11.28-2.84 17.63 0 12.92 3.48 23.31 10.44 31.16 6.96 7.85 16.07 11.78 27.32 11.78 8.69 0 16.12-2.51 22.31-7.52 6.18-5.01 10.16-11.7 11.95-20.05h-10.53c-1.34 6.02-4.12 10.75-8.35 14.2-4.23 3.45-9.3 5.18-15.21 5.18-8.02 0-14.54-3.2-19.55-9.61-5.01-6.4-7.52-14.95-7.52-25.65s2.48-19.1 7.44-25.56c4.96-6.46 11.45-9.69 19.47-9.69Z"/>
        </svg>
        <p class="caption">E18 2025 portera sur le thème « Re-sourcing »</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide">
        <img class="img" src="slide2.webp" alt="">
        <p class="caption">OH 634 Biel/Bienne La ville comme un organisme vivant</p>
      </div>
    </swiper-slide>
  </swiper-container>
</section>
<section id="intro">
  <h1 class="title">Concours Europan Suisse</h1>
  <div>
    <p>Qu’est-ce qu’Europan ?</p>
    <p>Europan est le plus grand concours d’idées urbaines au monde. Il s’adresse à des équipes interdisciplinaires de tous les domaines qui travaillent sur des concepts de planification urbaine. Le concours est organisé tous les deux ans à l’échelle européenne autour d’un thème actuel, essentiel pour le développement de la ville européenne. Plus de 50 villes européennes et plus de 2000 équipes participent à chaque édition. La limite d’âge de 40 ans rend le concours attrayant pour des approches innovantes.</p>
    <p>Le concours est accompagné de formats internationaux qui favorisent les échanges et le réseautage à l’échelle européenne, et il répond à un double objectif : il offre aux villes et aux communes de nouvelles approches pour le développement urbain local et permet aux jeunes planificateurs de se connecter au niveau national et international. Grâce à cet échange continu, une plateforme dynamique est créée pour l’élaboration de processus de planification innovants et de projets pilotes.</p>
    <p>Pour chaque édition du concours, un thème général est défini, pertinent pour les sites participants et en lien avec les discours scientifiques actuels ainsi que les développements sociaux, économiques et politiques. Chaque ville ou commune participante adapte le thème en fonction des besoins spécifiques de son territoire.</p>
    <p>Le prochain concours, E18, se tiendra en 2025 et portera sur le thème « Re-sourcing ».</p>
  </div>
  <div>
    <p>Europan Suisse est une association à but non lucratif qui organise le concours Europan en Suisse. L’association a été fondée en 1990 dans le but de promouvoir des modèles de logements exemplaires. Aujourd’hui, le champ d’action s’est élargi : Europan Suisse organise des échanges scientifiques et culturels dans le domaine de l’architecture et de l’urbanisme, et met en œuvre au niveau national le programme européen élaboré en commun par l’organisation faîtière Europan Europe.</p>
    <p>« Europan est un format de concours unique en Suisse. Situé à mi-chemin entre concours d’idées et concours de projets, Europan offre aux jeunes architectes la possibilité de se pencher de manière approfondie sur un thème actuel de notre époque et de notre environnement bâti. Pour la BSA, entretenir et développer un paysage compétitif vivant est un enjeu central. C’est pourquoi elle soutient volontiers Europan. » </p>
    <p>— Association suisse des architectes (BSA).</p>
  </div>
</section>
<section id="comittee">
  <h2 class="title">Comité Experts</h2>
  <div>
    <div class="person">
      <p>Président</p>
      <p><a target="_blank" href="https://www.google.com/">Jürg Capol ↗</a></p>
      <p>Architecte EPFL, Urbaniste UNIGE</p>
      <p>CEO Utilita Management</p>
      <p>Rolle</p>
    </div>
    <div class="person">
      <p>Vice-Président</p>
      <p><a target="_blank" href="https://www.google.com/">Barbara Stettler ↗</a></p>
      <p><a href="mailto:barbara.stettler@europan.swiss">barbara.stettler@europan.swiss</a></p>
      <p>Architecte EPF SIA</p>
      <p>Biel/Bienne</p>
    </div>
    <div class="person">
      <p>Secrétaire général</p>
      <p><a target="_blank" href="https://www.google.com/">Konrad Scheffer ↗</a></p>
      <p><a href="mailto:konrad.scheffer@europan.swiss">konrad.scheffer@europan.swiss</a></p>
      <p>Architekt Dipl.-Ing, M.Arch.</p>
      <p>Lauréat Europan 14</p>
      <p>Office Oblique</p>
      <p>Zürich</p>
    </div>
    <div class="person">
      <p>Trésorier</p>
      <p><a target="_blank" href="https://www.google.com/">André Escobar ↗</a></p>
      <p><a href="mailto:andre.escobar@europan.swiss">andre.escobar@europan.swiss</a></p>
      <p>Architecte HES FAS SIA</p>
      <p>Aviolat Chaperon Escobar</p>
      <p>Neuchâtel</p>
    </div>
  </div>
  <div>
    <div class="person">
      <p><a target="_blank" href="https://www.google.com/">Jürg Bart ↗</a></p>
      <p>Architekt EPFZ BSA SIA</p>
      <p>Bart Buchhofer Architekten</p>
      <p>Biel/Bienne</p>
    </div>
    <div class="person">
      <p><a target="_blank" href="https://www.google.com/">Alberto Figuccio ↗</a></p>
      <p>Architecte AAM SIA</p>
      <p>Lauréat Europan 10 et 11</p>
      <p>Studio Alberto Figuccio</p>
      <p>Genève</p>
    </div>
    <div class="person">
      <p><a target="_blank" href="https://www.google.com/">Isabel Girault ↗</a></p>
      <p>Architecte EPFL SIA, Urbaniste IFU FSU</p>
      <p>Urbanité(s)</p>
      <p>Genève</p>
    </div>
    <div class="person">
      <p><a target="_blank" href="https://www.google.com/">Marine Girault ↗</a></p>
      <p>Architecte HMNOP SIA, Paysagiste CESP</p>
      <p>Urbanité(s)</p>
      <p>Genève</p>
    </div>
    <div class="person">
      <p><a target="_blank" href="https://www.google.com/">Ariane Widmer ↗</a></p>
      <p>Urbaniste cantonale</p>
      <p>République et canton de Genève</p>
      <p>Département du territoire (DT) / Office de l'urbanisme / Direction générale (DG)</p>
      <p>Genève</p>
    </div>
    <div class="person">
      <p><a target="_blank" href="https://www.google.com/">Mathias Heinz ↗</a></p>
      <p><a href="mailto:m.heinz@poolarch.ch">m.heinz@poolarch.ch</a></p>
      <p>Architecte ETHZ</p>
      <p>pool Architekten</p>
      <p>Zürich</p>
    </div>
    <div class="person">
      <p><a target="_blank" href="https://www.google.com/">Glenn Fischer ↗</a></p>
      <p><a href="mailto:glenn.fischer@bern.ch">glenn.fischer@bern.ch</a></p>
      <p>Chef de projet développement et réalisation</p>
      <p>Direction du génie civil, des transports et des espaces verts de la ville</p>
      <p>Ville de Berne</p>
  </div>
</section>
<section id="contact">
  <h1 class="title">Contact</h1>
  <div>
    <div class="contact">
      <p>Europan Suisse</p>
      <p>c/o Bart & Buchhofer Architekten AG</p>
    </div>
    <div class="contact">
      <p>Werkhofstrasse 11<br>2503 Bienne<br>Suisse</p>
    </div>
    <div class="contact">
      <p><a href="tel:+41 32 365 66 65">+41 32 365 66 65</a></p>
      <p><a href="mailto:bureau@europan.suisse">bureau@europan.suisse</a></p>
    </div>
    <div class="contact">
      <p><a target="_blank" href="https://www.europan.ch/">www.europan.ch</a></p>
      <p><a target="_blank" href="https://www.europan-europe.eu/">www.europan-europe.eu</a></p>
    </div>
  </div>
  <form
  id="form"
  action="?/create"
  method="POST"
  use:enhance={handleEnhance}
  >
    <textarea id="message" name="message" rows="5" placeholder="Message" required></textarea>
    <input type="text" id="name" name="name" placeholder="Nom" required>
    <input type="email" id="email" name="email" placeholder="E-mail" required>
    <div class="button-container">
      <button type="submit" onclick={() => isSubmitting = true} style="{isErrorous ? 'widht:100%' : 'width:9rem'}">
        {#if isSubmitted}
          Envoyé
        {:else if isSubmitting}
          En cours
        {:else if isErrorous}
          Erreur lors de l'envoi. Veuillez réessayer.
        {:else}
          Envoyer
        {/if}
      </button>
    </div>
  </form>
</section>

<style>
/* Common */
.title {
  font-weight: 300;
  font-size: 4.5rem;
  line-height: .944;
}
section:not(#hero) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: var(--gutter);
  padding: 5rem var(--gutter);
}
section:not(#hero)>div {
  margin-top: 1rem;
}

/* Hero */
#hero {
  width: 100%;
  height: 100vh;
  height: 100svh;
  background-color: #F1F1F2;
}
.slide {
  display: grid;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  column-gap: var(--gutter);
  padding: 0 var(--gutter);
  align-items: end;
}
.slide-type {
  grid-column: 2 / 4;
  max-height: 70vh;
  margin-top: 3rem;
}
.img {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #fff;
}
.caption {
  grid-column: 3 / 4;
  margin-bottom: var(--gutter);
  z-index: 1;
}
swiper-container {
  width: 100%;
  height: 100%;
}
swiper-container::part(pagination) {
  margin-left: calc(var(--gutter) - 4px);
  margin-bottom: 2.3rem;
  width: auto;
}
swiper-container::part(bullet-active) {
  background-color: #000;
}

/* Comittee */
.person {
  margin-bottom: 1em;
}

/* Contact */
.contact {
  margin-bottom: 1em;
}
input, textarea {
  display: block;
  width: 100%;
  padding: .7rem 1rem;
  background-color: #E6E7E8;
  border: none;
  margin-bottom: 1.3rem;
}
textarea {
  resize: vertical;
  height: 10rem;
}
input:focus-visible,
textarea:focus-visible {
  outline: solid 1px #000;
}
button {
  color: #fff;
  background-color: transparent;
  border: none;
  padding: .7rem 3rem .7rem 1rem;
  text-align: left;
  cursor: pointer;
  transition: var(--transition);
}
.button-container {
  display: inline-block;
  width: auto;
  position: relative;
}
.button-container::before {
  content: '';
  display: block;
  height: 2.6rem;
  width: 0;
  background-color: #E6E7E8;
  position: absolute;
  z-index: -1;
  transition: var(--transition);
}
.button-container::after {
  content: '';
  display: block;
  height: 2.6rem;
  width: 100%;
  background-color: #000;
  position: absolute;
  margin-top: -2.6rem;
  z-index: -2;
  transition: var(--transition);
}
.button-container:hover button {
  color: #000;
}
.button-container:hover::before {
  width: 100%;
}

@media screen and (max-width: 900px) {
  .title {
    font-size: 3.5rem;
  }
  section:not(#hero)>div,
  section:not(#hero)>form {
    grid-column: 2 / 4;
  }
  #hero {
    height: 80vh;
    height: 80svh;
  }
  .slide-type {
    grid-column: 1 / 4;
  }
  .caption {
    grid-column: 2 / 4;
  }
  #intro>div:not(:first-of-type),
  form {
    margin-top: var(--gutter);
  }
}

@media screen and (max-width: 600px) {
  .title {
    margin-left: -.1em;
    margin-bottom: 1rem;
  }
  section:not(#hero) {
    grid-template-columns: repeat(1, 1fr);
  }
  section:not(#hero)>div,
  section:not(#hero)>form {
    grid-column: unset;
  }
  #hero {
    height: 60vh;
    height: 60svh;
  }
  .caption {
    grid-column: 1 / 4;
    margin-bottom: 4rem;
  }
  swiper-container::part(pagination) {
    margin-bottom: .5rem;
  }
}
</style>