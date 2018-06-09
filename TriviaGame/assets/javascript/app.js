var correctAnswer = 0;
var incorrectAnswer = 0;
var playGame = false;
var correctGuesses = [];
var incorrectGuesses = [];
var questionCount = 0;
var randomQuestion;

// Convert any string to camelCase
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
};

var qAndA = [{
    question: "What is Dumbledore's first name?",
        ans1: "Albus",
        ans2: "Alan",
        ans3: "Albert",
        correctAnswer: "albus",
        gif: "assets/gif/"},
{
    question: "What is Harry's owl's name?",
        ans1: "Hedwig",
        ans2: "Herbert",
        ans3: "Kristin",
        correctAnswer: "hedwig",
        gif: "assets/gif/"},
{
    question: "What is the spell that summons an object to it's caster?",
        ans1: "Alohamora", 
        ans2: "Levicorpus", 
        ans3: "Accio",
        correctAnswer: "accio",
        gif: "assets/gif/"},
{   
    question: "What spell can be used to protect oneself from a Dementor?",
        ans1: "Aguamenti",
        ans2: "Expecto Patronum",
        ans3: "Obliviate",
        correctAnswer: "expectoPatronum",
        gif: "assets/gif/expecto-patronum.gif"},
{
    question: "Where did the students from the Durmstrang Institute stay during the Tri-Wizard Tournament?",
        ans1: "The forbidden forest",
        ans2: "In a boat on the lake",
        ans3: "In the Hogwarts dormatories",
        correctAnswer: "inABoatOnTheLake",
        gif: "assets/gif/durmstrang-boat.gif"
}];

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

// TODO: How do I have this choose a random question, but not a question twice?
function getQuestion() {
    $("#resultsDisplay").empty();
    $("#gifDisplay").empty();
    randomQuestion = qAndA[Math.floor(Math.random()*qAndA.length)];
    gameTimer.start();
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
    $("#ans1").attr("id", camelize(randomQuestion.ans1));
    $("#ans2").attr("id", camelize(randomQuestion.ans2));
    $("#ans3").attr("id", camelize(randomQuestion.ans3));
    return;
};

function newGame() {
    $("#startBtn").on("click", function() {
        $("#answerChoices").show();
        console.log(this);
        $(this).hide();
        // playGame = true;
        correctAnswer = 0;
        incorrectAnswer = 0;
        correctGuesses = [];
        incorrectGuesses = [];
        questionCount = 0;
        getQuestion()
    })
};

// TODO: Why does my question update, but NOT the answer choices??

// Game Starts Here 
 $(document).ready(function() {

    newGame();

    $(".qBtn").on("click", function() {
        userGuess = this.id;

        if(gameTimer.seconds === 0) {
            $("#resultsDisplay").html("<h1>Time's Up!</h1>");
            setTimeout(getQuestion, 3000);
        } 
// TODO: How do I get it so that the answer doesn't have to be all lowercase (so that it displays right when displaying randomQuestion.correctAnswer)
        if(userGuess==randomQuestion.correctAnswer) {
            playGame = false;
            correctAnswer++
            gameTimer.stop();
            correctGuesses.push(this.id);
            console.log(correctGuesses);
            $("#resultsDisplay").html("<h1>Correct!</h1>");
            $("#gifDisplay").html("<img src=" + randomQuestion.gif + ">");
            setTimeout(getQuestion, 3000);
        }
        else {
            playGame = false;
            incorrectAnswer++
            gameTimer.stop();
            incorrectGuesses.push(this.id);
            console.log(incorrectGuesses);
            $("#resultsDisplay").html("<h1>Incorrect! The correct answer was: " + randomQuestion.correctAnswer) + "</h1>";
            setTimeout(getQuestion, 3000);
        };

    })
});