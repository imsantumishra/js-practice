// Primitive

// 7 type : String , Number, Boolean,  null, undefined, symbol, BigInt

/** 
const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('343')
const anotherId = Symbol('343')

console.log(id === anotherId);

const bigNumber = 753363363352211223n

console.log(bigNumber)

const heros = ["saktiman", "naagraj", "doga"]
let myObj ={
    name: "santu",
    age: 22
}
console.log(myObj);

const myFunction = function(){
    console.log("Hello World");
}
myFunction();
console.log(typeof anotherId);*/

// Reference (Non primitive)

//Array, Objects, Functions

//https://262.ecma-international.org/5.1/#sec-11.4.3/


// ***********************************************************************************
// Stack (Primitive), Heap (Non- Primitive)

let myYoutubeName = "SantuMishra"

let anotheName = myYoutubeName
anotheName = "THIs HEllo"
console.log(myYoutubeName);
console.log(anotheName);


let userOne = {
    email: "hello@google.com",
    upi: "heloo@ybl"
}

let userTwo = userOne;

userTwo.email = "hisantu@google.com"
console.log(userOne.email);
console.log(userTwo.email);