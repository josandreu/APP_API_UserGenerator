// 1 - variables


// 2 - funciones

// https://randomuser.me/
const llamarAPI = () => {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (data) {
            console.log(data);
        }
    });
};


// 3 - eventos

$(selector).click(function (e) {
    e.preventDefault();

});

