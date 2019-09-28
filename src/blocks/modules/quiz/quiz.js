import $ from "jquery";
// import magnificPopup from "magnific-popup";

class Quiz {
  
  constructor(rootId) {
    this.rootNode = $(rootId);
    this.finalBlock = this.rootNode.find(".q-last-block");
    this.nextBtn = this.rootNode.find("#quiz_next");
    this.prevBtn = this.rootNode.find("#quiz_prev");
    
    this.scaleItemsPimp = this.rootNode.find(".progress__pimp");
    this.scaleItemsStrip = this.rootNode.find(".progress__strip");

    this.blocks = this.rootNode.find(".q-block");
    
    this.currStep = 0;
    this.testLength = 4;
    this.timeoutID = null;
    
    this.run();
  }


  
  events() {
    this.nextBtn.on('click', () => this.stepNext());
    this.prevBtn.on('click', () => this.prevStep());
    this.rootNode.find('.quiz__form-questions').on('click', '.q-block__input', () => {
      const timeoutIDnew = setTimeout(() => this.stepNext(), 300);

      if (this.timeoutID == null) {
        this.timeoutID = timeoutIDnew;
      } else {
        if (this.timeoutID) clearTimeout(this.timeoutID);
        this.timeoutID = timeoutIDnew;
      }
    })
  }
  
  run() {
    this.showBlock();
    this.events();
  }
  
  stepNext() {
    this.currStep++;
    this.timeoutID = null;
    
    if (this.currStep > this.testLength) {
      this.updateStepScale();
      setTimeout(() => {
        this.finalizeTest();
      }, 500);
    } else {
      this.showBlock();
      this.updateStepScale();
      this.checkPrevBtnInterval();
    }
  }
  
  prevStep() {
    if (this.currStep > 0) {
      this.currStep--;
      this.showBlock();
      this.reduceProgress();
      this.checkPrevBtnInterval();
    }
  }
  
  showBlock() {
    this.blocks.hide();
    $(this.blocks[this.currStep]).show();
  }
  
  showPrevBtn() {
    if (this.prevBtn.hasClass('prev-btn--hidden')) {
      this.prevBtn.removeClass('prev-btn--hidden');
    }
  }
  
  hidePrevBtn() {
    if (!this.prevBtn.hasClass('prev-btn--hidden')) {
      this.prevBtn.addClass('prev-btn--hidden');
    }
  }

  reduceProgress() {
    $(this.scaleItemsPimp[this.currStep+1]).removeClass('progress__pimp--active');
    $(this.scaleItemsStrip[this.currStep]).removeClass('progress__strip--active');
  }
  
  updateStepScale() {
    setTimeout(() => {
      $(this.scaleItemsPimp[this.currStep]).addClass('progress__pimp--active');
    }, 500)
    $(this.scaleItemsStrip[this.currStep-1]).addClass('progress__strip--active');
    
  }
  
  checkPrevBtnInterval() {
    if (this.currStep > 0 && this.currStep <= this.testLength) {
      this.showPrevBtn();
    } else {
      this.hidePrevBtn();
    }
  }
  
  finalizeTest() {
    this.blocks.hide();
    $('.quiz__main-block').css('margin-right', '0');
    this.rootNode.find('.quiz__right-block').hide();
    this.rootNode.find('.quiz__controls').hide();
    this.finalBlock.show();
  }
}
$(document).ready(function() {

  if (document.querySelector("#quiz")) {
    
    const quizMain = new Quiz("#quiz");
    // const quizPopup = new Quiz("#quiz-popup");
    // POPUP
    // $('.yellow-btn--s-top').magnificPopup({
    //   showCloseBtn: false,
    //   items: {
    //     src: '#popup-quiz',
    //     type: 'inline'
    //   }
    // });
    
    // $('.yellow-btn--adv').magnificPopup({
    //   showCloseBtn: false,
    //   items: {
    //     src: '#popup-quiz',
    //     type: 'inline'
    //   }
    // });

    // $('.yellow-btn--adv').on('mfpClose', function(e /*, params */) {
    //   setTimeout(() => {
    //     $.magnificPopup.open({
    //       items: {
    //         src: '#exit-popup'
    //       },
    //       // type: 'inline',
    //       showCloseBtn: false
    //     });
    //   }, 300)
    // });
  }
  
});