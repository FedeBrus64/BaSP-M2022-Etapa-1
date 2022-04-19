console.log('06: FUNCTIONS');
console.log('----------------------------------------');

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y 
//guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function add(value1, value2) {
    return value1 + value2;
}

console.log('Exercise 6.a');
console.log(add(4, 8));

// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un 
//número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

function add(value1, value2){
    if (isNaN(value1) || isNaN(value2)){
        window.alert('One of the characters submitted is not a number');
        return Number.NaN;
    } 
    else return value1 + value2;
}

console.log('Exercise 6.b');
console.log(add(4, 8));

// c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número 
//entero.

function validateInteger(num){
    return Number.isInteger(num);
}

console.log('Exercise 6.c');
console.log(validateInteger(6));

// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
//En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

function add(value1, value2){
    if (isNaN(value1) || isNaN(value2)){
        window.alert('One of the characters submitted is not a number');
        return Number.NaN;} 

    else if (validateInteger(value1) == false){
        if (validateInteger(value2) == false){
        window.alert('Both values are not integer and have been rounded');
        return Math.round(value1) + Math.round(value2);}

        else{
        window.alert('The first value is not an integer and has been rounded');
        return Math.round(value1) + value2;}}

    else if (validateInteger(value2) == false){
        window.alert('The second value is not an integer and has been rounded');
        return value1 + Math.round(value2);}

    else return value1 + value2;
}

console.log('Exercise 6.d');
console.log(add(4, 8));

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma 
//probando que todo siga funcionando igual.

function validateIntegers (value1, value2){
    if (validateInteger(value1) == false){
        if (validateInteger(value2) == false){
        window.alert('Both values are not integer and have been rounded');
        return Math.round(value1) + Math.round(value2);}

        else{
        window.alert('The first value is not an integer and has been rounded');
        return Math.round(value1) + value2;}}

    else if (validateInteger(value2) == false){
        window.alert('The second value is not an integer and has been rounded');
        return value1 + Math.round(value2);}

    else return value1 + value2;
}

function add(value1, value2){
    if (isNaN(value1) || isNaN(value2)){
        window.alert('One of the characters submitted is not a number');
        return Number.NaN;
    } 
    else return validateIntegers(value1, value2);
}

console.log('Exercise 6.e');
console.log(add(4, 9.6));

console.log('----------------------------------------');