"use strict";
// let name = prompt("What is your name?");
// //console.log("Hello " + name);
// alert(`Hello ${name}`);
// if (name.length > 7) {
//     alert("Wow, you have a REALLY long name!");
// }else {
//     alert("Your name isn't very long");
// } 

// let lemonChicken = false;
// let beefWithBlackBean = false;
// let sweetAndSourPork = false;

// if (lemonChicken) {
//     alert("Great! I'm having lemon chicken");
// }else if(beefWithBlackBean) {
//     alert("I'm having beef");
// }else if(sweetAndSourPork) {
//     alert("OK, I'll have pork");
// }else {
//     alert("Well I guess I'll have rice then");
// }

// let sheepCounted = 0;
// while (sheepCounted < 10) {
//     console.log(`I have counted ${sheepCounted} sheep`);
//     sheepCounted++;
// }

// console.log("Zzzzzzzzzzzzzzzz");

// let count = 10;
// while(count > 0) {
//     alert(count);
//     count--;
// }
// alert("Happy New Year!");


// for (let count = 10;count > 0;count--) {
//     alert(count);

// }
// alert("Happy New Year!");


// for (let sheepCounted = 0;sheepCounted < 10;sheepCounted++) {
//     console.log(`I have counted ${sheepCounted} sheep`);    
// }
// console.log("Zzzzzzzzzzzzzzzz");


// for (let i = 0, timesToSayHello = 5; i < timesToSayHello; i++) {
// console.log("Hello");
// }  

// var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];

// for(let i = 0; i< animals.length; i++) {
//     console.log(`This zoo contains a ${animals[i]}`);
// }

// let name = "Nick";
// for(let i = 0; i < name.length; i++) {
//     console.log(`This name contains a ${name[i]}`);
// }

// for(let x = 2; x < 10000; x = x *2) {
//     console.log(x);
// }

// let animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

// for (let i = 0; i < animals.length; i++) {
//     animals[i] = "Awesome " + animals[i];
// } console.log(animals);

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let i = 0;
// let randomString = "";
// while (i < 6) {
//     randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
//     i++;
// }
// console.log(randomString);

//#3: h4ck3r sp34k 

let input = "javascript is awesome";
let output = "";

for(let i = 0; i< input.length; i++) {
    if (input[i] === "a") {
        output += "4";
    }else if (input[i] === "e") {
        output += "3";
    } else if (input[i] === "o") {
        output += "0";
    }else if (input[i] === "i") {
        output += "1"
    } else {
        output += input[i];
    }
}
console.log(output);



