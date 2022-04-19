console.log('01: VARIABLES AND OPERATORS');
console.log('----------------------------------------');

// a. Crear dos variables numéricas y utilizar el operador suma para guardar 
// el valor de la suma de ambos números en una 3er variable.
var number1 = 4;
var number2 = 8;
var result = number1 + number2;

console.log('Exercise 1.a');
console.log('Result: ', result);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
var string1 = 'mis';
var string2 = 'perros';
var string3 = string1.concat(' ',string2);

console.log('Exercise 1.b');
console.log(string3);

// c. Crear dos variables de tipo String y sumar el largo de cada variable 
// (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
var string1 = 'mis';
var string2 = 'perros';
var totalLength = string1.length + string2.length;

console.log('Exercise 1.c');
console.log("Total number of letters: ", totalLength);


console.log('----------------------------------------');