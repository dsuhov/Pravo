import $ from "jquery";

$(document).ready(function() {
  const cont = $('#form-1');
  const msgrInput = $('#form-1-messenger');
  
  if (cont.length > 0) {
    $('.choose-msngr__input').on('change', (evt) => {
      const val = $(evt.target).data('val');
      
      msgrInput.attr('placeholder', `Введите номер  ${val}`)
    });
  }
})