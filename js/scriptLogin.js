function checkUserLogin() {
    let username = $('#username').val();
    let password = $('#password').val();

    if (username == '' || password == '') {
        alert('Debe ingresar Usuario y/o contraseña');
    } else {
        let url = "credenciales.json";
        $.getJSON(url, function(data) {
                sha256(password).then(function(respuestaHash) {
                    checkUser(data, username, respuestaHash);
                });

            })
            .fail(function() {
                alert("Página en mantenimiento");
            })
    }
}

function checkUser(data, username, password) {
    var estadoUsuario = false;
    $.each(data.users, function(key, val) {

        val = JSON.stringify(val); //lo convierto a Json
        val = JSON.parse(val);

        if (username === val.user) {
            estadoUsuario = true;

            if (password == val.password) {
                console.log("Contraseña correcta");
                $('#userId').val(val.idUser);
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