// Cargar JS cuando el documento este listo
$(document).ready(function() {

    $("#btnFinalizar").click(function() {
        swal("Enviado!", "La informacion ha sido enviada al servidor!", "success");
    })

});

// Limpiar formulario de inicio
function limpiar() {
    $("#txtUsuario").prop("value","");
    $("#txtPassword").prop("value","");
}
