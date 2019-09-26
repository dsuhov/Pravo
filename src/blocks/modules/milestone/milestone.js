import $ from "jquery";

if (window.matchMedia('(max-width: 1024px)').matches) {
  $('.milestone__paragraph br').replaceWith(' ');
  $('.milestones__header br').replaceWith(' ');
}