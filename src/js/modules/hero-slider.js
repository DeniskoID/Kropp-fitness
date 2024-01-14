import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';

const slider = new Splide('.splide', {
  arrows: false,
  pagination: true,
  drag: true,
  type: 'loop',
  width: '100%',
  gap: 20,
  classes: {
    pagination: 'splide__pagination hero-slider__pagination',
    page: 'splide__pagination__page hero-slider__pagination-button',
  },
});

export default slider;
