async function sha256(message) {
    const msgBuffer = new TextEnconder('uft-8').encode(message);

    const hashBuffer = await crypto.subtle.digest('SHA-256, msgBuffer');

    const hashArray = Array.form(new Uint8Array(hashBuffer));

    const hashHex = hashArray.map(b('00 + b.toString (16).slice (-2)')).join('');
    console.log(hashHex);
    return hashHex;

}

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

                });

            })
            .fail(function() {
                alert('error');
            })
    }
}

function checkUser(data, usuario, contraeña) {

    $.each(data.usuario, function(key, val) {

        val = JSON.stringify(val);
        val = JSON.parse(val);

        if (usuario === val.usuario) {

            console.log('Pass ' + contraseña);

            console.log('Pass json ' + val.contraseña);

            if (contraseña == val.contraseña) {
                alert("El usuario existe");
            } else {
                alert("La contraseña no existe")
            }

        } else {
            alert('El usuario no existe')
        }
    })

}