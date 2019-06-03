
$(document).ready(function() {

//initialize the variables

var additionFromCrystals = 0;
var userWins = 0;
var userLoses = 0;
var randomCrystalOne = 0;
var randomCrystalTwo = 0;
var randomCrystalThree = 0;
var randomCrystalFour = 0;
var randomNumberToMatch = 0;

// I need to reset the values

    function resetAll() {
        randomNumberToMatch();
        randomGenerator();
        additionFromCrystals = 0;

        $("#score").text(additionFromCrystals);
        $("#numero").text(numberToMatch);
        
    }

    var numberToMatch = function (){
        randomNumberToMatch = Math.floor((Math.random() * 120) + 19);
        
            //put number on the DOM
        $("#numero").html(randomNumberToMatch);
    }

    var randomGenerator = function () {
        randomCrystalOne = Math.floor((Math.random() * 20) + 1);
        randomCrystalTwo = Math.floor((Math.random() * 20) + 1);
        randomCrystalThree = Math.floor((Math.random() * 22) + 1);
        randomCrystalFour = Math.floor((Math.random() * 22) + 1);
          
    }

    function addingToScore(crystalNumber) {
        additionFromCrystals = additionFromCrystals +
        crystalNumber;
    }

    numberToMatch();
    randomGenerator();

    $("#crystal_One").on("click", function(){
        addingToScore(randomCrystalOne);
        $("#score").text(additionFromCrystals);
        checkScore();
    });

    $("#crystal_Two").on("click", function(){
        addingToScore(randomCrystalTwo);
        $("#score").text(additionFromCrystals);
        checkScore();
    });

    $("#crystal_Three").on("click", function(){
        addingToScore(randomCrystalThree);
        $("#score").text(additionFromCrystals);
        checkScore();
    });

    $("#crystal_Four").on("click", function(){
        addingToScore(randomCrystalFour);
        $("#score").text(additionFromCrystals);
        checkScore();
    });

    var checkScore = function(){
        if (additionFromCrystals === randomNumberToMatch){
            resetAll();
            userWins++;
            $("#wins").text(userWins);
        } else if (additionFromCrystals > randomNumberToMatch) {
            resetAll();
            userLoses++;
            $("#loses").text(userLoses);
        }
    
    }






})