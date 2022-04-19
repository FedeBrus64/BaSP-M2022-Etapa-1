console.log('02: STRINGS');
console.log('----------------------------------------');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
//(utilizar toUpperCase).

var phrase = 'mis dos perros';
var phrase2 = phrase.toUpperCase();

console.log('Exercise 2.a');
console.log(phrase2);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
//con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var phrase = 'mis dos perros';
var phrase2 = phrase.substring(0,5);

console.log('Exercise 2.b');
console.log(phrase2);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres 
//guardando el resultado en una nueva variable (utilizar substring).

var phrase = 'mis dos perros';
var phrase2 = phrase.substring(11,14);

console.log('Exercise 2.c');
console.log(phrase2);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera 
//letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
//(utilizar substring, toUpperCase, toLowerCase y el operador +).

var phrase = 'mis dos perros';
var phrase2 = (phrase.substring(0,1)).toUpperCase() + (phrase.substring(1,14)).toLowerCase();

console.log('Exercise 2.d');
console.log(phrase2);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
//Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var phrase = 'mis dos perros';
var phrase2 = phrase.indexOf(' ');

console.log('Exercise 2.e');
console.log(phrase2);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
//Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de 
//ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, 
//toLowerCase y el operador +).

var phrase = 'hello world';
var spacePos = phrase.indexOf(' ');
var phrase2= (phrase.substring(0,1)).toUpperCase() + 
(phrase.substring(1, spacePos)).toLowerCase() + ' ' + 
(phrase.substring((spacePos + 1), (spacePos + 2))).toUpperCase() + 
(phrase.substring(spacePos + 2)).toLowerCase(); 

console.log('Exercise 2.f');
console.log(phrase2);

console.log('----------------------------------------');