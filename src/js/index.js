
import "svgxuse";
import LazyLoad from "vanilla-lazyload";
import "./import/modernizr-custom";
import "./import/modules";
import "./import/components";

import $ from "jquery";
import magnificPopup from "magnific-popup";

import "%modules%/quiz/quiz";
import "%modules%/two-persons/two-persons";
import "%modules%/popups/modal-1/modal-1";
import "%modules%/popups/modal-2/modal-2";
import "%modules%/popups/modal-3/modal-3";
import "%modules%/popups/modal-4/modal-4";
import "%modules%/popups/modal-7/modal-7";


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

// code for Yandex Metrika
document.addEventListener('DOMContentLoaded', () => {
  ymGoals();
  phoneBtnActions();
  expItemsActions();
  phoneFieldCheck();
});

function ymGoals() {
  const fastForms = document.querySelectorAll('.fast-form__form');
  const getConsultBtn = document.querySelector('.top-line__get-consult');
  const estimatePerspectivesBtn = document.getElementById('header-btn');
  const form_1 = document.getElementById('form-1');

  const getAnalisysOfSituationBtn = document.getElementById('case__btn--item-1');
  const discussPreparationBtn  = document.getElementById('case__btn--item-2');
  const discoverFairPerspectivesBtn  = document.getElementById('case__btn--item-3');
  const askBtns = document.querySelectorAll('.women-btn');
  const wantToKnowPricesBtn = document.querySelector('.s-price__get-prices');

  const chooseTimePlaceBtn = document.getElementById('s-price__btn');
  const orderConsultBtn = document.getElementById('s-price__btn-2');

  const goalStarted = {
    getConsultGoal: true,
    estimatePerspectivesGoal: true,
    getAnalisysOfSituation: true,
    discussPreparation: true,
    discoverFairPerspectives: true,
    ask: true,
    chooseTimePlace: true,
    orderConsult: true,
    wantToKnowPrices: true
  };
  // goal HANDLERS
  const getConsultGoalHandler = () => {
    ym(57143464, 'reachGoal', 'getConsultGoal_form_opened');
    
    if (goalStarted.getConsultGoal) {
      goalStarted.getConsultGoal = false;

      document.getElementById('modal-1-form').addEventListener('submit', evt => {
        ym(57143464, 'reachGoal', 'getConsultGoal_form_submitted');
      })
    }
  };

  const estimatePerspectivesGoalHandler = () => {
    ym(57143464, 'reachGoal', 'estimatePerspectives_form_opened');
    
    if (goalStarted.estimatePerspectivesGoal) {
      goalStarted.estimatePerspectivesGoal = false;
      
      document.getElementById('modal-2-form').addEventListener('submit', evt => {
        ym(57143464, 'reachGoal', 'estimatePerspectives_form_submitted');
      })
    }
  }

  const getAnalisysOfSituationHandler = (evt) => {
    ym(57143464, 'reachGoal', 'getAnalisysOfSituation_form_opened');
    
    if (goalStarted.getAnalisysOfSituation) {
      goalStarted.getAnalisysOfSituation = false;

      document.getElementById('modal-1-form').addEventListener('submit', evt => {
        ym(57143464, 'reachGoal', 'getAnalisysOfSituation_form_submitted');
      })
    }
  }

  const discussPreparationHandler = (evt) => {
    ym(57143464, 'reachGoal', 'discussPreparation_form_opened');

    if (goalStarted.discussPreparation) {
      goalStarted.discussPreparation = false;

      document.getElementById('modal-4-form').addEventListener('submit', evt => {
        ym(57143464, 'reachGoal', 'discussPreparation_form_submitted');
      })
    }
  }

  const discoverFairPerspectivesHandler = (evt) => {
    ym(57143464, 'reachGoal', 'discoverFairPerspectives_form_opened');

    if (goalStarted.discoverFairPerspectives) {
      goalStarted.discoverFairPerspectives = false;

      document.getElementById('modal-2-form').addEventListener('submit', evt => {
        ym(57143464, 'reachGoal', 'discoverFairPerspectives_form_submitted');
      })
    }
  }

  const askHandler = (evt) => {
    ym(57143464, 'reachGoal', 'ask_form_opened');

    if (goalStarted.ask) {
      goalStarted.ask = false;

      document.getElementById('modal-3-form').addEventListener('submit', evt => {
        ym(57143464, 'reachGoal', 'ask_form_submitted');
      });
    }
  }

  const chooseTimePlaceHandler = (evt) => {
    ym(57143464, 'reachGoal', 'chooseTimePlace_form_opened');

    if (goalStarted.chooseTimePlace) {
      goalStarted.chooseTimePlace = false;

      document.getElementById('modal-5-form').addEventListener('submit', evt => {
        ym(57143464, 'reachGoal', 'chooseTimePlace_form_submitted');
      });
    }
  }

  const orderConsultHandler = (evt) => {

    if (goalStarted.orderConsult) {
      goalStarted.orderConsult = false;

      document.querySelector('.s-price__form').addEventListener('submit', evt => {
        ym(57143464, 'reachGoal', 'orderConsult_submitted');
      });
    }
  }

  const wantToKnowPricesHandler = (evt) => {
    ym(57143464, 'reachGoal', 'wantToKnowPrices_form_opened');

    if (goalStarted.wantToKnowPrices) {
      goalStarted.wantToKnowPrices = false;

      document.querySelector('.modal-6__form').addEventListener('submit', evt => {
        ym(57143464, 'reachGoal', 'wantToKnowPrices_form_submitted');
      });
    }
  }

  [...fastForms].forEach(el => el.addEventListener('submit', evt => {
    ym(57143464, 'reachGoal', 'fast_form_submitted');
  }));
  

  // attach event listeners
  
  form_1.addEventListener('submit', (evt) => {
    ym(57143464, 'reachGoal', 'middle_form_submitted');
  });
  
  getConsultBtn.addEventListener('click', getConsultGoalHandler);
  estimatePerspectivesBtn.addEventListener('click', estimatePerspectivesGoalHandler);
  getAnalisysOfSituationBtn.addEventListener('click', getAnalisysOfSituationHandler);
  discussPreparationBtn.addEventListener('click', discussPreparationHandler);
  discoverFairPerspectivesBtn.addEventListener('click', discoverFairPerspectivesHandler);
  [...askBtns].forEach(el => el.addEventListener('click', askHandler));
  chooseTimePlaceBtn.addEventListener('click', chooseTimePlaceHandler);
  orderConsultBtn.addEventListener('click', orderConsultHandler);
  wantToKnowPricesBtn.addEventListener('click', wantToKnowPricesHandler);
}

