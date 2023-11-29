//  let cat ={
//     "legs" : 3,
//     "name" : "Harmony",
//     "color"  : "Tortoiseshell"
//  }

// let cat ={
//     legs : 3,
//     name : "Harmony",
//     color  : "Tortoiseshell"
//  }

// let cat ={
//     legs : 3,
//     "full name" : "Harmony",
//     color  : "Tortoiseshell"
//  }

//  let cat ={
//     legs : 3,
//     name : "Harmony",
//     color : "Tortoiseshell"
//  }
//  console.log(cat.name);
//  console.log(cat["name"]);

// var dog = { name: "Pancake", age: 6, color: "white", bark: "Yip yap yip!" };
// var cat = { name: "Harmony", age: 8, color: "tortoiseshell" };

// console.log(Object.keys(dog));
// console.log(Object.keys(cat));

// let cat = {};
// //cat.legs = 3;
// cat["legs"] = 3;
// cat.name = "Harmoiny";
// cat.color = "Tortoiseshell";
// console.log(cat);

// var dog = {
//     name: "Pancake",
//     legs: 4,
//     isAwesome: true
// };

// console.log(dog.isBrown);

// var dinosaurs = [
//     { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
//     { name: "Stegosaurus", period: "Late Jurassic" },
//     { name: "Plateosaurus", period: "Triassic" }
//    ];

//    console.log(dinosaurs[0].name);
//    console.log(dinosaurs[2].period);


// let anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
// let dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
// let kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };
// let friends = [anna,dave,kate];

// console.log(friends[1]);
// console.log(friends[2].name)
// console.log(friends[0].luckyNumbers[3])

// let owedMoney = {};
// owedMoney["Jimmy"] = 5;
// owedMoney["Anna"] = 7;
// console.log(owedMoney["Jimmy"]);
// //console.log(owedMoney["Jinen"]);
// owedMoney["Jimmy"] += 3;
// console.log(owedMoney);

var movies = {
    "Finding Nemo": {
        releaseDate: 2003,
        duration: 100,
        actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
        format: "DVD"
    },
    "Star Wars: Episode VI - Return of the Jedi": {
        releaseDate: 1983,
        duration: 134,
        actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
        format: "DVD"
    },
    "Harry Potter and the Goblet of Fire": {
        releaseDate: 2005,
        duration: 157,
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        format: "Blu-ray"
    }
};

//let findingNemo = movies["Finding Nemo"];
//console.log(findingNemo);
//console.log(findingNemo.duration);
let cars = {
    releaseDate: 2006,
    duration: 117,
    actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
    format: "Blu-ray"
};
movies["Cars"] = cars;
console.log(movies);
