
import "./import/modernizr-custom";
import "./import/modules";
import "./import/components";

Modernizr.on('webp', function(result) {
  if (result) {
    document.body.classList.add('webp')
  } else {
    document.body.classList.add('no-webp')
  }
});