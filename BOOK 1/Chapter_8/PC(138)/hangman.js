// --- All function definitions first ---

function pickWord() {
    var words = [
        "javascript", 
        "monkey", 
        "amazing", 
        "pancake", 
        "developer", 
        "hangman", 
        "function", 
        "variable", 
        "browser", 
        "coding"];
    return words[Math.floor(Math.random() * words.length)];
}

function setupAnswerArray(word) {
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}

function showPlayerProgress(answerArray, guessesLeft) {
    alert(answerArray.join(" ") + "\nGuesses left: " + guessesLeft);
}

function getGuess() {
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess !== null) {
        guess = guess.toLowerCase();
    }
    return guess;
}

function updateGameState(guess, word, answerArray) {
    var appearances = 0;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess && answerArray[j] === "_") {
            answerArray[j] = guess;
            appearances++;
        }
    }
    return appearances;
}

function showAnswerAndCongratulatePlayer(answerArray, word, remainingLetters) {
    alert(answerArray.join(" "));
    if (remainingLetters === 0) {
        alert("Good job! The answer was \"" + word + "\".");
    } else {
        alert("Game over! The correct word was \"" + word + "\".");
    }
}

// --- Main game logic ---

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var maxGuesses = 10;
var guessesUsed = 0;

while (remainingLetters > 0 && guessesUsed < maxGuesses) {
    showPlayerProgress(answerArray, maxGuesses - guessesUsed);
    var guess = getGuess();

    if (guess === null) {
        break;
    } else if (guess.length !== 1 || !guess.match(/[a-z]/)) {
        alert("Please enter a single letter.");
        continue;
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
        guessesUsed++; //  Always reduce a guess, even if it's correct
    }
}

showAnswerAndCongratulatePlayer(answerArray, word, remainingLetters);
