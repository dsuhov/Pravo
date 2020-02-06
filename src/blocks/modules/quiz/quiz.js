import $ from "jquery";
import Quiz from "../../../js/import/Quiz";

$(document).ready(function() {

  if (document.querySelector("#quiz")) {
    
    const quizMain = new Quiz("#quiz");
  }

  if (document.querySelector("#quiz2")) {

    const quizMain2 = new Quiz("#quiz2");
    console.log(document.querySelector("#quiz2"));
  }
  
});