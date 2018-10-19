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

// Cargar datos de la Seccion 2 en la Seccion 3
function cargarDatos() {

    $("#selEquipo2").val($("#selEquipo").val());
    $("#txtHoraF2").val($("#txtHoraF").val());
    $("#txtSemana2").val($("#txtSemana").val());
    $("#datepicker2").val($("#datepicker").val());
    $("#selTagEquipo2").val($("#selTagEquipo").val());
    $("#selArea2").val($("#selArea").val());
    $("#selTipoSistema2").val($("#selTipoSistema").val());
    $("#selGrupo2").val($("#selGrupo").val());
    $("#selFrecuencia2").val($("#selFrecuencia").val());
    $("#txtHoraI2").val($("#txtHoraI").val());
    $("#txtNroOT2").val($("#txtNroOT").val());

    $("#checkDPR2").prop("checked",$("#checkDPR").prop("checked"));
    $("#checkTrabajo2").prop("checked",$("#checkTrabajo").prop("checked"));
    $("#checkAST2").prop("checked",$("#checkAST").prop("checked"));
    $("#checkDPR2").prop("checked",$("#checkDPR").prop("checked"));
    $("#checkEquipo2").prop("checked",$("#checkEquipo").prop("checked"));
}
