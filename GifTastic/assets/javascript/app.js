// Initialize variables
var topics = ["Harry Potter", "Hermione Granger", "Ronald Weasley", "Rubeus Hagrid", "Albus Dumbledore"];
var userInput;
var btnDisplay = $("#potterBtnDisplay");
var newPotterBtn = $("<button>");
var characterCount = 0;

function newBtn(name, count) {
    var newDisplayBtn = $("<button>")
    newDisplayBtn.append("" + name)
        .attr("class", "btn btn-outline-dark btn-sm gifBtn")
        .attr("data-character", count)
        .attr("id", "item-" + count);

    btnDisplay.append(newDisplayBtn);
    console.log(newDisplayBtn);
    characterCount++;
};

// Initial display of buttons
function initialDisplay() {
    for(var i=0; i<topics.length; i++) {
        newBtn(topics[i], characterCount);
    };
};

// On click of 'submit' button
$("#submitBtn").on("click", function(event) {
    event.preventDefault();
    // Capture the value of the user's character input
    userInput = $("#userCharacterInput").val()
    // newBtn(topics, characterCount)
    // Replace the below with a method
    newPotterBtn = $("<button>")
        .attr("data-character", characterCount)
        .attr("class", "btn btn-outline-dark btn-sm")
        .attr("id", "item-" + characterCount)
        .append(userInput);

    btnDisplay.append(newPotterBtn);
    $("#userCharacterInput").val("");
    topics.push(userInput);
    console.log(topics);
    characterCount++;
});

// Set different class for submit buttons
// Can you specify "data-character" button?
$(document).on("click", ".gifBtn", function() {
    var character = $(this).attr("data-character");
    console.log(character);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      character + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        console.log(results);

        // for (var i = 0; i < results.length; i++) {
        //   var gifDiv = $("<div class='item'>");

        //   var rating = results[i].rating;

        //   var p = $("<p>").text("Rating: " + rating);

        //   var personImage = $("<img>");
        //   personImage.attr("src", results[i].images.fixed_height.url);

        //   gifDiv.prepend(p);
        //   gifDiv.prepend(personImage);

        //   $("#gifs-appear-here").prepend(gifDiv);
        // }
      });
  });
  
$(document).ready(function() {
    initialDisplay(); 
});