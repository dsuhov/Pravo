import $ from "jquery";
import slick from "slick-carousel";

if (window.matchMedia('(max-width: 480px)').matches) {
  const sliderContainer = $('.milestones__row');

  sliderContainer.slick({
    responsive: [
      {
        breakpoint: 481,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '.milestones__arrow--left',
          nextArrow: '.milestones__arrow--right',
        }
      }
    ]
    
  });
}