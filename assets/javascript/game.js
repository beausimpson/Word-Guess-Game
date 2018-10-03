

// array of words to be randomly selected
var simpsonsCharacters = ["Homer", "Marge", "Bart", "Lisa", "Maggie", "Grandpa", "Ned", "Apu", "Barney", "Blinky", "Patty", "Selma", "Carl", "Lenny", "Moe", "Wiggum", "Cletus", "Duffman", "Krusty", "Nelson", "Smithers", "Skinner", "Willie", "Milhouse", "Ralph", "Sherri", "Terri", "Otto", "Itchy", "Scratchy"];


// computer randomly selects word from array
// make array lowercase
var randomCharacter = simpsonsCharacters[Math.floor(Math.random() * simpsonsCharacters.length)].toLowerCase();
console.log(randomCharacter)

// game variables
var wins = 0;
var losses = 0;
var guesses = 13;
var dashArray = [];
var letterPositionsArray = [];
var wrongGuessArray = [];


// print out "_"s corresponding to letters in random word
// creates array 0f dashes corresponding to randomly selected word
for (var i = 0; i < randomCharacter.length; i++) {
    dashArray.push(" _ ");
};
console.log(dashArray);

// user press key to start game
document.onkeyup = function (event) {
    // console.log(event.key);

    // varibles to be displayed in HTML
    var wordDashArray = document.getElementById("dash-array");
    var letterCheck = document.getElementById("letter-check");
    var wrongGuess = document.getElementById("wrong-letters")
    var gueseseLeft = document.getElementById("guesses-left");

    // user guesses letters in randomly selected word
    // make userguess lowercase
    var userGuess = event.key.toLowerCase();


    // check to see if letter is in word
    // correct guess adds letter to screen / does not subtract from total
    if (randomCharacter.includes(userGuess)) {
        letterPositionsArray.push(userGuess);  
    }
    
    // incorrect guess subtracts from guess total
    else { 
        wrongGuessArray.push(userGuess.toUpperCase());
        guesses--;
    };

    console.log(letterPositionsArray);
    console.log(wrongGuessArray);
    console.log(guesses);

    // passes info to be displayed in HTML
    wordDashArray.textContent = dashArray;
    letterCheck.textContent = letterPositionsArray;
    wrongGuess.textContent = "Incorrect Letters: " + wrongGuessArray;
    gueseseLeft.textContent = "Guesses: " + guesses;


    // once guess numbers equal 0 / give notification of game over

    // if word guessed correct / give notificaton of game winner


    // bonus additions to game
    // on page load- simpsons theme
    // sound of homer "woo hoo" when win
    // sound of homer "do'oh" when lose

};
