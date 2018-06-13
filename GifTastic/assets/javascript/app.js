// Initialize variables
var topics = ["Harry Potter", "Hermione Granger", "Ronald Weasley", "Rubeus Hagrid", "Albus Dumbledore"];
var userInput;
var btnDisplay = $("#potterBtnDisplay");
var newPotterBtn = $("<button>");
var characterCount = 0;


// Initial display of buttons
// TODO: Why is this making the array all one button???
function initialDisplay() {
    for(var i=0; i<topics.length; i++) {
        newPotterBtn.append(" " + topics[i]);
        newPotterBtn.attr("class", "btn btn-outline-dark btn-sm");
        btnDisplay.append(newPotterBtn);
        console.log(newPotterBtn);
        characterCount++
    };
};

// On click of 'submit' button
$("#submitBtn").on("click", function(event) {
    event.preventDefault();
    // Capture the value of the user's character input
    userInput = $("#userCharacterInput").val()
    // Initialize new Bootstrap button
    newPotterBtn = $("<button>");
    // TODO: This data attribute with characterCount number is not working
    newPotterBtn.attr("data-character", characterCount);
    newPotterBtn.attr("class", "btn btn-outline-dark btn-sm");
    newPotterBtn.append(userInput);
    btnDisplay.append(newPotterBtn);
    $("#userCharacterInput").val("");
    topics.push(userInput);
    console.log(topics);
    characterCount++
});

$(document).ready(function() {
    initialDisplay(); 
});