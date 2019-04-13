/* Crear una función que valide que un campo contenga un email valido cuando el usuario pierde el foco
La función tiene que validar el campo en el cual se dispara el evento y verificar que el valor del mismo sea un email valido (exista, tenga arroba y punto). En caso de que haya un error tiene que agregar una clase para mostrar el input en rojo, en caso contrario una clase para que se muestre en verde. */


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