function checkUserLoguin() {
    let usuario = $('#usuario').val();
    let contraseña = $('#contraseña').val();

    if (usuario == '' || contraseña == '') {
        alert('Debe ingresar Usuario y/o contraseña');
    } else {
        let url = "credenciales.json";
        $.getJSON(url, function(data) {
                sha256(contraseña).then(function(respuestaHash) {
                    checkUser(data, usuario, respuestaHash);
                    console.log('Resultado: ')

                });

            })
            .fail(function() {
                alert('error');
            })
    }
}

function checkUser(data, usuario, contraeña) {
    var estadoUsuario = false;

    $.each(data.usuario, function(key, val) {

        val = JSON.stringify(val);
        val = JSON.parse(val);

        if (usuario === val.usuario) {
            estadoUsuario = true;

            console.log('Pass ' + contraseña);
            console.log('Pass json ' + val.contraseña);

            if (contraseña == val.contraseña) {
                console.log("Contraseña correcta");
                $('#idUsuario').val(idUsuario);
                $('#login_form').submit();
                return false;

            } else {
                alert("contraseña incorrecta");
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