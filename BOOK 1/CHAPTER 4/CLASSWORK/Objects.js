//1.  Defining an Object:
const person = {
    name: 'JACK',             // Key-value pair
    age: 30,
    country: 'Canada',
    'favorite color': 'blue',  // Key with a space requires quotes
    isStudent: false
};

//2.  Accessing Object Values:
const name = person.name; 
console.log("Name:", name);

const age = person['age'];
console.log("Age:", age);