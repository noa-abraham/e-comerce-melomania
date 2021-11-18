function cambiarImagenAContratapa() {
    var fotoPrincipal = document.getElementById("foto-principal");
    fotoPrincipal.src = "./assets/img/beat_revolver2.jpg";
}

function cambiarImagenATapa() {
    var fotoPrincipal = document.getElementById("foto-principal");
    fotoPrincipal.src = "./assets/img/Revolver.jpg";
}

function crearComentario() {
    let comentario = document.getElementById("textAreaComentario").value
    let email = document.getElementById("emailComentario").value
    let nombre = document.getElementById("nombreComentario").value
    console.log(comentario)
    console.log(email)
    console.log(nombre)
    const divisionComment = document.querySelector('.conteiner-comentarios')
}