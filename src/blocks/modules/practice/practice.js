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
    arrows: false
    // centerPadding: '160px',
    // prevArrow: '.what-situation__arrow--left',
    // nextArrow: '.what-situation__arrow--right',
  })
}