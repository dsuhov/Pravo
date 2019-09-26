import $ from "jquery";
import LazyLoad from "vanilla-lazyload";

$(document).ready(function() {
  new LazyLoad({
    elements_selector: ".s-price, .s-price__shield",

    callback_enter: function(el) {
      if (el.classList.contains('s-price__shield')) {
        el.classList.add('s-price__shield--animated');
      }
    }
  });

  if (window.matchMedia('(max-width: 1024px)').matches) {
    $('.s-price__description br, .s-price__header br, .s-price__suggestion br').replaceWith( " " );
  }
})