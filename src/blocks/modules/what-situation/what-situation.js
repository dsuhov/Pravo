import $ from 'jquery';
import slick from "slick-carousel";

$('.practice-item__descr-more').on('click', (evt) => {
  let descrBlock = $(evt.target).parent('.practice-item__descr');
  descrBlock.find('.practice-item__hidden').show();
  descrBlock.find('.practice-item__dots, .practice-item__descr-more').remove();
})


if (window.matchMedia('(max-width: 1110px)').matches) {
  const sliderContainer = document.querySelector('.what-situation__cases');
  
  if (sliderContainer) {
    activateCasesSlider(sliderContainer);
  }
  
  if (window.matchMedia('(max-width: 480px)').matches) {
    $('.case__subtext br').replaceWith( " " );
  }
  
  
  function activateCasesSlider(cont) {
    $('.what-situation__cases').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: '.what-situation__arrow--left',
      nextArrow: '.what-situation__arrow--right',
      
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
    });
  }
}