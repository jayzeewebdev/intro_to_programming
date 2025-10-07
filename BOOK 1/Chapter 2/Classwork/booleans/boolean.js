// Declare a variable indicating the person has showered
let hadShower = true;

// Declare a variable indicating the person does not have a backpack
var hasBackpack = false;

// Check if the person has showered and has a backpack (returns false)
hadShower && hasBackpack;

// Reassign hadShower to true (already true, but reaffirmed)
hadShower = true;

// Reassign hasBackpack to true
var hasBackpack = true;

// Check again if the person has showered and has a backpack (returns true)
hadShower && hasBackpack;

// Declare age variable
let age = 12;

// Re-declare hadShower (already declared above, but using let again)
let hadShower1 = true;

// Conditional check: if age is greater than 12 and person had a shower
if (age > 12 && hadShower1) {
    console.log("you had shower"); // This will not run because age is not > 12
} else {
    console.log("you have not showerd"); // This will run
}
//----------------------------

// Declare a variable indicating the person has showered
let hadShower2 = true;

// Declare a variable indicating the person does not have a backpack
var hasBackpack = false;

// Check if the person has showered and has a backpack
hadShower2 || hasBackpack;

// Declare age variable
let age1 = 12;

// Re-declare hadShower (already declared above, but using let again)
let hadShowers = true;

// Conditional check: if age is greater than 12 and person had a shower
if (age1 > 12 || hadShowers) {
    console.log("you had shower")
} else {
    console.log("you have not showerd");
}