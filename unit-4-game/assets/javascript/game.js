/* Declaring object variables */
var scoreToMatch;
var playerScore;
/* var horcurxes = ["cruxLocket", "cruxNagini", "cruxDiadem", "cruxCup"] */
var cruxLocket = new Crux();
var cruxNagini = new Crux();
var cruxDiadem = new Crux();
var cruxCup = new Crux();

/* Declaring starting variables */
var wins = 0;
var losses = 0;
var pauseGame = false;

$(document).ready(function() {
    resetGame();

    $(".horcruxImage").on("click", function() {

        addPower($(this).attr("id"));
            console.log($(this).attr("id"));
            console.log(this);
            console.log(playerScore);

        if (playerScore === scoreToMatch) {
            wins++;
            resetGame();
        }
        else if (playerScore > scoreToMatch) {
            losses++
            resetGame();
        }

    });
});

function Crux (value) {
    this.value = value;
}

function resetGame() {
    playerScore = 0;
    var scoreToMatch = Math.floor(Math.random() * 102 + 19); 
    console.log(scoreToMatch);

    var powersArr = [];

    cruxLocket.power = getRandomPower(powersArr);
    cruxNagini.power = getRandomPower(powersArr);
    cruxDiadem.power = getRandomPower(powersArr);
    cruxCup.power = getRandomPower(powersArr);

    console.log("Locket: " + cruxLocket.power);
    console.log("Nagini: " + cruxNagini.power);
    console.log("Diadem: " + cruxDiadem.power);
    console.log("Cup: " + cruxCup.power);

    // Display values
    $("#scoreDisplay").html(scoreToMatch);
    $("#wins").html(wins);
    $("#losses").html(losses);
}


function getRandomPower(pa) {
    var power;
    // Loop until a unique power value is generated
    do {
        power = Math.floor(Math.random() * 12)+1;
    } while(pa.includes(power));
    pa.push(power);
    return power;
}

function addPower(Crux) {
    switch(Crux) {
        case "cruxLocket":
            playerScore += cruxLocket.power;
            break;
        case "cruxNagini":
            playerScore += cruxNagini.power;
            break;
        case "cruxDiadem":
            playerScore += cruxDiadem.power;
            break;
        case "cruxCup":
            playerScore += cruxCup.power;
            break;
    }
    // Display new power accumulation
    $("#playerScore").html(playerScore);
}