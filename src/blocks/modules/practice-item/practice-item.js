import $ from "jquery";


if (window.matchMedia('(max-width: 1110px)').matches) {
  $('.practice-item br').replaceWith(' ');
}

$('.practice-item__descr-more').on('click', openText);
$('.practice-item__descr-more').on('touchend ', openText);

function openText(evt) {
  let descrBlock = $(evt.target).parent('.practice-item__descr');
  descrBlock.find('.practice-item__hidden').show();
  descrBlock.find('.practice-item__dots, .practice-item__descr-more').remove();
}