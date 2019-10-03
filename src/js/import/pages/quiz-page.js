import "../modernizr-custom";
import LazyLoad from "vanilla-lazyload";
import "%modules%/header/header";

import "%modules%/popups/modal-1/modal-1";
import "%components%/close-btn/close-btn";
import "%modules%/popups/modal-3/modal-3";
import "%modules%/popups/modal-4/modal-4";
import "%modules%/popups/modal-7/modal-7";
import "%modules%/quiz/quiz";

// Check the webp support
Modernizr.on('webp', function(result) {
  if (result) {
    document.body.classList.add('webp')
  } else {
    document.body.classList.add('no-webp')
  }
});

// Initialize lazyload
new LazyLoad();

