
/*
const scores = [
  {
    Jack: 0,
  },
  {
    Thabang: 0,
  },
  {
    Shimza: 0,
  },
]
console.log(scores);

scores[0].Jack = 1;
console.log(`score-update:`, scores[0].Jack)

console.log('\n')


scores[1].Thabang = 1;
console.log(`score-update:`, scores[1].Thabang)

console.log('\n')

scores[2].Shimza = 1;
console.log(`score-update:`, scores[2].Shimza)
*/


/*
//ORIGINAL OBJECT
const scores = {
    Jack: 0,
    Thabang: 0,
    Shimza: 0,
}

console.log(scores);
*/

/*
//UPDATING THE ABOVE OBJECT
scores.Jack = 1;
console.log(`score-update: ${scores.Jack}`);

console.log('\n')


scores.Thabang = 1;
console.log(`score-update: ${scores.Thabang}`);

console.log('\n')

scores.Shimza = 1;
console.log(`score-update: ${scores.Shimza}`);*/


//OBJECTS & ARRAYS TOGETHER

let myCrazyObject = {
  "name": "A ridiculous object",
  "some array": [7,9, {purpose: "confusion", number: 123 }, 3.3],
  "random animal": "Banana Shark"
};

console.log(myCrazyObject["some array"][2].number);
