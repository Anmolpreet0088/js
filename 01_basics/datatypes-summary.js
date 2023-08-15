// primitive

// 7 types : String , Number . Boolean , Null , undefined , symbol , Bigint


const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const OutsideTemp  = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 2948295797539573979n

// Referende (Non - Primitive)

// Array , objetcs , Functions

const heros = ["Sj=haktiman" , "naagraj" , "doga"];

let myObj = {
    name : "Anmol",
    age : 22,
}

const myFunction = function(){
    console.log("Hello , world");
}

//console.log(typeof bigNumber);
//console.log(typeof OutsideTemp);
//console.log(typeof scoreValue);
//console.log(typeof myFunction);
//console.log(typeof anotherId);


//Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
