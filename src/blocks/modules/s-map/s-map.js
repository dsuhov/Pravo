import $ from "jquery";
import LazyLoad from "vanilla-lazyload";

$(document).ready(function() {
  new LazyLoad({
    elements_selector: ".s-map",
    
    callback_enter: function(el) {
      const element = document.createElement('script');
      element.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      element.type = 'text/javascript';

      document.head.appendChild(element);
      
      setTimeout(() => {
        ymaps.ready(init);
      }, 1000)

      var myMap1,
          myPlacemark1;
    
      function init(){   
        let coords = [55.764612, 37.606451];
        let zoom = 18;
        
        if (window.matchMedia('(max-width: 765px)').matches) {
          coords = [55.763902, 37.606151];
          zoom = 17;
        }
        
          myMap1 = new ymaps.Map("s-map", {
              center: coords,
              zoom: zoom,
              controls: []
          });
          
    
          myPlacemark1 = new ymaps.Placemark([55.764612, 37.606451], { 
              hintContent: 'Московская коллегия адвокатов', 
              balloonContent: 'Московская коллегия адвокатов' 
          }, {
              preset: 'islands#redDotIcon'
          });
          
          
          myMap1.geoObjects.add(myPlacemark1);
      }
      
    }
  });
})