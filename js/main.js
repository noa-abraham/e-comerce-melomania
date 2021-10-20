let testValue = '';

function mostrarDatos(dato) {
    let element = document.createElement("div");
    let text = document.createTextNode(dato);
    element.appendChild(text);
    document.getElementById("body_page").appendChild(element);
}

function mostrarMensaje() {
    let email = document.getElementById("email");
    let textarea = document.getElementById("info");
    let estado = true;

    if (email.value == '') {
        alert("Debe completar el Email antes de continuar")
        estado = false;

    } else if (textarea.value == '') {
        alert("Debe completar el Comentario antes de continuar")
        estado = false;
    }
    if (estado == true) {
        alert("¿Está segurx que quiere enviar el formulario?")
    }
}