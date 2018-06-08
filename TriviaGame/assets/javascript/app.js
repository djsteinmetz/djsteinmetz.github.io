var startGame;
var correctGuess;
var incorrectGuess;
var playGame = false;
var qAndA = [{
    question: "What is Dumbledore's first name?",
        ans1: "Albus",
        ans2: "Alan",
        ans3: "Albert",
        correctAnswer: "Albus"},
{
    question: "What is Harry's owl's name?",
        ans1: "Hedwig",
        ans2: "Herbert",
        ans3: "Kristin",
        correctAnswer: "Hedwig"
}];
var userAnswers = [];
var questionCount = 0;

var randomQuestion = qAndA[Math.floor(Math.random()*qAndA.length)];

var gameTimer = new Countdown({  
    seconds:30,  // number of seconds to count down
    onUpdateStatus: function(sec){console.log(sec); $("#timerDisplay").html("00:" + sec);}, // callback for each second
    onCounterEnd: function(){ console.log("Time's up!");} // final action
});

// 30s Timer
function Countdown(options) {
    var timer,
    instance = this,
    seconds = options.seconds || 10,
    updateStatus = options.onUpdateStatus || function () {},
    counterEnd = options.onCounterEnd || function () {};
  
    function decrementCounter() {
      updateStatus(seconds);
      if (seconds === 0) {
        counterEnd();
        instance.stop();
      }
      seconds--;
    }
  
    this.start = function () {
      clearInterval(timer);
      timer = 0;
      seconds = options.seconds;
      timer = setInterval(decrementCounter, 1000);
    };
  
    this.stop = function () {
      clearInterval(timer);
    };
};

function getQuestion() {
    console.log(randomQuestion.question);
    console.log(randomQuestion.ans1);
    console.log(randomQuestion.ans2);
    console.log(randomQuestion.ans3);
    // Display the question
    $("#question").html(randomQuestion.question);
    // Display the answers in the button divs
    $("#ans1").html(randomQuestion.ans1);
    $("#ans2").html(randomQuestion.ans2);
    $("#ans3").html(randomQuestion.ans3);
    // Add IDs to the buttons
    $("#ans1").attr("id", randomQuestion.ans1);
    $("#ans2").attr("id", randomQuestion.ans2);
    $("#ans3").attr("id", randomQuestion.ans3);
    return;
};

function resetGame() {
    gameTimer.start();
    getQuestion(); 
};
// TODO: How do I loop through the questions 1 at a time, and not all at once?
// Game Starts Here 
 $(document).ready(function() {
    console.log(qAndA.length)
    resetGame();
    $(".btn").on("click", function() {
        userGuess = this.id;
        if(userGuess==randomQuestion.correctAnswer) {
            gameTimer.stop();
            // TODO: Push the user answer to the userAnswers array
            $("#resultsDisplay").html("<h1>Correct!</h1>");
        }
        else {
            gameTimer.stop();
           $("#resultsDisplay").html("<h1>Incorrect!</h1>");
        };
        setTimeout(resetGame, 5000);
    })
});