// $(document).ready(function(){
//     var triviaGame = {
    
        //Q&As
        // qAndA:[{
        //     question: "What is the name of the 'cunning house where people who 'will do anything to achieve their ends' are sorted?",
        //         ans1: "Ravenclaw",
        //         ans2: "Gryffindor",
        //         ans3: "Slytherin",
        //         ans4: "Hufflepuff",
        //         imgUrl: "./assets/images/slytherin.png"},
        //    {
        //        question: "What is the name of the vicious tree that Harry and Ron drove into in 'Harry Potter and the Chamber of Secrets'?",
        //         ans1: "Rufus the Birch",
        //         ans2: "The Whomping Willow",
        //         ans3: "Astounding Appleseed",
        //         ans4: "The Dark Mark",
        //         imgUrl: "./assets/images/willow.jpeg"},
        //     {
        //        question: "What is Dumbledore's full name?",
        //         ans1: "Dick Tracey",
        //         ans2: "Albus Percival Wulfric Brian Dumbledore",
        //         ans3: "Albus Percy Wolfgang Brock Dumbledore",
        //         ans4: "Albus Brandon Alexander Dumbledore",
        //         imgUrl: "./assets/images/albus.jpeg"},
        //    {
        //        question: "What is the symbol for Ravenclaw house?",
        //         ans1: "Badger",
        //         ans2: "Eagle",
        //         ans3: "Snake",
        //         ans4: "Lion",
        //         imgUrl: "./assets/images/eagle.png"},
        //     {
        //     question: "What is the name of the wizards prison?",
        //         ans1: "Camelot",
        //         ans2: "Hogwarts",
        //         ans3: "Azkaban",
        //         ans4: "Alcatraz",
        //         imgUrl: "./assets/images/azkaban.jpeg"}],
    
//         correctAnswers: ['Slytherin', 'The Whomping Willow', 'Albus Percival Wulfric Brian Dumbledore', 'Eagle', 'Azkaban'],//array to hold correct answers
//         userAnswers: [],
    
//         questionCount: 0,
//         beginInt: 0,
    
//         timer: 30,
//         btnClicked: false,
//         numberCorrect: 0,
//         numberIncorrect: 0,
//         numberUnAnswered: 0,
//         playMusic: new Audio("./assets/sounds/quizsound.mp3"),
//     }
    
// });//End 

var startGame;
var playGame = false;
var qAndA = [{
    question: "What is Dumbledore's first name?",
    ans1: "Albus",
    ans2: "Alan",
    ans3: "Albert"},
{
    question: "What is Harry's owl's name?",
    ans1: "Hedwig",
    ans2: "Herbert",
    ans3: "Kristin"
}]

var intervalId;
var timerRunning = false;
var timer = {
    time: 0,
    reset: function() {
        timerRunning = true;
        timer.time = 30;
        $("#timerDisplay").html("00:30");
        if(timer.time==0) {
            timerRunning = false;
        }
    },
    start: function() {
        if (!timerRunning) {
            intervalId = setInterval(timer.count, 1000)
            timerRunning = true;
        }
    },
    stop: function() {
        clearInterval(intervalId);
        timerRunning = false;
    },
    count: function() {
        timer.time--;
        var currentTime = timer.timeConverter(timer.time);
        $("#timerDisplay").html(currentTime);
    },
    timeConverter: function(t) {
        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
     
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
     
        if (minutes === 0) {
          minutes = "00";
        }
     
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
     
        return minutes + ":" + seconds;
      }
};

// Timer not working 
function startGame() {
    playGame = true;
    timerRunning = false;
    $("#answerButtons").prepend('<div class="text-center">' + qAndA[0].question);
    $("#ans1").append(qAndA[0].ans1);
    $("#ans2").append(qAndA[0].ans2);
    $("#ans3").append(qAndA[0].ans3);
    console.log(qAndA[0].question)
}

$(document).ready(function() {

    startGame();

});