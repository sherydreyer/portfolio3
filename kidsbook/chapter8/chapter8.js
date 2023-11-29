// let ourFirstFunction = function () {
//     console.log("Hello World!");
// }

// function ourFirstFunction() {
//     console.log("Hello World!");
// }

// ourFirstFunction();


// function sayHelloTo(name) {
//     console.log("Hello " + name + "!");
// }

// sayHelloTo("Sheryl");

// function drawCats(howManyTimes, whatToDraw) {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log(whatToDraw);
//     }
// }

// drawCats(5, "=0^0=");

// console.log(5 +  Math.floor(1.2345));

// function double(num) {
//   return   num * 2;
// }

// //console.log(double(5) + double(6));
// console.log(double(double(3)));

// function pickRandomWords(words) {
//     return words[Math.floor(Math.random()*words.length)];
// }
// let randomWords = ["Planet", "Worm", "Flower", "Computer"];
// //console.log(pickRandomWords(randomWords))
// console.log(pickRandomWords(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]));

// randomInsultGenerator();
// randomInsultGenerator();

// function randomInsultGenerator() {
//     let randomBodyParts = ["Face", "Nose", "Hair"];
//     let randomAdjectives = ["Smelly", "Boring", "Stupid"];
//     let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
//     // Pick a random body part from the randomBodyParts array:
//     let randomBodyPart = pickRandomWords(randomBodyParts);
//     // Pick a random adjective from the randomAdjectives array:
//     let randomAdjective = pickRandomWords(randomAdjectives);
//     // Pick a random word from the randomWords array:
//     let randomWord = pickRandomWords(randomWords);
//     // Join all the random strings into a sentence:
//     let randomString = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
//     console.log(randomString);
// }
// function pickRandomWords(words) {
//     return words[Math.floor(Math.random() * words.length)];
// }

// function fifthLetter(name) {
//     if (name.length < 5) {
//         return "You have no fifth letter in your name!";
//     }
// return "The fifth letter of your name is " + name[4] + ".";
// }

// let yourName = prompt("What is your name?");
// alert(fifthLetter(yourName));

// function medalForScore(score) {
//     if (score < 3) {
//         return "Bronze";
//     }
//     if (score < 7) {
//         return "Siver";
//     }
//     return "Gold";
// }

// let yourScore = prompt("What is your score?");
// alert("You get " + medalForScore(yourScore) + ".");

// Chapter 8 challenges

//#1

// function add(num1, num2) {
//     return num1 + num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }
// console.log(add(multiply(36325,9824),777));

//#2

console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
function areArraysSame(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false
        }
    }
    return true;
}









