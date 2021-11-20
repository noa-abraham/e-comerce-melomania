function cambiarImagen(fuenteDeImagen) {
    var fotoPrincipal = document.getElementById("foto-principal");
    fotoPrincipal.src = fuenteDeImagen.src;
}


let cantidadEstrellas = 0;
let emailCorrecto = false;
let nombreCorrecto = false;
let comentarioConContenido = false;
let comentario = document.getElementById("textAreaComentario");
let email = document.getElementById("emailComentario");
let nombre = document.getElementById("nombreComentario");

function chequearDatosComentario() {
    chequearMail(email.value);
    if (nombre.checkValidity()) {
        nombreCorrecto = true;
    }
    if (comentario.value === "") {
        comentarioConContenido = false;
    } else {
        comentarioConContenido = true;
    }
    console.log("email correcto: " + emailCorrecto);
    console.log("nombre correcto: " + nombreCorrecto);
    console.log("comentario con conrenido: " + comentarioConContenido);
    console.log("cantidad de estrellas: " + cantidadEstrellas);
    if (cantidadEstrellas > 0 && emailCorrecto && nombreCorrecto && comentarioConContenido) {
        crearComentario();
    } else {
        mostrarError();
    }
}

function mostrarError() {
    let error = "Error al enviar comentario:";
    if (nombreCorrecto == false) {
        error += " \n El nombre es invalido"
    }
    if (emailCorrecto == false) {
        error += " \n El email es invalido"
    }
    if (comentarioConContenido == false) {
        error += " \n El comentario no puede estar vacio"
    }
    if (cantidadEstrellas == 0) {
        error += " \n No se tildo ninguna estrella"
    }
    alert(error);
}



function crearComentario() {
    const divisionComment = document.querySelector('.conteiner-comentarios');
    let myDivComment = document.createElement('div');
    myDivComment.classList.add("card", "col-md-5", "conteiner-lg", "valoraciones-realizadas");
    let myDivCommentTittle = document.createElement('div');
    myDivCommentTittle.classList.add("card-header", "titulo-comentario");
    let myH6Autor = document.createElement('h6');
    myH6Autor.classList.add("autor-del-comentario");
    myH6Autor.textContent = nombre.value;
    myDivCommentTittle.appendChild(myH6Autor);
    let myDivStar = document.createElement('div');
    myDivStar.classList.add("valoracion");
    for (z = 0; z < cantidadEstrellas; z++) {
        let iconosEstrellas = document.createElement('i');
        iconosEstrellas.classList.add("bi", "bi-star");
        myDivStar.appendChild(iconosEstrellas);
    }

    myDivCommentTittle.appendChild(myDivStar);
    myDivComment.appendChild(myDivCommentTittle);
    let myDivCommentText = document.createElement('div');
    myDivCommentText.classList.add("card-body");
    let myPText = document.createElement('p');
    myPText.classList.add("card-text");
    myPText.textContent = comentario.value + cantidadEstrellas;
    myDivCommentText.appendChild(myPText);
    myDivComment.appendChild(myDivCommentText);
    divisionComment.appendChild(myDivComment);
}

function estrellas(element) {
    cantidadEstrellas = element.id;
}

function chequearMail(string) {
    let posicionDelArroba = string.indexOf("@");
    let posicionDelPunto = string.lastIndexOf(".");
    if (posicionDelPunto > posicionDelArroba) {
        emailCorrecto = true;
    }
}