import $ from "jquery";

class Quiz {
  
  constructor(rootId) {
    this.rootNode = $(rootId);
    this.finalBlock = this.rootNode.find(".q-last-block");
    this.nextBtn = this.rootNode.find("#quiz_next");
    this.prevBtn = this.rootNode.find("#quiz_prev");
    
    this.scaleItemsPimp = this.rootNode.find(".progress__pimp");
    this.scaleItemsStrip = this.rootNode.find(".progress__strip");
    this.scaleItemsTitles  = this.rootNode.find(".progress__title");
    this.cases = this.rootNode.find(".quiz-cases__case");

    this.blocks = this.rootNode.find(".q-block");
    this.quizForm = this.rootNode.find(".q-form");
    
    this.currStep = 0;
    this.testLength = 3;
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
    });
    this.formSubmitHandler();
  }

  formSubmitHandler() {
    this.quizForm.submit((evt) => {
      ym(57143464, 'reachGoal', 'QUIZ_FORM_SUMBITTED');
    })
  }
  
  run() {
    this.showBlock();
    this.events();
    this.cases.hide();
    $(this.cases[0]).show();
  }
  
  stepNext() {
    this.currStep++;
    this.timeoutID = null;

    if (this.currStep === 1) {
      ym(57143464, 'reachGoal', 'QUIZ_STEP_2_ACHIEVED');
    } else {
      switch (this.currStep) {
        case 2: ym(57143464, 'reachGoal', 'QUIZ_STEP_3_ACHIEVED'); break;
        case 3: ym(57143464, 'reachGoal', 'QUIZ_STEP_4_ACHIEVED'); break;
        case 4: ym(57143464, 'reachGoal', 'QUIZ_LAST_STEP_ACHIEVED'); break;
      }
    }
    
    if (this.currStep > this.testLength) {
      this.updateStepScale(this.currStep);
      setTimeout(() => {
        this.finalizeTest();
      }, 500);
    } else {
      this.showBlock();
      this.updateStepScale(this.currStep);
      this.updateCases(this.currStep);
      this.checkPrevBtnInterval();
    }
  }
  
  prevStep() {
    if (this.currStep > 0) {
      this.currStep--;
      this.showBlock();
      this.reduceProgress();
      this.checkPrevBtnInterval();
      this.updateCases(this.currStep);
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
    $(this.scaleItemsTitles[this.currStep+1]).removeClass('progress__title--shown');
    $(this.scaleItemsTitles[this.currStep]).addClass('progress__title--shown');
  }
  
  updateStepScale(currStep) {
    setTimeout(() => {
      $(this.scaleItemsPimp[currStep]).addClass('progress__pimp--active');
      $(this.scaleItemsTitles[currStep]).addClass('progress__title--shown');
      $(this.scaleItemsTitles[currStep-1]).removeClass('progress__title--shown');
    }, 500)

    $(this.scaleItemsStrip[this.currStep-1]).addClass('progress__strip--active');
    
  }

  updateCases(currStep) {
    $(this.cases).hide();
    $(this.cases[currStep]).show();
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

export default Quiz;