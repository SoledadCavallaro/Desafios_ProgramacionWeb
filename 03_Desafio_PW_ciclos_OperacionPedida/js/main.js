/* Crear una programa que devuelva la operación pedida
El programa debe:

Pedir la operación a realizar.
Pedir el primer parámetro y pedir el segundo, en caso de haber elegido división y cero volver a pedir el segundo parámetro hasta que ingrese un numero distinto de cero. */


/* CALCULADORA */

// Pido la opración a realizar
var operation = prompt('Ingrese la operación a realizar, sum, res, mul o div')

// Pido el primer número
var number1 = parseInt(prompt('Ingerese el primer número'));

// Pido el segundo número al menos una vez, si la operación es división
// e ingreso cero lo pido de nuevo
var number2;

do {
  number2 = parseInt(prompt('Ingerese el segundo número'));
} while (operation === 'div' && number2 === 0)

// Creo una variable para guardar el resultado
var result;

// Comparo la operación elegida por el usuario para calcular el resultado
switch (operation) {
  case 'sum':
    result = number1 + number2
    break
  case 'res':
    result = number1 - number2
    break
  case 'mul':
    result = number1 * number2
    break
  case 'div':
    result = number1 / number2
    break
  default:
    result = 'Operación incorrecta'
    break
}

// Creo una variable donde voy a guardar el mensaje
// que muestro como resultado de la operación
var message = 'El resultado de la ' + operation + ' es: ' + result

// Muestro el mensaje en consola
console.log(message)