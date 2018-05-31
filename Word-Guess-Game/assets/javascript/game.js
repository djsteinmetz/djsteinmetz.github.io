$(document).ready(function() {

    var characterChoices = ["harry potter", "voldemort", "hermione granger", "ronald weasley", "albus dumbledore", "rubeus hagrid", "severus snape"]
    const maxGuesses = 5

    var guessedLetters = []
    var guessingWord = []
    var characterToMatch = []
    var numGuess
    var wins = 0

    // Set default image display
    var image = "assets/images/mystery-person.jpg"

    function changeImageDisplay() {
        if(characterToMatch.toLowerCase() === "harry potter") {
            image = "assets/images/Harry-Potter-in-cupboard-Jim-Kay-RGB-636x800.jpg"
        }
        else if(characterToMatch.toLowerCase() === "voldemort") {
            image = "assets/images/HP1_Voldemort.jpg"
        }
        else if(characterToMatch.toLowerCase() === "hermione granger") {
            image = "assets/images/Hermione_-_Jim_Kay_1_.jpg"
        }
        else if(characterToMatch.toLowerCase() === "ronald weasley") {
            image = "assets/images/Ron_-_Jim_Kay.jpg"
        }
        else if(characterToMatch.toLowerCase() === "albus dumbledore") {
            image = "assets/images/Pottermore_CharacterPortraits_Dumbledore_Colour_05JH.jpg"
        }
        else if(characterToMatch.toLowerCase() === "rubeus hagrid") {
            image = "assets/images/Hagrid_-_Jim_Kay_1_.jpg"
        }
        else if(characterToMatch.toLowerCase() === "severus snape") {
            image = "assets/images/Pottermore_CharacterPortraits_Snape_Colour_04JH.jpg"
        }
    }

    resetGame()

    var canPlay = true;

    // Look for key press
    document.onkeypress = function(event) {
        // Make sure key pressed is an alpha character
        if (isAlpha(event.key) && canPlay) {
            checkForLetter(event.key.toUpperCase())
        }
    }

    // Functions

    function checkForLetter(letter) {
        var foundLetter = false

        // Search string for letter
        for (var i=0; i < characterToMatch.length; i++) {
            if (letter === characterToMatch[i]) {
                guessingWord[i]=letter
                foundLetter=true
                if (guessingWord.join("") === characterToMatch) {
                    // Increase win #
                    canPlay = false;
                    wins++
                    changeImageDisplay()
                    setTimeout(resetGame, 5000)
                }
            }
        }

        if(!foundLetter) {
            if (!guessedLetters.includes(letter)) {
                guessedLetters.push(letter)
                numGuess--
            }
            if(numGuess===0) {
                guessingWord = characterToMatch.split()
                canPlay = false;
                setTimeout(resetGame, 5000)
            }
        } 

        updateDisplay()

        if(guessingWord.join("") === characterToMatch) {
            changeImageDisplay($("#potterImage").attr("src", image))
            document.getElementById("nameDisplay").innerHTML = ""
        }

    }

    // Check in keypressed is between A-Z or a-z
    function isAlpha (ch){
        return /^[A-Z]$/i.test(ch);
    }

    function resetGame() {
        canPlay = true;
        image = "assets/images/mystery-person.jpg"
        numGuess=maxGuesses
        //console.log(numGuess)
        // Get new Character
        characterToMatch=characterChoices[Math.floor(Math.random() * characterChoices.length)].toUpperCase()
        //console.log(characterToMatch)

        // Reset word arrays
        guessedLetters=[]
        guessingWord=[]

        // Reset the word
        for (var i=0; i<characterToMatch.length; i++) {
            if(characterToMatch[i] === " ") {
                guessingWord.push(" ")
            }
            else {
                guessingWord.push("_")
            }
        }
        // console.log(guessingWord)
        // console.log(image)

        updateDisplay()
    }

    updateDisplay()

    function updateDisplay() {
        document.getElementById("lettersGuessed").innerText = guessedLetters.join(" ")
        document.getElementById("remainingGuesses").innerText = numGuess
        document.getElementById("currentWord").innerHTML = guessingWord.join("")
        document.getElementById("totalWins").innerText = wins
        $("#potterImage").attr("src", "assets/images/mystery-person.jpg")
        document.getElementById("nameDisplay").innerText = "GUESS THE CHARACTER!"
    }

})


