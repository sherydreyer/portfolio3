"use strict";
// let dinosaurs = [
//     "T-Rex",
//     "Velociraptor",
//     "Stegosaurus",
//     "Triceratops",
//     "Brachiosaurus",
//     "Pteranodon",
//     "Apatosaurus",
//     "Diplodocus",
//     "Compsognathus"
// ];

// console.log(dinosaurs[0]);
// console.log(dinosaurs[3]);

// dinosaurs[0] = "Tyrannosaurus Rex";

// console.log(dinosaurs);

// let dinosaurs = [];
// dinosaurs[0] = "T-Rex";
// dinosaurs[1] = "Velociraptor";
// dinosaurs[2] = "Stegosaurus";
// dinosaurs[3] = "Triceratops";
// dinosaurs[4] = "Brachiosaurus";
// dinosaurs[5] = "Pteranodon";
// dinosaurs[6] = "Apatosaurus";
// dinosaurs[7] = "Diplodocus";
// dinosaurs[8] = "Compsognathus";
// console.log(dinosaurs);
// dinosaurs[33] = "Philosoraptor";
// console.log(dinosaurs);

// var dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];
// console.log(dinosaursAndNumbers[2]);
// console.log(dinosaursAndNumbers[2][2]);

// let maniacs = ["Yakko", "Wakko", "Dot"];
// console.log(maniacs.length);
// console.log(maniacs[maniacs.length-1]);

// let animals = [];

// animals.push("cat");
// animals.push("dog");
// animals.push("llama");
// console.log(animals);

// animals.unshift("monkey");
// console.log(animals);

// let lastAnimal = animals.pop();
// console.log(animals);
// console.log(lastAnimal);
// animals.unshift(lastAnimal);
// console.log(animals);
// let firstAnimal = animals.shift();
// console.log(firstAnimal);
// console.log(animals);

// let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
// let scalyAnimals = ["Boa Constrictor", "Godzilla"];
// let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
// console.log(furryAndScalyAnimals);

// let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
// let scalyAnimals = ["Boa Constrictor", "Godzilla"];
// let featheredAnimals = ["Macaw", "Dodo"];

// let furryAndScalyAndFeatheredAnimals = furryAnimals.concat(scalyAnimals,featheredAnimals);
// console.log(furryAndScalyAndFeatheredAnimals);
// let colors = ["red","green","blue"];
// console.log(colors.indexOf("blue"));
// console.log(colors.indexOf("green"));
// console.log(colors[2]);
// console.log(colors.indexOf("purple"));
// let insects = ["Bee", "Ant", "Bee", "Bee", "Ant"];
// console.log(insects.lastIndexOf("Bee"));


// let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"]; 
// console.log(boringAnimals);
// let stringBoringAnimals = boringAnimals.join(" sees ");
// console.log(stringBoringAnimals);

// let myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
// let StringMyNames = myNames.join(" ");
// //let StringMyNames = myNames[0] + " " + myNames[1] + " " + myNames[2] + " " + myNames[3];
// console.log(StringMyNames);

//console.log(Math.random() * 10);
 
// console.log(Math.floor(Math.random() * 10));

// var randomWords = ["Explosion", "Cave", "Princess", "Pen"];

// console.log(randomWords[Math.floor(Math.random() * 4)]);

let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random()* randomBodyParts.length)];
let randomAdjective = randomAdjectives[Math.floor(Math.random()* randomAdjectives.length)];
let randomWord = randomWords[Math.floor(Math.random()* randomWords.length)];
let randomInsult = "Your " +  randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!";
console.log(randomInsult);