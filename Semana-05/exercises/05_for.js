console.log('05: FOR');
window.alert('05: FOR');
console.log('----------------------------------------');

// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript 
//para mostrar una alerta utilizando cada una de las palabras.
let words = ['perro', 'gato', 'oso', 'pato', 'tigre'];
window.alert('Exercise 5.a');
for (var i = 0; i < words.length; i++ ) {
    window.alert(words[i]);
}

// b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta 
//por cada palabra modificada.
window.alert('Exercise 5.b');
for (var i = 0; i < words.length; i++ ) {
    words.push(words[0].substring(0,1).toUpperCase() + (words[0].substring(1,6)).toLowerCase());
    words.shift();
    window.alert(words[4]);
}

// c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) 
//recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. 
//Al final mostrar una única alerta con la cadena completa.
var sentence = '';
for (var i = 0; i < words.length; i++ ) {
    if (i == 0)
    sentence = words[i]
    else
    sentence = sentence + ' ' + words[i]
}
window.alert('Exercise 5.c');
window.alert(sentence);

// d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
//es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, 
//desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
let numbers = [];
for (var i = 0; i < 10; i++ ) {
    numbers.push(i);
}

console.log('Exercise 5.d');
console.log(numbers);

console.log('----------------------------------------');