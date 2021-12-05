async function sha256(message) {
    const msgBuffer = new TextEncoder('utf-8').encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    console.log(hashHex);
    return hashHex;

}


function checkUserLogin() {
    let username = $('#username').val();
    let password = $('#password').val();
    if (username == '' || password == '') {
        alert('Debe ingresar el usario y la contraseña para continuar');
    } else {
        let url = "credenciales.json";
        $.getJSON(url, function(data) {
                // console.log(data);
                sha256(password).then(function(respuestaHash) {
                    checkUser(data, username, respuestaHash);

                });

            })
            .fail(function() {
                alert("Error página en mantenimiento ");
            })
    }
}

function checkUser(data, username, password) {
    var user = false;
    $.each(data.users, function(key, val) {

        val = JSON.stringify(val);
        val = JSON.parse(val);

        if (username === val.user) {
            user = true; //existe el usuario

            if (password == val.password) {
                console.log("contraseña Correcta");
                $('#userId').val(val.idUser);
                $('#loguin_form').submit();
                return false;
            } else {
                alert("contraseña incorrecta");
                return false;
            }
        } else {
            console.log("usuario no coincide");
        }
    })

    if (user == false) {
        console.log("Usuario no registrado");
    }


}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

let params = new URLSearchParams(location.search);
var id = params.get('id');