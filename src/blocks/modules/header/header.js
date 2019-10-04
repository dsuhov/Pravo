import $ from "jquery";
import magnificPopup from "magnific-popup";

$(document).ready(function() {
  
  if (window.matchMedia('(max-width: 375px)').matches) {
    $('.top-line__logo-descr br').remove();
    $('.header-qp__par-3 br').replaceWith(' ');
  }
  
  if (document.querySelector('#header-qp-btn')) {
    $('#header-qp-btn').magnificPopup({
      closeBtnInside: true,
      items: {
        src: '#quiz',
        type:'inline'
      }
    });
  }
  
  if (document.querySelector('.header-thp__title')) {
    $('.header-thp__title br').replaceWith(' ');
  }
  
  // Exit popup init
  // отменить на странице благодарности и на странице квиза
  
  // if (window.matchMedia('(min-width: 1024px)').matches && document.querySelector('.what-situation')) {
  //   const element = document.createElement('script');
  //   element.src = './js/ouibounce.min.js';
  //   element.type = 'text/javascript';
  //   document.head.appendChild(element);
    
  //   element.addEventListener('load', (evt) => {
  //     ouibounce(document.getElementById('modal-7'), {
  //       aggressive: true,
  //       callback: function() {
  //         $.magnificPopup.open({
  //           items: {
  //             src: '#modal-7',
              
  //           },
  //           type: 'inline',
  //           closeBtnInside: false,
  //           callbacks: {
  //             close: function() {
                
  //               setTimeout(() => {
  //                 $.magnificPopup.open({
  //                   items: {
  //                     src: "#quiz",
  //                   },
  //                   type: 'inline'
  //                 })
  //               }, 100)
  //             }
  //           }
  //         }, 0);
  //       }
        
  //     })
  //   })
    
  //   element.addEventListener('error', (evt) => {
  //     console.log('can\'t load ouibounce');
  //   })
    
  // } else if (document.querySelector('.what-situation')) {
  //   setTimeout(() => {
  //     $.magnificPopup.open({
  //       items: {
  //         src: '#modal-7',
          
  //       },
  //       type: 'inline',
  //       closeBtnInside: false,
  //       callbacks: {
  //         close: function() {
            
  //           setTimeout(() => {
  //             $.magnificPopup.open({
  //               items: {
  //                 src: "#quiz",
  //               },
  //               type: 'inline'
  //             })
  //           }, 100)
  //         }
  //       }
  //     }, 0);
  //   }, 20000)
  // }
    
  // Exit popup init end
})