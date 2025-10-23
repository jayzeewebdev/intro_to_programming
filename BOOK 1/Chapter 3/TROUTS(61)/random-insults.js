/*let randomAnimals = ['cow', 'cat', 'dog',];
let randomAdjectives = ['filthy', 'dirty','dopey'];
let randomWords = ['insane', 'crazy', 'moron'];

let randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];

let randomAdjective = randomAdjectives[Math.floor(Math.random()) * randomAdjectives.length];

let randomWord = randomWords[Math.floor((Math.random()) * randomWords.length)];

//let randomInsults = "You clumsy dog, you crazy!"
  let randomInsult = "You " + randomAdjectives + "" + randomAnimals + ", you " + randomWords + "!"

console.log(randomInsult);*/

/*let randomAnimals = ['cow', 'cat', 'dog'];
let randomAdjectives = ['filthy', 'dirty', 'dopey'];
let randomWords = ['insane', 'crazy', 'moron'];

let randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

let randomInsult = "You " + randomAdjective + " " + randomAnimal + ", you " + randomWord + "!";

console.log(randomInsult);*/


/*// Arrays of random words
let randomAnimals = ['pig', 'pigeon', 'rat', 'goat'];
let randomAdjectives = ['weird', 'ugly', 'smelly', 'lazy'];
let randomWords = ['idiot', 'dummy', 'jerk', 'clown', 'loser'];

// Pick a random animal
let randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];

// Pick a random adjective
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

// Pick a random word
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// Combine them into one insult
let randomInsult = "You " + randomAdjective + " " + randomAnimal + " " + randomWord + "!";

// Display in console
console.log(randomInsult);*/


//console.log('\n')

/*//Sophisticated insults
randomAnimals = ['pig', 'pigeon', 'rat', 'goat'];
randomAdjectives = ['weird', 'ugly', 'smelly', 'lazy',];
randomWords =  ['idiots','dummy','jerk','clown', 'loser'];

randomAnimal = randomAnimals[Math.floor(Math.random())*randomAnimals.length];

randomAdjective = randomAdjective[Math.random(Math.random()) * randomAdjective.length];

randomWord = randomWords[Math.random(Math.random())*randomWords.length];

randomInsult = "You " + randomAdjective +""

console.log(randomInsult)*/

/*//Sophisticated insults
randomAnimals = ['pig', 'pigeon', 'rat', 'goat'];
randomAdjectives = ['weird', 'ugly', 'smelly', 'lazy'];
randomWords = ['idiot', 'dummy', 'jerk', 'clown', 'loser'];

randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

randomInsult = "You " + randomAdjective + " " + randomAnimal + " " + randomWord + "!";

console.log(randomInsult);*/

/*//USING THE (+) OPERATOR
let randomAnimals = ['pig', 'pigeon', 'rat', 'goat'];
let randomAdjectives = ['weird', 'ugly', 'smelly', 'lazy'];
let randomWords = ['idiot', 'dummy', 'jerk', 'clown', 'loser'];

let randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

let randomInsult = "You " + randomAdjective + " " + randomAnimal + " " + randomWord + "!";
console.log(randomInsult);*/

/*//USING JOIN ("")
let randomAnimals = ['pig', 'pigeon', 'rat', 'goat'];
let randomAdjectives = ['weird', 'ugly', 'smelly', 'lazy'];
let randomWords = ['idiot', 'dummy', 'jerk', 'clown', 'loser'];

let randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

let insultParts = ["You", randomAdjective, randomAnimal, randomWord + "!"];
let randomInsult = insultParts.join(" ");

console.log(randomInsult);*/

//joining numbers
let numbers = [3, 2, 1];
let result = numbers.join(" is bigger than ");
console.log(result);

/*The .join("...") method joins all elements of an array into a single string.

Whatever string you pass into .join() is placed between each element.

In this case, " is bigger than " is inserted between 3, 2, and 1.

So:
[3, 2, 1].join(" is bigger than ") → "3 is bigger than 2 is bigger than 1"*/
