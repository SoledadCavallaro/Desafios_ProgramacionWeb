$(document).ready(function () {

    //validacion Nombre: debe tener contenido

    var nombreIngresado = $('#inputName');
    var nameError = $('#nameError');

    nombreIngresado.blur(validar);

    function validar() {
        var input = $(this);

        if (
            !input.val()
        ) {
            input.removeClass('is-valid')
            input.addClass('is-invalid')
            nameError.text('Por favor ingrese Nombre, es un campo obligatorio.')
            $('#myAlert').hide('fade');
        } else {
            input.removeClass('is-invalid')
            input.addClass('is-valid')
            nameError.text('')
            $('#myAlert').hide('fade');
        }
    }

    // validacion Mail:

    var emailIngresado = $('#inputEmail');
    var emailError = $('#emailError');
    
    emailIngresado.blur(validarEmail);

    function validarEmail() {
        var input = $(this);

        if (
            !input.val() ||
            input.val().indexOf('@') === -1 ||
            input.val().indexOf('.') === -1
        ) {
            input.removeClass('is-valid')
            input.addClass('is-invalid')
            emailError.text('El e-mail que ha ingresado no es válido')
            $('#myAlert').hide('fade');

        } else {
            input.removeClass('is-invalid')
            input.addClass('is-valid')
            emailError.text('')
            $('#myAlert').hide('fade');

        }
    }

// Enviado luego de validar:

 
var enviarButton = $('#sendButton');

enviarButton.click(enviarOk);

function enviarOk(){
    var inputs = $('.is-valid')

    if (inputs.length === 2){
    nombreIngresado.val('Nombre');
    emailIngresado.val('E-mail');
    $('#myAlert').show('fade');
    }
    console.log(inputs);
};

$('#linkClose').click(function(){
    $('#myAlert').hide('fade');
});
 
});

//version anterior:

/* 
var enviarButton = $('#sendButton');
//var nombreIngresado = $('#inputName');
//var emailIngresado = $('#inputEmail');
var enviadoOk = $('#enviadoOk');

enviarButton.click(enviarOk);

function enviarOk(){
    var inputs = $('.is-valid')

    if (inputs.length === 2){
    nombreIngresado.val('Nombre');
    emailIngresado.val('E-mail');
    //nombreIngresado.attr('placeholder','Nombre');
    //emailIngresado.attr('placeholder','E-mail');
    enviadoOk.text('Gracias! Su datos han sido enviados');
    }
    console.log(inputs);
};

 */

// JS:

/* 
var enviarButton2 = document.getElementById('sendButton');
var enviadoOk2 = document.getElementById('enviadoOk');
var nombreIngresado2 = document.getElementById('inputName');
var emailIngresado2 = document.getElementById('inputEmail');


enviarButton2.onclick = enviarOk2;

function enviarOk2(){

    var inputs2 = document.getElementsByClassName('is-valid')

    if(inputs2.length === 2){
        nombreIngresado2.placeholder = 'Nombre';
        emailIngresado2.placeholder = 'E-mail';
        enviadoOk2.textContent ='Gracias! Su datos han sido enviados';

    }
    console.log(inputs2);

}
 */

