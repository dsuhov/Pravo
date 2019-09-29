import $ from 'jquery';

if (window.matchMedia('(max-width: 375px)').matches) {
  $('.top-line__logo-descr br').remove();
  $('.header-qp__par-3 br').replaceWith(' ');
}