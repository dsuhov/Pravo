import "../modernizr-custom";
import LazyLoad from "vanilla-lazyload";
import "%modules%/quiz/quiz";
import "%modules%/header/header";

import "%modules%/popups/modal-1/modal-1";
import "%modules%/popups/modal-2/modal-2";

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

