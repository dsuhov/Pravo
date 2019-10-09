import LazyLoad from "vanilla-lazyload";
import $ from 'jquery';

$(document).ready(function() {
  var circlesLL = new LazyLoad({
    elements_selector: '.s-experience__rounds',
  
    callback_enter: function(el) {
      el.classList.add('animated');
    }
  });
  
  if (window.matchMedia('(max-width: 375px)').matches) {
    $('.s-experience__header .sect-header br').remove();
  }
})