// //COMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUT
// //This is declaring two variables, guesses and score - score starts at 0, guesses starts at 10
// var score = 0;
// var guesses = 15;
// var lettersGuessed = [""];
// //Setting an array of characterChoices
// var characterChoices = ["harry", "voldemort", "hermione", "ron", "dumbledore", "hagrid"];
// //Computer randomly selecting 1 item from the array
// var randComputerSelection = characterChoices[Math.floor(Math.random() * characterChoices.length)];
// //Console log the computer's random word selection
// console.log(randComputerSelection);
// //Turn random computer selection into an array of letters
// var lettersArray = randComputerSelection.split("");
// //console log the new split array
// console.log(lettersArray);
// //declaring image variable
// var image = "http://via.placeholder.com/350x450";
// //Function to change image based on randComputerSelection
// function changeImageDisplay() {
//     if(randComputerSelection == "harry") {
//         image = "assets/images/Harry-Potter-in-cupboard-Jim-Kay-RGB-636x800.jpg";
//     }
//     else if(randComputerSelection == "voldemort") {
//         image = "assets/images/HP1  _Voldemort.jpg";
//     }
//     else if(randComputerSelection == "hermione") {
//         image = "assets/images/Hermione_-_Jim_Kay_1_.jpg";
//     }
//     else if(randComputerSelection == "ron") {
//         image = "assets/images/Ron_-_Jim_Kay.jpg";
//     }
//     else if(randComputerSelection == "dumbledore") {
//         image = "assets/images/Pottermore_CharacterPortraits_Dumbledore_Colour_05JH.jpg";
//     }
//     else if(randComputerSelection == "hagrid") {
//         image = "assets/images/Hagrid_-_Jim_Kay_1_.jpg";
//     };
// }

// //when the browser is ready and everything is loaded, loop thru letters of the array
// $(document).ready(function() {
//     //Press any key to get started
//     $(document).keypress(function(startGame) {
//     // for(var i=0; i<(lettersArray.length - 1); i++) {
//         $(document).keypress(function(userLetterGuess) {
//             console.log(userLetterGuess.key);
//             for(var i=0; i<lettersArray.length; i++) {
//             if(userLetterGuess.key == lettersArray[i]) {
//                 console.log("correct");
//                 lettersArray.splice([i], 1)
//                 return lettersArray;
//             }
//             else console.log("incorrect");
//             lettersGuessed.push(lettersArray[i]);
//             return lettersGuessed;
//             }
//             console.log("Letters in word Array: " + lettersArray);
//             console.log("Letters Guessed: " + lettersGuessed);
//         });
//         if(jQuery.isEmptyObject(lettersArray)) {
//             changeImageDisplay($("#potterImage").attr("src", image));
//             console.log(image);
//         }
//     });
// });
// //COMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUTCOMMENTED OUT



















// // $(document).ready(function() {

//     function changeImageDisplay() {
//         var image;
//         if(randComputerSelection == "Harry") {
//             image = "assets/images/Harry-Potter-in-cupboard-Jim-Kay-RGB-636x800.jpg";
//             //$("#potterImage").attr("src", "assets/images/Harry-Potter-in-cupboard-Jim-Kay-RGB-636x800.jpg");
//         }
//         else if(randComputerSelection == "Voldemort") {
//             image = "assets/images/HP1_Voldemort.jpg";
//             //$("#potterImage").attr("src","assets/images/HP1_Voldemort.jpg");
//         }
//         else if(randComputerSelection == "Hermione") {
//             image = "assets/images/Hermione_-_Jim_Kay_1_.jpg";
//             //$("#potterImage").attr("src","assets/images/Hermione_-_Jim_Kay_1_.jpg");
//         }
//         else if(randComputerSelection == "Ron") {
//             image = "assets/images/Ron_-_Jim_Kay.jpg";
//             //$("#potterImage").attr("src","assets/images/Ron_-_Jim_Kay.jpg");
//         }
//         else if(randComputerSelection == "Dumbledore") {
//             image = "assets/images/Pottermore_CharacterPortraits_Dumbledore_Colour_05JH.jpg";
//             //$("#potterImage").attr("src","assets/images/Pottermore_CharacterPortraits_Dumbledore_Colour_05JH.jpg")
//         }
//         else if(randComputerSelection == "Hagrid") {
//             image = "assets/images/Hagrid_-_Jim_Kay_1_.jpg";
//             //$("#potterImage").attr("src","assets/images/Hagrid_-_Jim_Kay_1_.jpg");
//         };

//         console.log(image);
//         $("#potterImage").attr("src", image);
//     }
//     //Log the random computer selection
//     console.log(randComputerSelection);

// //If/else to change the image based on which word the computer randomly generates
//     $(document).ready(function() {
//         // while(guesses>0 || '''all letters have been guessed''') {
//              $(".btn").on("click", function() {
//              //Image changing based on [randComputerSelection]
//              changeImageDisplay();
//          });
//      });
// });






