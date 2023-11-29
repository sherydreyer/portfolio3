let words = [
    "chocolate",
    "pen",
    "bears",
    "computer"
]

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;
let guess;
let numberOfGuesses = word.length * 2;
while (remainingLetters > 0 && numberOfGuesses > 0) {
    alert(answerArray.join(" "));
    guess = prompt("Guess a single letter or click'Cancel' to stop playing.");
    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Please guess a single letter only.");
    } else {
        numberOfGuesses--;
        guess = guess.toLowerCase();
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                if (answerArray[j] === "_") {
                    answerArray[j] = guess;
                    remainingLetters--;
                } else {
                    alert(" You have already guessed this letter correctly : " + guess);
                    break;
                }
            }
        }
    }
}
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

