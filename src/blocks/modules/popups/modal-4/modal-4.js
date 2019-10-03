import $ from "jquery";

$(document).ready(function() {
  const cont = $('#modal-4-form');
  const msgrInput = $('#modal-4_messenger');

  if (cont.length > 0) {
    cont.find('.choose-msngr__input').on('change', (evt) => {
      
      const val = $(evt.target).data('val');
      
      msgrInput.attr('placeholder', `Введите номер  ${val}`)
    });
  }

  if (window.matchMedia('(max-width: 920px)').matches) {
    $('.modal-4__header br').replaceWith(' ');
    $('.modal-4__subheader br').replaceWith(' ');
    $('.modal-4__bold-subheader br').replaceWith(' ');
  }
})