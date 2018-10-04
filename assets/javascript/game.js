

// array of words to be randomly selected
var simpsonsCharacters = ["Homer", "Marge", "Bart", "Lisa", "Maggie", "Grandpa", "Ned", "Apu", "Barney", "Blinky", "Patty", "Selma", "Carl", "Lenny", "Moe", "Wiggum", "Cletus", "Duffman", "Krusty", "Nelson", "Smithers", "Skinner", "Willie", "Milhouse", "Ralph", "Sherri", "Terri", "Otto", "Itchy", "Scratchy"];


// computer randomly selects word from array
// make array lowercase
var randomCharacter = simpsonsCharacters[Math.floor(Math.random() * simpsonsCharacters.length)].toLowerCase();
console.log(randomCharacter)


// game variables
var wins = 0;
var losses = 0;
var guesses = 14;
var dashArray = [];
var letterPositionsArray = [];
var wrongGuessArray = [];

// sound variables
var homer_win = new Audio("assets/audio/Homer - Woohoo!.wav");
var homer_loser = new Audio("assets/audio/Homer - Doh!.wav");
var simpsons_theme = new Audio("assets/audio/The Simpsons - Intro.wav")

// print out "_"s corresponding to letters in random word
// creates array 0f dashes corresponding to randomly selected word
for (var i = 0; i < randomCharacter.length; i++) {
    dashArray.push("—");
};
// console.log(dashArray);

// user press key to start game
document.onkeyup = function (event) {
    // on game start - simpsons theme
    // simpsons_theme.play();

    // varibles to be displayed in HTML
    var directionsText = document.getElementById("directions-text");
    var wordDashArray = document.getElementById("dash-array");
    var wrongGuess = document.getElementById("wrong-letters")
    var gueseseLeft = document.getElementById("guesses-left");

    // user guesses letters in randomly selected word
    // only a-z input
    // make userguess lowercase
    // var letters = /^[A-Za-z]+$/;
    var userGuess = event.key.toLowerCase();

    // check to see if letter is in word
    // correct guess adds letter to screen / does not subtract from total
    if (randomCharacter.indexOf(userGuess) != -1) { 
        for (var i = 0; i < randomCharacter.length; i++) { 
            if (randomCharacter[i] == userGuess)
                dashArray[i] = randomCharacter[i].toUpperCase();
        }
        //  incorrect guess subtracts from guess total
    } else {
        wrongGuessArray.push(userGuess.toUpperCase());
        guesses--;
    };          

    
    // if word guessed correct / give notificaton of game winner
    // sound of homer "woo hoo" when win
    if (dashArray.indexOf('—') == -1 ) {
        homer_win.play();
        alert("you win")
    }
    
    // once guess numbers equal 0 / give notification of game over
    // sound of homer "do'oh" when lose
      else if (guesses === 0){
        homer_loser.play();
        alert("you lose")
        
      }
    
    // Hide the directions
    directionsText.textContent = "";

    // passes info to be displayed in HTML
    wordDashArray.textContent = dashArray.join(" ");
    wrongGuess.textContent = "Incorrect Letters: " + wrongGuessArray.join(" ");
    gueseseLeft.textContent = "Guesses: " + guesses;




};
