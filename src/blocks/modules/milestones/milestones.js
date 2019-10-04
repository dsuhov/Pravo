import $ from "jquery";
import slick from "slick-carousel";

if (window.matchMedia('(max-width: 480px)').matches) {
  const sliderContainer = $('.milestones__row');

  sliderContainer.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.milestones__arrow--left',
    nextArrow: '.milestones__arrow--right',
    responsive: [
      {
        breakpoint: 485,
        settings: {
          // infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '.milestones__arrow--left',
          nextArrow: '.milestones__arrow--right'
        }
      }
    ]
    
  });
}