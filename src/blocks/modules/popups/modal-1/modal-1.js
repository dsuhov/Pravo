import $ from "jquery";
import magnificPopup from "magnific-popup";

$(document).ready(function() {
  const cont = $('#modal-1-form');
  const msgrInput = $('#modal-1_messenger');
  
  if (cont.length > 0) {
    cont.find('.choose-msngr__input').on('change', (evt) => {
      const val = $(evt.target).data('val');
      
      msgrInput.attr('placeholder', `Введите номер  ${val}`)
    });
  }

  if (window.matchMedia('(max-width: 920px)').matches) {
    $('.modal-1__bold-subheader br').replaceWith(' ');
  }

  $('.top-line__get-consult').magnificPopup({
    type:'inline',
    closeBtnInside: true,
  });
})