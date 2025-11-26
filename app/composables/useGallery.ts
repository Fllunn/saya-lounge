import { ref } from 'vue';

export function useGallery() {
  const images = ref([
    '/images/carousel/carousel-white-cocktail.jpg',
    '/images/carousel/test2.png',
    '/images/carousel/test3.png',
    '/images/carousel/test4.png',
    '/images/carousel/test5.png',
    '/images/carousel/test6.png',
    '/images/carousel/test7.png',
    '/images/carousel/test8.png',
    '/images/carousel/test9.png',
    '/images/carousel/test10.png',
    '/images/carousel/test11.png',
    '/images/carousel/test12.png',
  ]);

  return { images };
}