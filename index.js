
$(document).ready(function() {
console.log("ready ran")
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

    
function resetAll(){
    randomGenerator(0);
    additionFromCrystals = 0;

    $("#score").text(additionFromCrystals);
    $("#numero").text(randomNumberToMatch);
}

    var randomNumberToMatch = function (){
        randomNumberToMatch = Math.floor((Math.random() * 120) + 19);
        
            //put number on the DOM

        $("#numero").text(randomNumberToMatch);

        // document.getElementById("#numero").innerHTML = randomNumberToMatch;


        console.log("numero ran")
    }

    var randomGenerator = function () {
        randomCrystalOne = Math.floor((Math.random() * 20) + 1);
        randomCrystalTwo = Math.floor((Math.random() * 20) + 1);
        randomCrystalThree = Math.floor((Math.random() * 22) + 1);
        randomCrystalFour = Math.floor((Math.random() * 22) + 1);
          console.log("rn's assigned")
    }

    function addingToScore(crystalNumber) {
        additionFromCrystals = additionFromCrystals +
        crystalNumber;
    }

    randomNumberToMatch();
    randomGenerator();

    $("#crystal_One").on("click", function(){
        addingToScore(randomCrystalOne);
        $("#score").text(additionFromCrystals);
        checkScore();
        console.log("checkscore ran 1")

    });

    $("#crystal_Two").on("click", function(){
        addingToScore(randomCrystalTwo);
        $("#score").text(additionFromCrystals);
        checkScore();
        console.log("checkscore ran 2")

    });

    $("#crystal_Three").on("click", function(){
        addingToScore(randomCrystalThree);
        $("#score").text(additionFromCrystals);
        checkScore();
        console.log("checkscore ran 3")

    });

    $("#crystal_Four").on("click", function(){
        addingToScore(randomCrystalFour);
        $("#score").text(additionFromCrystals);
        checkScore();
        console.log("checkscore ran 4")


    });

    

    var checkScore = function(){
        if (additionFromCrystals === randomNumberToMatch){
            userWins++;
            $("#wins").text(userWins);
            resetAll();
        } else if (additionFromCrystals > randomNumberToMatch) {
            userLoses++;
            $("#loses").text(userLoses);
            resetAll();
        }
    
    }






});