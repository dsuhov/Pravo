import $ from "jquery";
import magnificPopup from "magnific-popup";

$(document).ready(function() {

  if (document.querySelector('.experience-item__circumscribing')) {
    $('.experience-item__circumscribing').magnificPopup({
      closeBtnInside: true,
      items: {
        src: '#modal-4',
        type:'inline'
      }
    });
  }

})