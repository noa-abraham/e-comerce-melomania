let nombreCorrecto = false;
let telefonoCorrecto = false;
let emailCorrecto = false;
let comentarioConContenido = false;
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let comentario = document.getElementById("comentario");


function chequearDatosComentario() {
    chequearMail(email.value);

    if (nombre.value === "") {
        nombreCorrecto = false;
    } else {
        nombreCorrecto = true;
    }
    if (comentario.value === "") {
        comentarioConContenido = false;
    } else {
        comentarioConContenido = true;
    }
    if (telefono.checkValidity()) {
        telefonoCorrecto = false;
    } else {
        telefonoCorrecto = true;
    }
    if (emailCorrecto && nombreCorrecto && comentarioConContenido && telefonoCorrecto) {
        mostrarModal("Confirmar envío", "¿Está seguro que quiere enviar el formulario?");
        agregarDatosAlModal();

    } else {
        mostrarError();
    }
}

function mostrarError() {

    if (nombreCorrecto == false) {
        mostrarModal("Error al enviar comentario", "El campo Nombre y Apellido no puede estar vacio")

    }
    if (emailCorrecto == false) {
        mostrarModal("Error al enviar comentario", "El email es inválido")

    }
    if (telefonoCorrecto == false) {
        mostrarModal("Error al enviar comentario", "No se ingresó ningún teléfono")


    }
    if (comentarioConContenido == false) {
        mostrarModal("Error al enviar comentario", "El campo del comentario no puede estar vacio")

    }

}

function chequearMail(string) {
    let posicionDelPrimerArroba = string.indexOf("@");
    let posicionDelUltimoArroba = string.lastIndexOf("@");
    let posicionDelPunto = string.lastIndexOf(".");
    if (posicionDelPrimerArroba == posicionDelUltimoArroba) {
        if (posicionDelPunto > posicionDelPrimerArroba) {
            emailCorrecto = true;
        }
    }
}


function mostrarModal(titulo, descripcion) {
    let elementoTitulo = document.getElementById('staticBackdropLabel');
    let elementoContenido = document.getElementById('textModal');

    elementoTitulo.innerHTML = titulo;
    elementoContenido.innerHTML = descripcion;


    var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
        keyboard: false
    });
    myModal.show();
}

function agregarDatosAlModal() {
    let listaDeDatos = '<ul>';
    listaDeDatos += '<li>Nombre: ' + nombre.value + '</li>';
    listaDeDatos += '<li>Email: ' + email.value + '</li>';
    listaDeDatos += '<li>Teléfono:' + telefono.value + '</li>';
    listaDeDatos += '<li>Comentario: ' + comentario.value + '</li>';
    listaDeDatos += '</ol>';
    $('#textModal').append(listaDeDatos);
}