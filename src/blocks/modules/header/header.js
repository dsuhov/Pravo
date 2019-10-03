import $ from "jquery";
import magnificPopup from "magnific-popup";

$(document).ready(function() {
  
  if (window.matchMedia('(max-width: 375px)').matches) {
    $('.top-line__logo-descr br').remove();
    $('.header-qp__par-3 br').replaceWith(' ');
  }
  
  if (document.querySelector('#header-qp-btn')) {
    $('#header-qp-btn').magnificPopup({
      closeBtnInside: true,
      items: {
        src: '#quiz',
        type:'inline'
      }
    });
  }

})