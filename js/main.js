// 1 - variables
const boton = $('#boton');
const contenido = $('#contenido');

// 2 - funciones

// https://randomuser.me/
const llamarAPI = (e) => {
    e.preventDefault();
    $.ajax({
        url: 'https://randomuser.me/api/?nat=gb',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            console.log(data.results[0].cell);
            console.log(
                data.results[0].name.title,
                data.results[0].name.first,
                data.results[0].name.last);
            // creamos una variable e insertamos el html
            let miContenido =
                /* html */
                `<img class="card-img-top img-fluid" src="${data.results[0].picture.large}">
                <div class="card-body">
                    <h5 class="card-title text-center">
                        ${data.results[0].name.title}.
                        ${data.results[0].name.first}
                        ${data.results[0].name.last}
                    </h5>
                </div>
            `;

            let miContenido2 =
                /* html */
                `<img class="rounded-circle" src="${data.results[0].picture.large}">
                <p>
                ${data.results[0].name.title}.
                ${data.results[0].name.first}
                ${data.results[0].name.last}
                </p>
            `;

            // insertamos el contenido de la variable dentro del div
            contenido.fadeOut("slow", function () {
                contenido
                    .html(miContenido)
                    .fadeIn("slow");
            });

        },
        error: function () {
            console.log("Ha habido un error en la consulta Ajax...");
        }
    });
};


// 3 - eventos

/*
$('#boton').click(function (e) {
    e.preventDefault();
    llamarAPI();
});
*/

// equivalente a lo de arriba
boton.on('click', llamarAPI);