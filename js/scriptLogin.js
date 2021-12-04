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