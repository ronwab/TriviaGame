 $(document).ready(function () {
     var correctAnswerCount = 0
     var wrongAnswerCount = 0
     var unAnsweredQuestionCount = 0
     var totalQuestionCount = 5
     var renderedQn
     var questionCount = 0
     var btnACount = 0
     var btnBCount = 0
     var btnCCount = 0
     var btnDCount = 0




     const myQuestions = [{
             question: "Who is the strongest?",
             answers: [
                 "Superman",
                 "The Terminator",
                 "Waluigi, obviously"
             ],
             correctAnswer: "Waluigi, obviously"
         },
         {
             question: "What is the best site ever created?",
             answers: [
                 "SitePoint",
                 "Simple Steps Code",
                 "Trick question; they're both the best"
             ],
             correctAnswer: "Trick question; they're both the best"
         },
         {
             question: "Where is Waldo really?",
             answers: [
                 "Antarctica",
                 "Exploring the Pacific Ocean",
                 "Sitting in a tree",
                 "Minding his own business, so stop asking"
             ],
             correctAnswer: "Exploring the Pacific Ocean"
         }
     ];



     for (var i = 0; i < myQuestions.length; i++) {
         // for (var j = 0; j < i; j++) {
         console.log(myQuestions[i].question)

         $("#question").text(myQuestions[i].question)
         $('#btnA').text(myQuestions[i].answers[0])
         $('#btnB').text(myQuestions[i].answers[1])
         $('#btnC').text(myQuestions[i].answers[2])
         $('#btnD').text(myQuestions[i].answers[3])
         // }
         $("#question").text(myQuestions[i].question)
         // console.log((myQuestions[i].question));
         // $("#choices2").html(myQuestions[i].answers)
         $("#correctAnswer").text(myQuestions[i].correctAnswer)


         if (myQuestions[i].answers[i] === myQuestions[i].correctAnswer) {
             console.log(myQuestions[i].answers[i]);
             console.log(myQuestions[i].correctAnswer);
         }
     }

     //adding click events for the four buttons
     $('#btnA').on("click", () => {
         console.log(questionCount);

         questionCount = btnACount++
         if (questionCount != totalQuestionCount) {
             console.log("*******************");
             console.log(btnACount);
             console.log(questionCount)
             console.log(totalQuestionCount);
         } else {
             alert("game over")
         }
     });
     $('#btnB').on("click", () => {
         console.log(questionCount)

         questionCount = btnACount++
         if (questionCount != totalQuestionCount) {
             console.log("*******************");
             console.log(btnBCount);
             console.log(questionCount)
             console.log(totalQuestionCount);
         } else {
             alert("game over")
         }
     });
     $('#btnC').on("click", () => {
         console.log(questionCount)

         questionCount = btnACount++
         if (questionCount != totalQuestionCount) {
             console.log("*******************");
             console.log(btnCCount);
             console.log(questionCount)
             console.log(totalQuestionCount);
         } else {
             alert("game over")
         }
     });
     $('#btnD').on("click", () => {
         console.log(questionCount)

         questionCount = btnACount++
         if (questionCount != totalQuestionCount) {
             console.log("*******************");
             console.log(btnDCount);
             console.log(questionCount)
             console.log(totalQuestionCount);
         } else {
             alert("game over")
         }
     })

     // increase win count

     function WinCount() {
         correctAnswerCount++
         alert("You rock")

     }
     //increase loss count
     function lossCount() {
         wrongAnswerCount++
         alert("sucker")
     }
     // Timer code count down.. ** * ITS WORKING
     var timeLeft = 5
     var countdownInterval = setInterval(countdown, 1000)

     function countdown() {
         if (timeLeft > 0) {
             countdownInterval
             timeLeft--

             $("#countdowndiv").text(`Time left: ${timeLeft} seconds`)
         } else {
             $("#countdowndiv").text("Game Over")
             clearTimeout(countdownInterval)
         }
     }

 });



 // slider code Needs Massaging
 //https: //www.jqueryscript.net/slider/Fully-Responsive-Flexible-jQuery-Carousel-Plugin-slick.html