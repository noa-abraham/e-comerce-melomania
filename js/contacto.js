let testValue = '';

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
    if (telefono.value === "") {
        telefonoCorrecto = false;
    } else {
        telefonoCorrecto = true;
    }
    if (emailCorrecto && nombreCorrecto && comentarioConContenido && telefonoCorrecto) {
        alert("¿Está seguro que quiere enviar el formulario?")
        mostrarDatos();
    } else {
        mostrarError();
    }
}

function mostrarError() {
    let error = "Error al enviar comentario:";
    if (nombreCorrecto == false) {
        error += " \n- El campo Nombre y Apellido no puede estar vacio"
    }
    if (emailCorrecto == false) {
        error += " \n- El email es inválido"
    }
    if (telefonoCorrecto == false) {
        error += " \n- No se ingresó ningún teléfono"
    }
    if (comentarioConContenido == false) {
        error += " \n- El campo del comentario no puede estar vacio"
    }
    alert(error);
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

function mostrarDatos(dato) {
    let element = document.createElement("div");
    let text = document.createTextNode(dato);
    element.appendChild(text);
    document.getElementById("body_page").appendChild(element);
}