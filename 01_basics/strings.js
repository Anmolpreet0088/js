const name = "Anmol "
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Anmol-aj')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(1,4)
console.log(anotherString);

const newStringone = "   Anmol   "
console.log(newStringone);
console.log(newString.trim());

const url = "https://anmol.com/Aanmol%20joshan"
console.log(url.replace('%20' , '-'));

console.log(url.includes('anmol'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));



