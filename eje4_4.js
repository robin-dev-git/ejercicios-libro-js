const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt('Escribe el primer número: '));
let numero2 = parseInt(prompt('Escribe el segundo número: '));
let numero3 = parseInt(prompt('Escribe el tercer número: '));
let numero4 = parseInt(prompt('Escribe el cuatro número: '));

let resultado1 = (numero1 * numero2) + numero3 / numero4;
let resultado2 = numero1 * (numero2 + numero3 / numero4);
let resultado3 = numero1 * (numero2 + numero3) / numero4;

console.log("Operación 1: (%s * %s) + %s / %s = %s", numero1, numero2, numero3, numero4, resultado1);
console.log("Operación 2: %s * (%s + %s / %s) = %s", numero1, numero2, numero3, numero4, resultado2);
console.log("Operación 3: %s * (%s + %s) / %s = %s", numero1, numero2, numero3, numero4, resultado3);