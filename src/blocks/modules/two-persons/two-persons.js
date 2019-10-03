import $ from "jquery";
import magnificPopup from "magnific-popup";

$(document).ready(function() {
  
  if (document.querySelector('.two-persons')) {
    $('.women-btn').magnificPopup({
      closeBtnInside: true,
      items: {
        src: '#modal-3',
        type:'inline'
      }
    });
  }

})