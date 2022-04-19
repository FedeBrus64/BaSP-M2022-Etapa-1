// a. Crear dos variables numéricas y utilizar el operador suma para guardar 
// el valor de la suma de ambos números en una 3er variable.
var number1 = 4;
var number2 = 8;
var resul = number1 + number2;

console.log('Resultado: ', resul);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
var str1 = 'mis';
var str2 = 'perros';
var str3 = str1.concat(' ',str2);

console.log(str3);

// c. Crear dos variables de tipo String y sumar el largo de cada variable 
// (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
var str1 = 'mis';
var str2 = 'perros';
var largo = str1.length + str2.length;

console.log("Cantidad total de letras: ", largo);