window.alert('04: IF ELSE');

// a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual 
//que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.

var number = Math.random();
window.alert('Exercise 4.a');
if (number >= 0.5)
window.alert('Greater that 0.5');
else
window.alert('Lower than 0.5');

// b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes 
//mensajes de alerta:
// i.	“Bebe” si la edad es menor a 2 años;
// ii.	“Niño” si la edad es entre 2 y 12 años;
// iii.	“Adolescente” entre 13 y 19 años;
// iv.	“Joven” entre 20 y 30 años;
// v.	“Adulto” entre 31 y 60 años;
// vi.	“Adulto mayor” entre 61 y 75 años;
// vii.	“Anciano” si es mayor a 75 años.

var Age = Math.floor(Math.random() * 101);
window.alert('Exercise 4.b');
if (Age < 2)
window.alert('Bebe');
else if(Age >=2 && Age <= 12)
window.alert('Niño');
else if(Age >=13 && Age <= 19)
window.alert('Adolescente');
else if(Age >=20 && Age <= 30)
window.alert('Joven');
else if(Age >=31 && Age <= 60)
window.alert('Adulto');
else if(Age >=61 && Age <= 75)
window.alert('Adulto Mayor');
else if(Age > 75)
window.alert('Anciano');