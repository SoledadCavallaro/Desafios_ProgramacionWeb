//DESAFIO
/* 
Validar el campo email usando jQuery
El formulario deberá validar el campo email verificando que contenga arroba, punto y contenido. Si existe algún error deberá mostrar el campo en rojo

Si usamos Boostrap podemos mostrar que el campo es valido agregando la clase is-valid y mostrar que es invalido agregando la clase is-invalid.
 */

//VERSION JQUERY:

var emailIngresado = $('#email');

emailIngresado.blur(validarEmail);

function validarEmail(){
 var input = $(this);

 if (
    !input.val() ||
    input.val().indexOf('@') === -1 ||
    input.val().indexOf('.') === -1
) {
    input.removeClass('is-valid')
    input.addClass('is-invalid')
} else {
    input.removeClass('is-invalid')
    input.addClass('is-valid')
}
}