//This is declaring two variables, guesses and score - score starts at 0, guesses starts at 10
var score = 0;
var guesses = 10;

//This is setting an array of computerWordChoices
var computerWordChoices = ["Harry", "Voldemort", "Hermione", "Ron", "Dumbledore", "Hagrid"];

//This is the computer randomly selecting 1 item from the array
var randComputerSelection = computerWordChoices[Math.floor(Math.random() * computerWordChoices.length)];

//Log the random computer selection
console.log(randComputerSelection);

//This is a if/else to change the image based on which word the computer randomly generates
$(document).ready(function() {
    if(randComputerSelection == "Harry") {
        $("#potterImage").attr("src", "assets/images/Harry-Potter-in-cupboard-Jim-Kay-RGB-636x800.jpg");
    }
    else if(randComputerSelection == "Voldemort") {
        $("#potterImage").attr("src","assets/images/HP1_Voldemort.jpg");
    }
    else if(randComputerSelection == "Hermione") {
        $("#potterImage").attr("src","assets/images/Hermione_-_Jim_Kay_1_.jpg");
    }
    else if(randComputerSelection == "Ron") {
        $("#potterImage").attr("src","assets/images/Ron_-_Jim_Kay.jpg");
    }
    else if(randComputerSelection == "Dumbledore") {
        $("#potterImage").attr("src","assets/images/Pottermore_CharacterPortraits_Dumbledore_Colour_05JH.jpg")
    }
    else if(randComputerSelection == "Hagrid") {
        $("#potterImage").attr("src","assets/images/Hagrid_-_Jim_Kay_1_.jpg");
    }
});

