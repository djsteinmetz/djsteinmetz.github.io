var startGame;
var correctGuess;
var incorrectGuess;
var playGame = false;
var qAndA = [{
    question: "What is Dumbledore's first name?",
    answerOptions: ["Albus", "Alan", "Albert"],
    answer: 0,},
{
    question: "What is Harry's owl's name?",
    answerOptions: ["Herbert", "Hedwig", "Hollis"],
    answer: 1,
}]; // end of questions

var resultMessages= {
    correct: "EXCELLENT! You're correct.",
    incorrect: "DREADFUL! Hit the books, muggle.",
    timeOut: "Out of Time!",
    done: "Your results:"
}
var currentQuestion; // Holds current question
var userAnswers; // Holds the user choice
var correctAnswer;
var incorrectAnswer;
var answered;
var unanswered;
var seconds;
var time;

// Start Button
$("#startBtn").on("click", function() {
    $(this).hide();
    newGame();
    showTimer();
    
})

// Reset Button
$("#restartBtn").on("click", function() {
    $(this).hide();
    newGame();
})

// Start Game
function newGame() {
	$('#finalMessage').empty();
	$('#rightAnswers').empty();
	$('#wrongAnswers').empty();
    $('#notAnswered').empty();
    currentQuestion = 0;
	correctAnswer = 0;
	wrongAnswer = 0;
	unanswered = 0;
	newQuestion();
}

// Generate question
function newQuestion() {
    $("#message")
}

// 30s timer
function timer(){
	seconds = 30;
	$('#timer').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//countdown
	time = setInterval(showTimer, 1000);
}

function showTimer(){
	seconds--;
	$('#timerDisplay').html('<h3>Time Remaining: ' + '00:' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		resultsPage(); //switch to answer page
	}
}