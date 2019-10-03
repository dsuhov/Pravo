import $ from "jquery";
import magnificPopup from "magnific-popup";

$(document).ready(function() {
  const cont = $('#modal-2-form');
  const msgrInput = $('#modal-2_messenger');

  if (cont.length > 0) {
    cont.find('.choose-msngr__input').on('change', (evt) => {
      
      const val = $(evt.target).data('val');
      
      msgrInput.attr('placeholder', `Введите номер  ${val}`)
    });
  }

  if (window.matchMedia('(max-width: 920px)').matches) {
    $('.modal-2__header br').replaceWith(' ');
    $('.modal-2__bold-subheader br').replaceWith(' ');
  }
  
  if (document.querySelector('#header-btn')) {
    $('#header-btn').magnificPopup({
      closeBtnInside: true,
      items: {
        src: '#modal-2',
        type:'inline',
    }
    });
  }
  
})