/* Crear un programa que muestre un mensaje personalizado
Pedir al usuario mediante prompt que ingrese su género y luego su edad. Luego mostrar un mensaje en consola que diga Sr., Sra. o Sx.según corresponda y que también evalue si es mayor de edad o no al momento de construir el mensaje.
*/


var genero = prompt('Cuál es su genero, f o m ?');
var age = prompt('Cuál es su edad?');

if (genero == 'f' && age>=18){
    console.log('Hola Sra. usted es mayor de edad.')
} else if (genero == 'f' && age<18){
    console.log('Hola Sra. usted es menor de edad.')
} else if (genero == 'm' && age<18){
    console.log('Hola Sr. usted es menor de edad.')
} else if (genero == 'm' && age>=18){
    console.log('Hola Sr. usted es mayor de edad.')
} else {
    console.log('Datos ingresados incorrectos')
}

