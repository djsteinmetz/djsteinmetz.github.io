var correctAnswer = 0;
var incorrectAnswer = 0;
var playGame = true;
var correctGuesses = [];
var incorrectGuesses = [];
var unansweredQuestions = [];
var questionCount = 0;
var randomQuestion;

// Convert any string to camelCase
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
};

// unCamelize the correct answer to display upon incorrect guess
// function unCamelize (str){
//     return str
//         // insert a space between lower & upper
//         .replace(/([a-z])([A-Z])/g, '$1 $2')
//         // space before last upper in a sequence followed by lower
//         .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
//         // uppercase the first character
//         .replace(/^./, function(str){ return str.toUpperCase(); })
// }

// Quiz object containing the questions, answer options and the correct answer
var qAndA = [{
    question: "What is Dumbledore's first name?",
        ans1: "Albus",
        ans2: "Alan",
        ans3: "Albert",
        correctAnswer: "albus",
        displayAnswer: "Albus",
        gif: "assets/gif/dumbledore.gif"},
{
    question: "What is Harry's owl's name?",
        ans1: "Hedwig",
        ans2: "Herbert",
        ans3: "Kristin",
        correctAnswer: "hedwig",
        displayAnswer: "Hedwig",
        gif: "assets/gif/hedwig.gif"},
{
    question: "What is the spell that summons an object to it's caster?",
        ans1: "Alohamora", 
        ans2: "Levicorpus", 
        ans3: "Accio",
        correctAnswer: "accio",
        displayAnswer: "Accio",
        gif: "assets/gif/accio.gif"},
{   
    question: "What spell can be used to protect oneself from a Dementor?",
        ans1: "Aguamenti",
        ans2: "Expecto Patronum",
        ans3: "Obliviate",
        correctAnswer: "expectoPatronum",
        displayAnswer: "Expecto Patronum",
        gif: "assets/gif/expecto-patronum.gif"},
{
    question: "Where did the students from the Durmstrang Institute stay during the Tri-Wizard Tournament?",
        ans1: "The forbidden forest",
        ans2: "In a boat on the lake",
        ans3: "In the Hogwarts dormatories",
        correctAnswer: "inABoatOnTheLake",
        displayAnswer: "In a boat on the lake",
        gif: "assets/gif/durmstrang-boat.gif"},
{
    question: "Who received an award for special services to the school, fifty years before Harry attended Hogwarts?",
        ans1: "Rufus Scrimgeour",
        ans2: "Tom Riddle",
        ans3: "Rubeus Hagrid",
        correctAnswer: "tomRiddle",
        displayAnswer: "Tom Riddle",
        gif: "assets/gif/tomRiddle.gif"},
{
    question: "Which spell opens the secret passage to Honeydukes, behind the statue of the one-eyed witch?",
        ans1: "Dissendio",
        ans2: "Dissendia",
        ans3: "Dissendium",
        correctAnswer: "dissendium",
        displayAnswer: "Dissendium",
        gif: "assets/gif/honeydukes.gif"},
{
    question: "Who was the first student in Harry's year to be sorted into Gryffindor?",
        ans1: "Lavender Brown",
        ans2: "Hannah Abbott",
        ans3: "Susan Bones",
        correctAnswer: "lavenderBrown",
        displayAnswer: "Lavender Brown",
        gif: "assets/gif/lav.gif"},
{
    question: "Where in the Hogwarts grounds is Hagrid's hut located?",
        ans1: "Next door to the greenhouses",
        ans2: "Next to Hogsmeade Station",
        ans3: "On the edge of the Forbidden Forest",
        correctAnswer: "onTheEdgeOfTheForbiddenForest",
        displayAnswer: "On the edge of the Forbidden Forest",
        gif: "assets/gif/hagridshut.gif"},
{
    question: "How many known secret passages lead from Hogwarts to Hogsmeade?",
        ans1: "6",
        ans2: "7",
        ans3: "8",
        correctAnswer: "7",
        displayAnswer: "7",
        gif: "assets/gif/secretpassage.gif"},
];

var quizLength = qAndA.length;

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

// Game timer
var gameTimer = new Countdown({  
    seconds:10,  // number of seconds to count down
    onUpdateStatus: function(sec) {
        console.log(sec); $("#timerDisplay").html("<p>" + sec + " seconds left</p>");
    }, // callback for each second
    onCounterEnd: function(){ 
        $("#ans1").prop("disabled", true);
        $("#ans2").prop("disabled", true);
        $("#ans3").prop("disabled", true);
        console.log("Time's up!");
        unansweredQuestions.push(randomQuestion.correctAnswer);
        console.log(unansweredQuestions);
        $("#resultsDisplay").html("<h2>Time's Up!</h2>");
        console.log(incorrectGuesses);
        $("#resultsDisplay").html("<h2>Incorrect! The correct answer was:<br/>" + randomQuestion.displayAnswer + "</h2>");
        setTimeout(getQuestion, 5000);
    } // final action
});

