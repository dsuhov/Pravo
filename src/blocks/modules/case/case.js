import $ from "jquery";
import magnificPopup from "magnific-popup";

$(document).ready(function() {

  $('#case__btn--item-1').magnificPopup({
    closeBtnInside: true,
    items: {
      type:'inline',
      src: '#modal-1'
    }
  });

  $('#case__btn--item-2').magnificPopup({
    closeBtnInside: true,
    items: {
      type:'inline',
      src: '#modal-4'
    }
  });

  $('#case__btn--item-3').magnificPopup({
    closeBtnInside: true,
    items: {
      type:'inline',
      src: '#modal-2'
    }
  });
})