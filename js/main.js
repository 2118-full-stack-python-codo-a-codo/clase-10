console.log("Hola Codo a Codo desde main.js");
/*

Var <- Estoy diciendo que declaro una variable en ES6 es de ambito global
nombreVar1 <- Es el nombre que le asignamos al a variable.
*/
var nombreVar1 = 4; // tipos numericos.
var nombreStringVar1 = "4"; // String o cadena texto

// Es igual a var pero tiene un alcance local , es a partir de ES6
let nombreVar2 = 4;

let sumaDeDosVariables = nombreVar1 + nombreVar2

console.log(sumaDeDosVariables);

// const no nos deja cambiar el valor pero esto es desde ES6
const PI = 3.141592;
//PI = PI + 1

var myVariableSinValor;

console.log(myVariableSinValor)

console.log(Math.PI);
console.log(PI);

console.log("Esto es un numero aleatorio: " + Math.random());

const biggestNum     = Number.MAX_VALUE
const smallestNum    = Number.MIN_VALUE
const infiniteNum    = Number.POSITIVE_INFINITY
const negInfiniteNum = Number.NEGATIVE_INFINITY
const notANum        = Number.NaN


let myObjectNumber = Number(2);
// O 
let myOtherObjectNumber = new Number(3);

let myInput = prompt("Que edad tenes?")

console.log(myInput);
console.log(parseInt(myInput)); // uso solamente parseInt
console.log(Number.parseInt(myInput)); // Pero uso parseInt desde Number


let myInputFloat = prompt("Ingrese el valor de PI");

console.log(myInputFloat);
console.log(parseFloat(myInputFloat)); // uso solamente parseFloat
console.log(Number.parseFloat(myInputFloat)); // Pero uso parseFloat desde Number

let myInputFloatConverted = parseFloat("3.1415"); // Garantizo que esto sea un texto a decimal

let convertedToString = "1" - myInputFloatConverted;