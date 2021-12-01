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
    setCategoriaSetBox();
    setCategoriaPunkyHardcore();
    setCategoriaBandaSonora();
    setCategoriaBlues();
    setCategoriaFunkySoul();
    setCategoriaJazz();
    setCategoriaMetal();
    setCategoriaMusicWorld();
    setCategoriaRapyHipHop();
    setCategoriaReggaeySka();
    setCategoriaRockyPop();
    setCategoriaRockNacional();
    setCategoriaTango();
}



function setCatalogo() {
    let catalogo = discos.catalogo;
    catalogo.forEach(element => {

        let elementCatalogo = '<div class="card  tarjeta-Listados" style="width: 15rem; border:2px solid #21d192;">';
        elementCatalogo += '<a href="detalleProductos.html?prodId=' + element.id + '">';
        elementCatalogo += '<img src="' + element.tapa + '" class="card-img-top" alt="...">';
        elementCatalogo += '<div class="card-body">';
        elementCatalogo += '<h5 class="card-text">' + element.titulo + ' </h5>';
        elementCatalogo += '<h4 class="card-title">' + element.artista + '</h4>';
        elementCatalogo += '<p>' + element.precio + '</p>';
        elementCatalogo += '</div></a></div>';
        let gallery = document.getElementById('catalogo');
        $('#catalogo').append(elementCatalogo);

        console.log(element);
    });
}


function mostrarCatalogo() {
    var x = document.getElementById("Catalogo");

    if (x.style.display != "none") {
        x.style.display = "none";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBlues();
        ocultarBandaSonora();
        ocultarFunkySoul();
        ocultarPunkyHardcore();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
    } else {
        x.style.display = "block";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBlues();
        ocultarPunkyHardcore();
        ocultarBandaSonora();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
    }
}



function setTablaDestacados() {
    let productos = discos.productos;
    productos.forEach(element => {


        let elementCard = '<div class="card  tarjeta-Listados" style="width: 15rem;  border:5px solid gold;">';
        elementCard += '<a href="detalleProductos.html?prodId=' + element.id + '">';
        elementCard += '<img src="' + element.tapa + '" class="card-img-top" alt="...">';
        elementCard += '<div class="card-body">';
        elementCard += '<h5 class="card-text">' + element.titulo + ' </h5>';
        elementCard += '<h4 class="card-title">' + element.artista + '</h4>';
        elementCard += '<p>' + element.precio + '</p>';
        elementCard += '</div></a></div>';



        let gallery = document.getElementById('Destacados');
        $('#Destacados').append(elementCard);

        console.log(element);
    });
}


function ocultarDestacados() {
    var DestacadosNone = document.getElementById("mostrarOcultarDestacados");
    DestacadosNone.style.display = "none";

}
ocultarDestacados();

function mostrarDestacados() {
    var x = document.getElementById("mostrarOcultarDestacados");

    if (x.style.display != "none") {
        x.style.display = "none";
        ocultarSetBox();
        ocultarBlues();
        ocultarBandaSonora();
        ocultarFunkySoul();
        ocultarPunkyHardcore();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
    } else {
        x.style.display = "block";
        ocultarSetBox();
        ocultarBlues();
        ocultarPunkyHardcore();
        ocultarBandaSonora();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
    }
}



function ocultarBandaSonora() {
    var BandaSonoraNone = document.getElementById("mostrarOcultarBandaSonora");
    BandaSonoraNone.style.display = "none";

}
ocultarBandaSonora();

function setCategoriaBandaSonora() {
    let productos = discos.catalogo;
    productos.forEach(element => {

        if (element.genero == "BANDA SONORA") {

            let elementCard = '<div class="card  tarjeta-Listados" style="width: 15rem;  border:5px solid gold;">';
            elementCard += '<a href="detalleProductos.html?prodId=' + element.id + '">';
            elementCard += '<img src="' + element.tapa + '" class="card-img-top" alt="...">';
            elementCard += '<div class="card-body">';
            elementCard += '<h5 class="card-text">' + element.titulo + ' </h5>';
            elementCard += '<h4 class="card-title">' + element.artista + '</h4>';
            elementCard += '<p>' + element.precio + '</p>';
            elementCard += '</div></a></div>';

            let gallery = document.getElementById('BandaSonora');
            $('#BandaSonora').append(elementCard);
        }
        console.log(element);
    });
}

function mostrarBandaSonora() {
    var x = document.getElementById("mostrarOcultarBandaSonora");
    if (x.style.display != "none") {
        x.style.display = "none";
        ocultarDestacados();
        ocultarSetBox();
        ocultarPunkyHardcore();
        ocultarBlues();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
    } else {
        x.style.display = "block";
        ocultarDestacados();
        ocultarSetBox();
        ocultarPunkyHardcore();
        ocultarBlues();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
    }
}



