'use strict'
const url = 'discos.json';
const request = new XMLHttpRequest();
request.open('GET', url); // setean el método, la url de api
request.responseType = 'json'; //definen el tipo de dato que les devuelve
request.send(); //envían la solicitud


var discos = '';
request.onload = function() {
    console.log(request.response);
    discos = request.response; //le asigno la respuesta a una variable global
    setTablaDestacados(); //para que aparezca determinada info de los destacados en las cards del home. 
    setCatalogo();
}

function setTablaDestacados() {
    let productos = discos.productos;
    productos.forEach(element => {

        
           let elementCard = '<div class="card  tarjeta-Listados" style="width: 15rem;">';
           elementCard += '<a href="detalleProductos.html">';
           elementCard += '<img src="'+element.tapa+'" class="card-img-top" alt="...">';
           elementCard += '<div class="card-body">';
           elementCard += '<h5 class="card-text">' + element.titulo + ' </h5>';
           elementCard += '<h4 class="card-title">'+ element.artista +'</h4>'; 
           elementCard += '<p>'+element.precio+'</p>';
           elementCard += '</div></a></div>';



        let gallery = document.getElementById('Destacados');
        $('#Destacados').append(elementCard);

        console.log(element);
    });
}



function setCatalogo(){
    let catalogo = discos.catalogo;
    catalogo.forEach(element => {
        
           let elementCatalogo = '<div class="card  tarjeta-Listados" style="width: 15rem;">';
           elementCatalogo += '<a href="detalleProductos.html">';
           elementCatalogo += '<img src="'+element.tapa+'" class="card-img-top" alt="...">';
           elementCatalogo += '<div class="card-body">';
           elementCatalogo += '<h5 class="card-text">' + element.titulo + ' </h5>';
           elementCatalogo += '<h4 class="card-title">'+ element.artista +'</h4>'; 
           elementCatalogo += '<p>'+element.precio+'</p>';
           elementCatalogo += '</div></a></div>';
        let gallery = document.getElementById('catalogo');
        $('#catalogo').append(elementCatalogo);

        console.log(element);
    });
}