const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt('Escribe el primer número con decimales: '));
let numero2 = parseFloat(prompt('Escribe el segundo número con decimales: '));

let resultadosuma = numero1 + numero2;
let resultadoresta = numero1 - numero2;
let resultadomultiplicacion = numero1 * numero2;
let resultadodivision = numero1 / numero2;
let resutladomodulo = numero1 % numero2;
let resutladoexponente = numero1 ** numero2;

console.log("Numero 1:", numero1);
console.log("Numero 2:", numero2);
console.log("Resultado suma:", resultadosuma);
console.log("Resultado resta:", resultadoresta);
console.log("Resultado multiplicación:", resultadomultiplicacion);
console.log("Resultado División:", resultadodivision);
console.log("Resultado modulo:", resutladomodulo);
console.log("Resultado exponente:", resutladoexponente);