function ocultarBlues() {
    var BluesNone = document.getElementById("mostrarOcultarBlues");
    BluesNone.style.display = "none";

}
ocultarBlues();

function setCategoriaBlues() {
    let productos = discos.catalogo;
    productos.forEach(element => {

        if (element.genero == "BLUES") {

            let elementCard = '<div class="card  tarjeta-Listados" style="width: 15rem;  border:5px solid gold;">';
            elementCard += '<a href="detalleProductos.html?prodId=' + element.id + '">';
            elementCard += '<img src="' + element.tapa + '" class="card-img-top" alt="...">';
            elementCard += '<div class="card-body">';
            elementCard += '<h5 class="card-text">' + element.titulo + ' </h5>';
            elementCard += '<h4 class="card-title">' + element.artista + '</h4>';
            elementCard += '<p>' + element.precio + '</p>';
            elementCard += '</div></a></div>';

            let gallery = document.getElementById('Blues');
            $('#Blues').append(elementCard);
        }
        console.log(element);
    });
}

function mostrarBlues() {
    var x = document.getElementById("mostrarOcultarBlues");
    if (x.style.display != "none") {
        x.style.display = "none";
        ocultarDestacados();
        ocultarSetBox();
        ocultarPunkyHardcore();
        ocultarBandaSonora();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
        ocultarFunkySoul();
    } else {
        x.style.display = "block";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBandaSonora();
        ocultarPunkyHardcore();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
        ocultarFunkySoul();
    }
}


function ocultarFunkySoul() {
    var FunkySoulNone = document.getElementById("mostrarOcultarFunkySoul");
    FunkySoulNone.style.display = "none";

}
ocultarFunkySoul();

function setCategoriaFunkySoul() {
    let productos = discos.catalogo;
    productos.forEach(element => {

        if (element.genero == "Funk & Soul") {

            let elementCard = '<div class="card  tarjeta-Listados" style="width: 15rem;  border:5px solid gold;">';
            elementCard += '<a href="detalleProductos.html?prodId=' + element.id + '">';
            elementCard += '<img src="' + element.tapa + '" class="card-img-top" alt="...">';
            elementCard += '<div class="card-body">';
            elementCard += '<h5 class="card-text">' + element.titulo + ' </h5>';
            elementCard += '<h4 class="card-title">' + element.artista + '</h4>';
            elementCard += '<p>' + element.precio + '</p>';
            elementCard += '</div></a></div>';

            let gallery = document.getElementById('FunkySoul');
            $('#FunkySoul').append(elementCard);
        }
        console.log(element);
    });
}

function mostrarFunkySoul() {
    var x = document.getElementById("mostrarOcultarFunkySoul");
    if (x.style.display != "none") {
        x.style.display = "none";
        ocultarDestacados();
        ocultarSetBox();
        ocultarPunkyHardcore();
        ocultarBandaSonora();
        ocultarBlues();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
    } else {
        x.style.display = "block";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBandaSonora();
        ocultarBlues();
        ocultarPunkyHardcore();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
    }
}


function ocultarJazz() {
    var JazzNone = document.getElementById("mostrarOcultarJazz");
    JazzNone.style.display = "none";

}
ocultarJazz();

function setCategoriaJazz() {
    let productos = discos.catalogo;
    productos.forEach(element => {

        if (element.genero == "JAZZ") {

            let elementCard = '<div class="card  tarjeta-Listados" style="width: 15rem;  border:5px solid gold;">';
            elementCard += '<a href="detalleProductos.html?prodId=' + element.id + '">';
            elementCard += '<img src="' + element.tapa + '" class="card-img-top" alt="...">';
            elementCard += '<div class="card-body">';
            elementCard += '<h5 class="card-text">' + element.titulo + ' </h5>';
            elementCard += '<h4 class="card-title">' + element.artista + '</h4>';
            elementCard += '<p>' + element.precio + '</p>';
            elementCard += '</div></a></div>';

            let gallery = document.getElementById('Jazz');
            $('#Jazz').append(elementCard);
        }
        console.log(element);
    });
}

function mostrarJazz() {
    var x = document.getElementById("mostrarOcultarJazz");
    if (x.style.display != "none") {
        x.style.display = "none";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBlues();
        ocultarFunkySoul();
        ocultarBandaSonora();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
        ocultarPunkyHardcore();
    } else {
        x.style.display = "block";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBlues();
        ocultarFunkySoul();
        ocultarBandaSonora();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
        ocultarPunkyHardcore();
    }
}



