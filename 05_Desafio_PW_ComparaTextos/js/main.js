/* Crear una función que compare dos textos y encuentre coincidencias parciales [Pieza del Workshop I]
Crear una función que reciba como parámetros dos string y devuelva true en caso de encontrar una coincidencia parcial y false en caso contrario, la función no tiene que distinguir mayúsculas de minúsculas. El primer parámetro pasado a la función es el que se va a tratar de encontrarse dentro del segundo, si alguno de los parámetros no es un string también deberá devolver false.
includesText('Pa', 'Patricia') // Deberá devolver true

includesText('Patricia', 'Pa') // Deberá devolver false

includesText(2, 'Pa') // Deberá devolver false
Hint: Se deberán pasar los parámetros recibidos a mayúsculas y luego hacer la comparación mediante indexOf para poder encontrar coincidencias parciales sin importar mayúsculas y minúsculas.
 */


function includesText(texto1, texto2) {
    if (typeof texto1 === 'string' && typeof texto2 === 'string') {
        /*  var texto1 = texto1.toUpperCase();
            var texto2 = texto2.toUpperCase();
         */
        if (texto2.toUpperCase().indexOf(texto1.toUpperCase()) === -1) {
            return false;
        } else {
            return true;
        }
    }
}
console.log(includesText('Pa', 'patricia'));