// Retrieving a question from the qAndA object
function getQuestion() {
    if(!qAndA.length==0) {
        $("#resultsDisplay").empty();
        $("#gifDisplay").empty();
        var questionIndex = Math.floor(Math.random()*qAndA.length)
        randomQuestion = qAndA[questionIndex];
        // Start countdown
        gameTimer.start();
        console.log(randomQuestion.question);
        console.log(randomQuestion.ans1);
        console.log(randomQuestion.ans2);
        console.log(randomQuestion.ans3);
        // Display the question
        $("#question").html("<h2>" + randomQuestion.question + "</h2>");
        // Display the answers in the button divs
        console.log($("#ans1"))
        $("#ans1").html(randomQuestion.ans1);
        $("#ans2").html(randomQuestion.ans2);
        $("#ans3").html(randomQuestion.ans3);
        console.log($("#ans1").html());
        // Add IDs to the buttons
        $("#ans1").attr("data-answer", camelize(randomQuestion.ans1));
        $("#ans2").attr("data-answer", camelize(randomQuestion.ans2));
        $("#ans3").attr("data-answer", camelize(randomQuestion.ans3));
        // Remove the selected randomQuestion from the qAndA array
        qAndA.splice(questionIndex, 1);
        console.log(randomQuestion);
        console.log(qAndA);
        // Make sure buttons are clickable
        $("#ans1").prop("disabled", false);
        $("#ans2").prop("disabled", false);
        $("#ans3").prop("disabled", false);
    }
};

// New Game function to set up all displays and reset variables
function newGame() {
    $("#startBtn").on("click", function() {
        $("#answerChoices").show();
        console.log(this);
        $(this).hide();
        correctAnswer = 0;
        incorrectAnswer = 0;
        correctGuesses = [];
        incorrectGuesses = [];
        questionCount = 0;
        getQuestion()
    })
};

// End game upon all questions being asked
function gameOver() {
    playGame = false;
    gameTimer.stop();
    // Hide all of the game play elements
    $("#question").hide();
    $("#answerChoices").hide();
    $("#timerDisplay").hide();
    $("#gifDisplay").hide();
    // Display the quiz results
    $("#resultsDisplay").html("<h2>Your Results</h2>");
    var percentCorrect = (correctGuesses.length/quizLength) * 100;
    console.log(percentCorrect)
    $("#resultsPercentageDisplay").html("<h3>You scored " + percentCorrect +"% on this quiz!</h3>");
    $("#numberCorrect").html("<h2>Correct: " + correctGuesses.length + "</h2>");
    $("#numberIncorrect").html("<h2>Incorrect: " + incorrectGuesses.length + "</h2>");
    $("#numberUnanswered").html("<h2>Unanswered: " + unansweredQuestions.length + "</h2>");
    $("#replayBtn").show();
    // setTimeout(newGame, 5000);
}
// TODO: How do I get it so that the unCamelize feature does correct phrase casing ("Hello world" and not "Hello World")

// Game Starts Here 
$(document).ready(function() {
    newGame();
    $(".qBtn").on("click", function() {
            userGuess = $(this).attr("data-answer");
            if(playGame = true) { // This is in attempt to stop multiple guesses
                if(userGuess==randomQuestion.correctAnswer) {
                    // Disable guess buttons
                    $("#ans1").prop("disabled", true);
                    $("#ans2").prop("disabled", true);
                    $("#ans3").prop("disabled", true);
                    correctAnswer++
                    gameTimer.stop();
                    correctGuesses.push(userGuess);
                    console.log(correctGuesses);
                    $("#resultsDisplay").html("<h2>Correct!</h2>");
                    $("#gifDisplay").html("<img src=" + randomQuestion.gif + ">");
                    setTimeout(getQuestion, 3000);
                }
                else {
                    $("#ans1").prop("disabled", true);
                    $("#ans2").prop("disabled", true);
                    $("#ans3").prop("disabled", true);
                    incorrectAnswer++
                    gameTimer.stop();
                    incorrectGuesses.push(userGuess);
                    console.log(incorrectGuesses);
                    $("#resultsDisplay").html("<h2>Incorrect! The correct answer was:<br/>" + randomQuestion.displayAnswer + "</h2>");
                    $("#gifDisplay").html("<img src=" + randomQuestion.gif + ">");
                    setTimeout(getQuestion, 3000);
                };
            };
        // gameOver if the qAndA array is empty
        if(qAndA.length === 0) {
            playGame = false;
            setTimeout(gameOver, 5000);
        }

    })

    $("#replayBtn").on("click", function() {
        location.reload();
    })
});