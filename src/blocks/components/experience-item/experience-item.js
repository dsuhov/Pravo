import $ from "jquery";
import magnificPopup from "magnific-popup";

$(document).ready(function() {

  $('.experience-item__circumscribing').magnificPopup({
    closeBtnInside: true,
    items: {
      src: '#modal-4',
      type:'inline'
    }
  });
})