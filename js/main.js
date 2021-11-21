console.log("Hola mundo");

const url = 'discos.json';
const request = new XMLHttpRequest();
request.open('GET', url); // setean el método, la url de api
request.responseType = 'json'; //definen el tipo de dato que les devuelve
request.send(); //envían la solicitud
var discos = '';

request.onload = fuction(); { //espera la respuesta
    console.log(request.response);
    discos = request.response; //recibe la respuesta
}