//DESAFIO
/* 
Validar el campo email usando jQuery
El formulario deberá validar el campo email verificando que contenga arroba, punto y contenido. Si existe algún error deberá mostrar el campo en rojo

Si usamos Boostrap podemos mostrar que el campo es valido agregando la clase is-valid y mostrar que es invalido agregando la clase is-invalid.
 */

//VERSION JQUERY:

// validacion Mail:

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

//validacion Nombre y Apellido: deben tener contenido

var nombreIngresado = $('#firstName');
var apellidoIngresado = $('#lastName');

nombreIngresado.blur(validar);
apellidoIngresado.blur(validar);

function validar(){
 var input = $(this);

 if (
    !input.val()
) {
    input.removeClass('is-valid')
    input.addClass('is-invalid')
} else {
    input.removeClass('is-invalid')
    input.addClass('is-valid')
}
}

 
 //NOTA CSS :

// var body = $('body')


 /* 
 //VERSION JS:

 // Busco el email ingresado por ID:

var emailIngresado = document.getElementById('email')

// Agrego la función en el evento blur, es decir cuando salgo del campo email (.onblur), activa la funcion validarEmail:

emailIngresado.onblur = validarEmail

function validarEmail(event) {
    var inputNode = event.target;

    if (
        !inputNode.value ||
        inputNode.value.indexOf('@') === -1 ||
        inputNode.value.indexOf('.') === -1
    ) {
        inputNode.classList.remove('is-valid')
        inputNode.classList.add('is-invalid')
    } else {
        inputNode.classList.remove('is-invalid')
        inputNode.classList.add('is-valid')
    }

}


 */