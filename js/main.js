//Cargando las librerias Http... requets con Jquey

function getData() {
    let url = "ajax/api.json";
    $.getJSON(url, function(data) { //procesa el data y devuelve la info que sigue
                setDataJson(data);

                .done(function() { //validaciones para ver si se cargo
                    console.log("second success";)
                })

                .fail(function() {
                    console.log(" error");
                })
            }

            function setDataJson(data) {
                var items = [];
                $.each(data, fuction(key, val) {
                    items.push("<li id ='" + key + "'>" + val + "</li>");
                });

                $("<ul/", {
                    "class": "my-new-lits",
                    html: items.join("")
                }).appendTo("body");
            }