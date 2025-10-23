
// Declare an array called 'clothes' with 3 items
let clothes = ['jackets', 'shorts', 'pants'];
console.log(clothes, '\n');

// Displaying a section title
console.log("----making use of indexing----");
// Accessing an element using its index (0 = first item)
console.log("input:", clothes[0]);

console.log('\n', "----updating an array----");
// Updating the second element (index 1) in the array
clothes[1] = 'T-shirts';
console.log('updated:', clothes);

console.log('\n', "----mixed array indexing----");
// Declaring a mixed array (numbers, strings, object, boolean, nested array)
let mixedArray = [9, 'world', { age: 20 }, true, [3, 4, 5, 6]];
console.log("mixedArray", mixedArray);
// Accessing a boolean value (index 3)
console.log('mixedArray', mixedArray[3]);
// Accessing a nested array value (second array's index 2)
console.log('mixedArray', mixedArray[4][2]);

console.log('\n', "----adding values at the back of the array----");
// Adding new elements to the end of the array using push()
clothes.push('socks', 'bennie');
console.log('afterPushing', clothes);

console.log('\n', "----removing elements----");
// Removing the last item from the array using pop()
console.log("removedItem", clothes.pop());
// Displaying the updated array after removing the last element
console.log("newArray", clothes);

console.log('\n', "----join an array----");
// Combining two arrays using concat()
let joinArray = clothes.concat(mixedArray);
console.log("concatenation", joinArray);

console.log('\n', "----finding the index----");
// Finding the position of an element in the array using indexOf()
console.log('indexOfTheValue', clothes.indexOf('pants'));

console.log('\n', "----turning it into a string----");
// Converting an array into a single string separated by commas
let mixedString = clothes.join(', ');
console.log("Converted to a string:", mixedString);

console.log('\n', "----building with push----");
// Creating an empty array and adding numbers to it using push()
let numbers = [];
numbers.push(1, 2, 3, 5, 6, 7);
console.log("Numbers Array:", numbers);

console.log('\n', "----adding to the beginning of an array----");
// Adding elements to the beginning of an array using unshift()
numbers.unshift(2, 8, 6);
console.log("Added:", numbers);
