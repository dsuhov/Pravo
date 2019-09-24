import $ from "jquery";
import slick from "slick-carousel";

const prSlider = document.querySelector('.practice__slider');

if (prSlider) {
  $(prSlider).slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    // centerPadding: '160px',
    prevArrow: '.practice__arrow--left',
    nextArrow: '.practice__arrow--right',
  })
}