function phoneBtnActions() {
  const phoneBtns = [...document.querySelectorAll('.top-line__phone-link, .footer__phone-link')];

  const phoneBtnHandler = (evt) => {
    evt.preventDefault();

    $.magnificPopup.open({
      items: {
        src: "#modal-1-phone"
      },
      type: "inline",
      closeBtnInside: false
    });
  }

  if (window.matchMedia('(min-width: 769px)').matches) {
    phoneBtns.forEach(el => {
      el.addEventListener('click', phoneBtnHandler);
      // el.addEventListener('touchend', phoneBtnHandler);
    });
  }
}

function expItemsActions() {
  const items = Array.from(document.querySelectorAll('.experience-item'));
  const popup = document.getElementById('modal-1-expItem');
  const ymbase = '';

  const expItemhandler = evt => {
    let currentTarget = evt.target;
    let currText = '';
    let ymId = '';

    // get form data element
    const formElement = popup.querySelector('form');

    const formElSubmitHandler = e => {
      e.preventDefault();
      ym(57143464, 'reachGoal', ymId + '_SEND');
      formElement.removeEventListener('submit', formElSubmitHandler);
      e.target.submit();
    }

    // set submit event
    formElement.addEventListener('submit', formElSubmitHandler);

    // clicked element proof
    if (!evt.target.classList.contains('experience-item')) {
      currentTarget = evt.target.closest('.experience-item');
    }
    
    // set current text and yandex id
    currText = currentTarget.dataset.popupText;
    ymId = currentTarget.dataset.ymid;

    // set new header for popup
    popup.querySelector('.expItem_header').innerText = currText;

    // open popup
    $.magnificPopup.open({
      items: {
        src: popup
      },
      type: "inline",
      closeBtnInside: false
    });

    ym(57143464, 'reachGoal', ymId + '_OPENED');
  }

  items.forEach(el => el.addEventListener('click', expItemhandler))

}

function phoneFieldCheck() {
  const regex = /\d+/g;

  const inputs = document.querySelectorAll('input[name="number"]');

  [...inputs].forEach(el => el.addEventListener('blur', inputBlurHandler));

  function inputBlurHandler(evt) {
    const inputEl = evt.target;
    
    if (inputEl.value.length !== 16 || isSameNumbers(inputEl.value)) {
      inputEl.setCustomValidity('Неверный формат номера!');
    } else {
      inputEl.setCustomValidity('');
    }
  }

  function isSameNumbers(num) {
    const digits = num.match(regex).slice(1).join('');

    return digits.split('').every((el, i, arr) => {
      
      if (i > 0) {
        return arr[i-1] === el;
      } else {
        return true;
      }
    });
  }
}