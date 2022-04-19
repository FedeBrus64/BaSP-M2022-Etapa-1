console.log('03: ARRAYS');
console.log('----------------------------------------');

// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
//"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Exercise 3.a');
console.log(months[4], months[10]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('Exercise 3.b');
console.log(months.sort());

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
let months2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

months2.unshift('perro');
months2.push('gato');

console.log('Exercise 3.c');
console.log(months2);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
months2.shift();
months2.pop();

console.log('Exercise 3.d');
console.log(months2);

// e. Invertir el orden del array (utilizar reverse).
console.log('Exercise 3.e');
console.log(months2.reverse());

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - 
//(utilizar join).
let months3 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Exercise 3.f');
console.log(months3.join('-'));

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
let months4 = months3.slice(4,11);

console.log('Exercise 3.g');
console.log(months4);

console.log('----------------------------------------');