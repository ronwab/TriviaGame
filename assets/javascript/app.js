$(document).ready(function() {
  // variable definitions
  var correctAnswer = 0;
  var incorrectAnswer = 0;
  var unansweredQuestion = 0;
  var TotalTime = 30;
  var timeElapsed = 0;
  var timer;
  var quizCompleted = false;
  var correctAnswersKey = [];

  //set of question and answers
  var quiz = [
    {
      question: "Which is the American Favorite sport ?",
      options: ["Soccer", "Baseball", "Rugby", "Footabll"],
      answer: 4
    },
    {
      question: "What is the correct name of the Atlanta based soccer team? ?",
      options: [" United", "Rockstars", "Winners", "Mad vibes"],
      answer: 1
    },
    {
      question: 'Which of the following is considered Fake news" ?',
      options: ["CNN", "Fox News", "ABC", "NBC"],
      answer: 2
    },
    {
      question: " Best city to live in",
      options: ["LA", "Ancient Miami", "Atlanta", "DC"],
      answer: 3
    },
    {
      question: "which country is not part of North America?",
      options: ["United States", "Mexico", "Canada", "Brazil"],
      answer: 4
    },

    {
      question: "Which of the following is not a state",
      options: ["Florida", "Washington", "Washington DC", "Georgia"],
      answer: 3
    },
    {
      question: "Which technology have we not used in class",
      options: ["Node", "CSS", "JS", "Ajax"],
      answer: 1
    }
  ];

  for (var i = 0; i < quiz.length; i++) {
    var answer = i + 1;
    var form = $("<form>");
    form.append($("<h4>").text(quiz[i].question));
    for (var j = 0; j < quiz[i].options.length; j++) {
      var value = j + 1;
      var div = $("<div>").addClass("form-check-inline");
      var label = $('<label for="q' + answer + value + '">').addClass(
        "form-check-label"
      );
      var radio = $("<input>").attr({
        type: "radio",
        id: "q" + answer + value,
        name: "answer" + answer,
        value: value
      });
      radio.addClass("form-check-input");
      label.append(radio);
      label.append(quiz[i].options[j]);
      div.append(label);
      form.append(div);
    }
    form.insertBefore("#btnDone");
    correctAnswersKey.push(quiz[i].answer);
  }

  $("#btnStart").click(startGame);

  function startGame() {
    //hide button
    $("#colBtnStart").hide();
    //show timer
    $("#timeRemain").text(TotalTime);
    $("#timer").show();
    //show options
    $("#quizContainer").show();
    //start timer
    timer = setInterval(gameTimer, 1000);
  }

  function gameTimer() {
    timeElapsed++;
    $("#timeRemain").text(TotalTime - timeElapsed);
    if (timeElapsed >= TotalTime || quizCompleted) {
      clearInterval(timer);
      showResult();
    }
  }

  $("#btnDone").click(userDone);

  function userDone() {
    quizCompleted = true;
  }

  function showResult() {
    $("#timer").hide();
    $("#quizContainer").hide();
    //compare results with answers key
    for (var i = 0; i < correctAnswersKey.length; i++) {
      var index = i + 1;
      var answer = $("input[name='answer" + index + "']:checked").val();
      if (answer == correctAnswersKey[i]) {
        correctAnswer++;
      } else if (answer == undefined) {
        unansweredQuestion++;
      } else {
        incorrectAnswer++;
      }
    }

    $("#correct").text(correctAnswer);
    $("#incorrect").text(incorrectAnswer);
    $("#unanswered").text(unansweredQuestion);

    $("#resultContainer").show();
  }
});
