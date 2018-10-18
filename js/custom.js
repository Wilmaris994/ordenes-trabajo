// Cargar JS cuando el documento este listo
$(document).ready(function() {


    // Mensaje de confirmacion al enviar el formulario
    $("#btnFinalizar").click(function() {
        swal("¡Enviado!", "La informacion ha sido enviada al servidor!", "success");
    })

    // Mensaje al cerrar sesion
    $("#logout").click(function() {
        swal("Sesion terminada","En unos instantes seras llevado a la pagina principal.")
        setTimeout(function(){
            location.href = "index.html";
        }, 3000)
    })


    // Fecha para mostrar en el DatePicker
    var fecha = new Date();
    var fechaActual = fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear();

    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4',
        value: fechaActual,
        format: 'dd/mm/yyyy'
    });

    $('#datepicker2').datepicker({
        uiLibrary: 'bootstrap4',
        value: fechaActual,
        format: 'dd/mm/yyyy'
    });

});

// Limpiar formulario de inicio
function limpiar() {
    $("#txtUsuario").prop("value","");
    $("#txtPassword").prop("value","");
}
