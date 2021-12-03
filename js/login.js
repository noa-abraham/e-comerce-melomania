async function sha256(message) {

    const msgBuffer = new TextEncoder('utf-8').encode(message);

    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    console.log(hashHex);
    return hashHex;
}
sha256(vinilos);

function checkUserLogin() {
    let usuario = $('#usuario').val();
    let contraseña = $('#contraseña').val();

    if (usuario == '' || contraseña == '') {
        alert('Debe ingresar Usuario y/o contraseña');
    } else {
        let url = "credenciales.json";
        $.getJSON(url, function(data) {
                sha256(contraseña).then(function(respuestaHash) {
                    checkUser(data, usuario, respuestaHash);
                });

            })
            .fail(function() {
                alert("Página en mantenimiento");
            })
    }
}

function checkUser(data, usuario, contraseña) {
    var estadoUsuario = false;

    $.each(data.usuario, function(key, val) {

        val = JSON.stringify(val); //lo convierto a Json
        val = JSON.parse(val);

        if (usuario === val.usuario) {
            estadoUsuario = true;

            if (contraseña == val.contraseña) {
                console.log("Contraseña correcta");
                $('#idUsuario').val(idUsuario);
                $('#login_form').submit();
                return false;

            } else {
                alert("Contraseña incorrecta");
                return false;
            }
        } else {
            console.log("Usuario no coincide");
        }

    })

    if (estadoUsuario == false) {
        console.log("Usuario no registrado");
    }

}