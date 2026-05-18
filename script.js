$(document).ready(function () {

    $('#btnsimpan').click(function () {

        let nama = $('#inputNama').val();
        let email = $('#inputEmail').val();
        let nim = $('#inputNIM').val();

        $('#result').append(`
            <li class="nama">${nama}</li>
            <li class="email">${email}</li>
            <li class="nim">${nim}</li>
        `);

    });

});