function ocultarMetal() {
    var MetalNone = document.getElementById("mostrarOcultarMetal");
    MetalNone.style.display = "none";

}
ocultarMetal();

function setCategoriaMetal() {
    let productos = discos.catalogo;
    productos.forEach(element => {

        if (element.genero == "ROCK/METAL") {

            let elementCard = '<div class="card  tarjeta-Listados" style="width: 15rem;  border:5px solid gold;">';
            elementCard += '<a href="detalleProductos.html?prodId=' + element.id + '">';
            elementCard += '<img src="' + element.tapa + '" class="card-img-top" alt="...">';
            elementCard += '<div class="card-body">';
            elementCard += '<h5 class="card-text">' + element.titulo + ' </h5>';
            elementCard += '<h4 class="card-title">' + element.artista + '</h4>';
            elementCard += '<p>' + element.precio + '</p>';
            elementCard += '</div></a></div>';

            let gallery = document.getElementById('Metal');
            $('#Metal').append(elementCard);
        }
        console.log(element);
    });
}

function mostrarMetal() {
    var x = document.getElementById("mostrarOcultarMetal");
    if (x.style.display != "none") {
        x.style.display = "none";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBlues();
        ocultarBandaSonora();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
        ocultarPunkyHardcore();
    } else {
        x.style.display = "block";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBlues();
        ocultarBandaSonora();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
        ocultarPunkyHardcore();
    }
}


function ocultarMusicWorld() {
    var MusicWorldNone = document.getElementById("mostrarOcultarMusicWorld");
    MusicWorldNone.style.display = "none";

}
ocultarMusicWorld();

function setCategoriaMusicWorld() {
    let productos = discos.catalogo;
    productos.forEach(element => {

        if (element.genero == "Music World") {

            let elementCard = '<div class="card  tarjeta-Listados" style="width: 15rem;  border:5px solid gold;">';
            elementCard += '<a href="detalleProductos.html?prodId=' + element.id + '">';
            elementCard += '<img src="' + element.tapa + '" class="card-img-top" alt="...">';
            elementCard += '<div class="card-body">';
            elementCard += '<h5 class="card-text">' + element.titulo + ' </h5>';
            elementCard += '<h4 class="card-title">' + element.artista + '</h4>';
            elementCard += '<p>' + element.precio + '</p>';
            elementCard += '</div></a></div>';

            let gallery = document.getElementById('MusicWorld');
            $('#MusicWorld').append(elementCard);
        }
        console.log(element);
    });
}

function mostrarMusicWorld() {
    var x = document.getElementById("mostrarOcultarMusicWorld");
    if (x.style.display != "none") {
        x.style.display = "none";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBlues();
        ocultarBandaSonora();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
        ocultarPunkyHardcore();
    } else {
        x.style.display = "block";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBlues();
        ocultarBandaSonora();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
        ocultarPunkyHardcore();
    }
}




function ocultarRapyHipHop() {
    var RapyHipHopNone = document.getElementById("mostrarOcultarRapyHipHop");
    RapyHipHopNone.style.display = "none";

}
ocultarRapyHipHop();

function setCategoriaRapyHipHop() {
    let productos = discos.catalogo;
    productos.forEach(element => {

        if (element.genero == "Rap & Hip-Hop") {

            let elementCard = '<div class="card  tarjeta-Listados" style="width: 15rem;  border:5px solid gold;">';
            elementCard += '<a href="detalleProductos.html?prodId=' + element.id + '">';
            elementCard += '<img src="' + element.tapa + '" class="card-img-top" alt="...">';
            elementCard += '<div class="card-body">';
            elementCard += '<h5 class="card-text">' + element.titulo + ' </h5>';
            elementCard += '<h4 class="card-title">' + element.artista + '</h4>';
            elementCard += '<p>' + element.precio + '</p>';
            elementCard += '</div></a></div>';

            let gallery = document.getElementById('RapyHipHop');
            $('#RapyHipHop').append(elementCard);
        }
        console.log(element);
    });
}

function mostrarRapyHipHop() {
    var x = document.getElementById("mostrarOcultarRapyHipHop");
    if (x.style.display != "none") {
        x.style.display = "none";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBlues();
        ocultarBandaSonora();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
        ocultarPunkyHardcore();
    } else {
        x.style.display = "block";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBlues();
        ocultarBandaSonora();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
        ocultarPunkyHardcore();
    }
}



function ocultarReggaeySka() {
    var ReggaeySkaNone = document.getElementById("mostrarOcultarReggaeySka");
    ReggaeySkaNone.style.display = "none";

}
ocultarReggaeySka();

