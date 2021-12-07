var urlEnString = window.location.href;
var urlDireccion = new URL(urlEnString);
var productId = urlDireccion.searchParams.get("prodId");


'use strict'
const url = '../Servicios/discos.json';
const request = new XMLHttpRequest();
request.open('GET', url); // setean el método, la url de api
request.responseType = 'json'; //definen el tipo de dato que les devuelve
request.send(); //envían la solicitud


var discos = '';
request.onload = function() {
    discos = request.response; //le asigno la respuesta a una variable global
    buscarElDisco();
}

function buscarElDisco() {
    let productos = discos.catalogo;
    productos.forEach(element => {

        if (element.id == productId) {
            setDataDisc(element);
        }

    });
}

function setDataDisc(discinfo) {
    let titulo = document.getElementById("disc-name");
    let banda = document.getElementById("band");
    let foto = document.getElementById("foto-principal");
    let tapa = document.getElementById("boton-tapa");
    let contratapa = document.getElementById("boton-contratapa");
    let formato = document.getElementById("formato");
    let precio = document.getElementById("precio");
    let genero = document.getElementById("genero");
    let origen = document.getElementById("origen");
    let autor = document.getElementById("author");
    let descripcion = document.getElementById("descripciondisco");
    let codigo = document.getElementById("codigo");
    let presentacion = document.getElementById("formato-presentacion");
    imprimirCanciones(discinfo.canciones);
    banda.innerHTML = discinfo.artista;
    titulo.innerHTML = discinfo.titulo;
    banda.innerHTML = discinfo.artista;
    foto.src = discinfo.tapa;
    tapa.src = discinfo.tapa;
    contratapa.src = discinfo.contratapa;
    formato.innerHTML = discinfo.formato;
    precio.innerHTML = discinfo.precio;
    genero.innerHTML = discinfo.genero;
    origen.innerHTML = discinfo.origen;
    autor.innerHTML = discinfo.artista;
    descripcion.innerHTML = discinfo.descripcion;
    codigo.innerHTML = discinfo.id;
    presentacion.innerHTML = discinfo.presentacion;
}

function imprimirCanciones(canciones) {

    let elementList = '<ol>';
    canciones.forEach(element => {
        elementList += '<li>' + element + '</li>';
    });
    elementList += '</ol>'
    $('#songs').append(elementList);
}