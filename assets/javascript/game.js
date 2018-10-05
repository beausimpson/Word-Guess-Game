

// array of words to be randomly selected
var simpsonsCharacters = ["Homer", "Marge", "Bart", "Lisa", "Maggie", "Grandpa", "Ned", "Apu", "Barney", "Blinky", "Patty", "Selma", "Carl", "Lenny", "Moe", "Wiggum", "Cletus", "Duffman", "Krusty", "Nelson", "Smithers", "Skinner", "Willie", "Milhouse", "Ralph", "Sherri", "Terri", "Otto", "Itchy", "Scratchy"];

// computer randomly selects word from array
// make array lowercase
var randomCharacter = simpsonsCharacters[Math.floor(Math.random() * simpsonsCharacters.length)].toLowerCase();
console.log(randomCharacter);


// game variables
var wins = 0;
var losses = 0;
var guesses = 14;
var dashArray = [];
var wrongGuessArray = [];

// sound variables
// winning sounds array
var winnerSoundArray =["assets/audio/Homer - Woohoo!.wav", "assets/audio/Bart - Cool Man.wav", "assets/audio/Martin - Pick me!.wav", "assets/audio/Ned - Hot diggity.wav"];
var winnerSound = new Audio(winnerSoundArray[Math.floor(Math.random() * winnerSoundArray.length)]);

// losing sounds array
var loserSoundArray = ["assets/audio/Homer - Doh!.wav", "assets/audio/Bart - I didn't do it.wav", "assets/audio/BeeGuy - No es bueno.wav", "assets/audio/Nelson - Ha ha.wav", "assets/audio/Lisa - Noooo!.wav"];
var loserSound = new Audio(loserSoundArray[Math.floor(Math.random() * loserSoundArray.length)]);
// var homer_loser = new Audio("assets/audio/Homer - Doh!.wav");

var simpsons_theme = new Audio("assets/audio/The Simpsons - Intro.wav");

// print out "_"s corresponding to letters in random word
// creates array 0f dashes corresponding to randomly selected word
for (var i = 0; i < randomCharacter.length; i++) {
    dashArray.push("—");
};

// user press key to start game
document.onkeyup = function (event) {
    // on game start - simpsons theme
    // simpsons_theme.play();

    // varibles to be displayed in HTML
    var directionsText = document.getElementById("directions-text");
    var wordDashArray = document.getElementById("dash-array");
    var wrongGuess = document.getElementById("wrong-letters");
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
    }
    // incorrect guess subtracts from guess total
    // only one instance of wrong guess added to array
    else if (wrongGuessArray.indexOf(userGuess) == -1) {
        wrongGuessArray.push(userGuess.toUpperCase());
        guesses--;
    };

    // if word guessed correct / give notificaton of game winner
    // play winning sound from winning sound array
    // reloads game after alert dismissal
    if (dashArray.indexOf('—') == -1) {
        winnerSound.play();
        location.reload();
        alert("WINNER!!!\nYou Guessed: " + randomCharacter.toUpperCase() + " Correctly!");
    }

    // once guess numbers equal 0 / give notification of game over
    // play losing sound from losing sound array
    // reloads game after alert dismissal
    else if (guesses === 0) {
        loserSound.play();
        location.reload();
        alert("You Lose!!!. Try Again.");
    };

    // Hide the directions
    directionsText.textContent = "";

    // passes info to be displayed in HTML
    wordDashArray.textContent = dashArray.join(" ");
    wrongGuess.textContent = "Incorrect Letters: " + wrongGuessArray.join(" ");
    gueseseLeft.textContent = "Guesses Left: " + guesses;

};
