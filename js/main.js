function getData() {
    let url = "ajax/api.json";
    $.getJSON(url, function(data) {
            var items = [];
            $.each(data, fuction(key, val) {
                items.push("<li id ='" + key + "'>" + val + "</li>");

            });

        }

    }