function setCategoriaReggaeySka() {
    let productos = discos.catalogo;
    productos.forEach(element => {

        if (element.genero == "Reggae & Ska" || element.genero == "Reggae" || element.genero == "Ska") {

            let elementCard = '<div class="card  tarjeta-Listados" style="width: 15rem;  border:5px solid gold;">';
            elementCard += '<a href="detalleProductos.html?prodId=' + element.id + '">';
            elementCard += '<img src="' + element.tapa + '" class="card-img-top" alt="...">';
            elementCard += '<div class="card-body">';
            elementCard += '<h5 class="card-text">' + element.titulo + ' </h5>';
            elementCard += '<h4 class="card-title">' + element.artista + '</h4>';
            elementCard += '<p>' + element.precio + '</p>';
            elementCard += '</div></a></div>';

            let gallery = document.getElementById('ReggaeySka');
            $('#ReggaeySka').append(elementCard);
        }
        console.log(element);
    });
}

function mostrarReggaeySka() {
    var x = document.getElementById("mostrarOcultarReggaeySka");
    if (x.style.display != "none") {
        x.style.display = "none";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBlues();
        ocultarBandaSonora();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
        ocultarPunkyHardcore();
        ocultarRapyHipHop();
    } else {
        x.style.display = "block";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBlues();
        ocultarBandaSonora();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
        ocultarPunkyHardcore();
        ocultarRapyHipHop();
    }
}



function ocultarRockyPop() {
    var RockyPopNone = document.getElementById("mostrarOcultarRockyPop");
    RockyPopNone.style.display = "none";

}
ocultarRockyPop();

function setCategoriaRockyPop() {
    let productos = discos.catalogo;
    productos.forEach(element => {

        if (element.genero == "ROCK & POP") {

            let elementCard = '<div class="card  tarjeta-Listados" style="width: 15rem;  border:5px solid gold;">';
            elementCard += '<a href="detalleProductos.html?prodId=' + element.id + '">';
            elementCard += '<img src="' + element.tapa + '" class="card-img-top" alt="...">';
            elementCard += '<div class="card-body">';
            elementCard += '<h5 class="card-text">' + element.titulo + ' </h5>';
            elementCard += '<h4 class="card-title">' + element.artista + '</h4>';
            elementCard += '<p>' + element.precio + '</p>';
            elementCard += '</div></a></div>';

            let gallery = document.getElementById('RockyPop');
            $('#RockyPop').append(elementCard);
        }
        console.log(element);
    });
}

function mostrarRockyPop() {
    var x = document.getElementById("mostrarOcultarRockyPop");
    if (x.style.display != "none") {
        x.style.display = "none";
        ocultarDestacados();
        ocultarSetBox();
        ocultarPunkyHardcore();
        ocultarBlues();
        ocultarBandaSonora();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockNacional();
        ocultarTango();
    } else {
        x.style.display = "block";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBandaSonora();
        ocultarBlues();
        ocultarFunkySoul();
        ocultarPunkyHardcore();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockNacional();
        ocultarTango();

    }
}



function ocultarRockNacional() {
    var RockNacionalNone = document.getElementById("mostrarOcultarRockNacional");
    RockNacionalNone.style.display = "none";

}
ocultarRockNacional();

function setCategoriaRockNacional() {
    let productos = discos.catalogo;
    productos.forEach(element => {

        if (element.genero == "ROCK NACIONAL") {

            let elementCard = '<div class="card  tarjeta-Listados" style="width: 15rem;  border:5px solid gold;">';
            elementCard += '<a href="detalleProductos.html?prodId=' + element.id + '">';
            elementCard += '<img src="' + element.tapa + '" class="card-img-top" alt="...">';
            elementCard += '<div class="card-body">';
            elementCard += '<h5 class="card-text">' + element.titulo + ' </h5>';
            elementCard += '<h4 class="card-title">' + element.artista + '</h4>';
            elementCard += '<p>' + element.precio + '</p>';
            elementCard += '</div></a></div>';

            let gallery = document.getElementById('RockNacional');
            $('#RockNacional').append(elementCard);
        }
        console.log(element);
    });
}

function mostrarRockNacional() {
    var x = document.getElementById("mostrarOcultarRockNacional");
    if (x.style.display != "none") {
        x.style.display = "none";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBlues();
        ocultarBandaSonora();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarTango();
        ocultarPunkyHardcore();
    } else {
        x.style.display = "block";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBlues();
        ocultarBandaSonora();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarTango();
        ocultarPunkyHardcore();
    }
}


