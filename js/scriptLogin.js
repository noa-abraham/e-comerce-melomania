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
                alert("error página en mantenimiento ");
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
                $('#login_form').submit();
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