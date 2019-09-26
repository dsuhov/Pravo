import "../modernizr-custom";
import LazyLoad from "vanilla-lazyload";
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