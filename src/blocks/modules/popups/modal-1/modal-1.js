import $ from "jquery";

$(document).ready(function() {
  const cont = $('#modal-1-form');
  const msgrInput = $('#modal-1_messenger');
  
  if (cont.length > 0) {
    cont.find('.choose-msngr__input').on('change', (evt) => {
      const val = $(evt.target).data('val');
      
      msgrInput.attr('placeholder', `Введите номер  ${val}`)
    });
  }
})