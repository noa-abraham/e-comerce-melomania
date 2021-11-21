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
}

function setTablaDestacados() {

}