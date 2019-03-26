// 1 - variables
const boton = $('#boton');
const contenido = $('#contenido');
const numero = $('#numero');
const boton2 = $('#boton2');

// 2 - funciones

// https://randomuser.me/
const llamarAPI = (miUrl) => {
    // e.preventDefault();
    $.ajax({
        url: miUrl,
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

            // ahora iteramos sobre el array de resultados, el nº de elementos es dinámico y depende del valor del input
            let miContenido2 = '';
            for (let i = 0; i < data.results.length; i++) {
                miContenido2 +=
                    /* html */
                    `<img class="rounded-circle" src="${data.results[i].picture.large}">
                <p class="mt-2">
                ${data.results[i].name.title}.
                ${data.results[i].name.first}
                ${data.results[i].name.last}
                </p>
            `;
            }



            // insertamos el contenido de la variable dentro del div
            contenido.fadeOut("slow", function () {
                contenido
                    .html(miContenido)
                    .fadeIn("slow");
            });

            $('#contenido2').fadeOut("slow", function () {
                $('#contenido2').html(miContenido2).fadeIn("slow");
            });

        },
        error: function () {
            console.log("Ha habido un error en la consulta Ajax...");
        }
    });
};

const prepararUrl = (e) => {
    e.preventDefault();
    let miUrl;
    // como los dos botones apuntan a esta funcion, hay que saber cuál es el que ha pulsado
    // atributo TARGET dentro del DOM
    if (e.target.id === 'boton') {
        miUrl = 'https://randomuser.me/api/?nat=es&inc=gender,name,nat,picture';
    }

    if (e.target.id === 'boton2') {
        // esta variable la cogemos del texto del input que indica el nº de usuarios
        let n = numero.val();
        // la pasamos por la url, para indicar el nº de resultados
        miUrl = 'https://randomuser.me/api/?nat=es&inc=gender,name,nat,picture&results=' + n;
    }
    llamarAPI(miUrl);

}


// 3 - eventos

/*
$('#boton').click(function (e) {
    e.preventDefault();
    llamarAPI();
});
*/

// equivalente a lo de arriba
boton.on('click', prepararUrl);
boton2.on('click', prepararUrl);