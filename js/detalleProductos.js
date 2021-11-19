function cambiarImagenAContratapa() {
    var fotoPrincipal = document.getElementById("foto-principal");
    fotoPrincipal.src = "./assets/img/beat_revolver2.jpg";
}

function cambiarImagenATapa() {
    var fotoPrincipal = document.getElementById("foto-principal");
    fotoPrincipal.src = "./assets/img/Revolver.jpg";
}
let cantidadEstrellas = 0;
let emailCorrecto = 0;

function crearComentario() {
    let comentario = document.getElementById("textAreaComentario").value;
    let email = document.getElementById("emailComentario").value;
    let nombre = document.getElementById("nombreComentario");
    chequearMail(email);
    if (!nombre.checkValidity()) {
        alert('El campo no es válido.');
    } else {
        alert('El campo es válido.');
    }
    console.log(comentario);
    console.log(email);
    console.log(nombre);
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
    myPText.textContent = comentario + cantidadEstrellas;
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
        emailCorrecto = 1;
    }
}