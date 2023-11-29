

let word = pickWord();

let answerArray = [];
setupAnswerArray();

let remainingLetters = word.length;
let guess;
let numberOfGuesses = word.length * 2;
while (remainingLetters > 0 && numberOfGuesses > 0) {
    showPlayerProgress();
    guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Please guess a single letter only.");
    } else {
        let correctGuesses = updateGameState();
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer();


function pickWord() {
    // Return a random word
    let words = [
        "chocolate",
        "pen",
        "bears",
        "computer"
    ]

    return words[Math.floor(Math.random() * words.length)];
};
function setupAnswerArray() {
    // Return the answer array
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
};
function showPlayerProgress() {
    // Use alert to show the player their progress
    alert(answerArray.join(" "));
};
function getGuess() {
    // Use prompt to get a guess
    return prompt("Guess a single letter or click'Cancel' to stop playing.");
};
function updateGameState() {
    // Update answerArray and return a number showing how many
    // times the guess appears in the word so remainingLetters
    // can be updated
    numberOfGuesses--;
    let correctGuesses = 0;
    guess = guess.toLowerCase();
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            if (answerArray[j] === "_") {
                answerArray[j] = guess;
                correctGuesses++;
            } else {
                alert(" You have already guessed this letter correctly : " + guess);
                break;
            }
        }
    }
    return correctGuesses;
};
function showAnswerAndCongratulatePlayer() {
    // Use alert to show the answer and congratulate the player
    if (guess === null) {
        alert(answerArray.join(" "));
        alert("Sorry to see you quit. The answer was " + word);
    } else if (numberOfGuesses === 0 && remainingLetters > 0) {
        alert(answerArray.join(" "));
        alert("Sorry you ran out of guesses. The answer was " + word);
    } else {
        alert(answerArray.join(" "));
        alert("Good job!");
    }

};