function ocultarTango() {
    var TangoNone = document.getElementById("mostrarOcultarTango");
    TangoNone.style.display = "none";

}
ocultarTango();

function setCategoriaTango() {
    let productos = discos.catalogo;
    productos.forEach(element => {

        if (element.genero == "TANGO") {

            let elementCard = '<div class="card  tarjeta-Listados" style="width: 15rem;  border:5px solid gold;">';
            elementCard += '<a href="detalleProductos.html?prodId=' + element.id + '">';
            elementCard += '<img src="' + element.tapa + '" class="card-img-top" alt="...">';
            elementCard += '<div class="card-body">';
            elementCard += '<h5 class="card-text">' + element.titulo + ' </h5>';
            elementCard += '<h4 class="card-title">' + element.artista + '</h4>';
            elementCard += '<p>' + element.precio + '</p>';
            elementCard += '</div></a></div>';

            let gallery = document.getElementById('Tango');
            $('#Tango').append(elementCard);
        }
        console.log(element);
    });
}

function mostrarTango() {
    var x = document.getElementById("mostrarOcultarTango");
    if (x.style.display != "none") {
        x.style.display = "none";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBlues();
        ocultarBandaSonora();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarPunkyHardcore();
    } else {
        x.style.display = "block";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBlues();
        ocultarBandaSonora();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarPunkyHardcore();
    }
}

function ocultarPunkyHardcore() {
    var PunkyHardcoreNone = document.getElementById("mostrarOcultarPunkyHardcore");
    PunkyHardcoreNone.style.display = "none";

}
ocultarPunkyHardcore();

function setCategoriaPunkyHardcore() {
    let productos = discos.catalogo;
    productos.forEach(element => {
        if (element.genero == "PUNK" || element.genero == "HARDCORE" || element.genero == "Punk & Hardcore") {


            let elementCard = '<div class="card  tarjeta-Listados" style="width: 15rem;  border:5px solid gold;">';
            elementCard += '<a href="detalleProductos.html?prodId=' + element.id + '">';
            elementCard += '<img src="' + element.tapa + '" class="card-img-top" alt="...">';
            elementCard += '<div class="card-body">';
            elementCard += '<h5 class="card-text">' + element.titulo + ' </h5>';
            elementCard += '<h4 class="card-title">' + element.artista + '</h4>';
            elementCard += '<p>' + element.precio + '</p>';
            elementCard += '</div></a></div>';

            let gallery = document.getElementById('PunkyHardcore');
            $('#PunkyHardcore').append(elementCard);
        }
        console.log(element);
    });
}

function mostrarPunkyHardcore() {
    var x = document.getElementById("mostrarOcultarPunkyHardcore");
    if (x.style.display != "none") {
        x.style.display = "none";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBandaSonora();
        ocultarBlues();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
    } else {
        x.style.display = "block";
        ocultarDestacados();
        ocultarSetBox();
        ocultarBandaSonora();
        ocultarBlues();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
    }
}



function ocultarSetBox() {
    var SetBoxNone = document.getElementById("mostrarOcultarSetBox");
    SetBoxNone.style.display = "none";

}
ocultarSetBox();

function setCategoriaSetBox() {
    let productos = discos.catalogo;
    productos.forEach(element => {
        if (element.etiqueta == "BoxSet") {

            let elementCard = '<div class="card  tarjeta-Listados" style="width: 15rem;  border:5px solid gold;">';
            elementCard += '<a href="detalleProductos.html?prodId=' + element.id + '">';
            elementCard += '<img src="' + element.tapa + '" class="card-img-top" alt="...">';
            elementCard += '<div class="card-body">';
            elementCard += '<h5 class="card-text">' + element.titulo + ' </h5>';
            elementCard += '<h4 class="card-title">' + element.artista + '</h4>';
            elementCard += '<p>' + element.precio + '</p>';
            elementCard += '</div></a></div>';

            let gallery = document.getElementById('SetBox');
            $('#SetBox').append(elementCard);
        }
        console.log(element);
    });
}

function mostrarSetBox() {
    var x = document.getElementById("mostrarOcultarSetBox");
    if (x.style.display != "none") {
        x.style.display = "none";
        ocultarDestacados();
        ocultarBandaSonora();
        ocultarBlues();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
    } else {
        x.style.display = "block";
        ocultarDestacados();
        ocultarBandaSonora();
        ocultarBlues();
        ocultarFunkySoul();
        ocultarJazz();
        ocultarMetal();
        ocultarMusicWorld();
        ocultarRapyHipHop();
        ocultarReggaeySka();
        ocultarRockyPop();
        ocultarRockNacional();
        ocultarTango();
    }
}