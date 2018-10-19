Dropzone.autoDiscover = false;

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

    // Codigo para simular la subida de imagenes con dropzone
    var dropzone = new Dropzone('#my-awesome-dropzone', {
        parallelUploads: 2,
        thumbnailHeight: 120,
        thumbnailWidth: 120,
        maxFilesize: 3,
        filesizeBase: 1000,
        uploadMultiple: true,
        acceptedFiles: 'image/*',
        addRemoveLinks: true,
        thumbnail: function (file, dataUrl) {
            if (file.previewElement) {
                file.previewElement.classList.remove("dz-file-preview");
                var images = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
                for (var i = 0; i < images.length; i++) {
                    var thumbnailElement = images[i];
                    thumbnailElement.alt = file.name;
                    thumbnailElement.src = dataUrl;
                }
                setTimeout(function () { file.previewElement.classList.add("dz-image-preview"); }, 1);
            }
        }

    });

    var dropzone2 = new Dropzone('#my-awesome-dropzone-2', {
        parallelUploads: 2,
        thumbnailHeight: 120,
        thumbnailWidth: 120,
        maxFilesize: 3,
        filesizeBase: 1000,
        uploadMultiple: true,
        acceptedFiles: 'image/*',
        addRemoveLinks: true,
        thumbnail: function (file, dataUrl) {
            if (file.previewElement) {
                file.previewElement.classList.remove("dz-file-preview");
                var images = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
                for (var i = 0; i < images.length; i++) {
                    var thumbnailElement = images[i];
                    thumbnailElement.alt = file.name;
                    thumbnailElement.src = dataUrl;
                }
                setTimeout(function () { file.previewElement.classList.add("dz-image-preview"); }, 1);
            }
        }

    });

    // Now fake the file upload, since GitHub does not handle file uploads
    // and returns a 404

    var minSteps = 6,
        maxSteps = 60,
        timeBetweenSteps = 100,
        bytesPerStep = 100000;

    dropzone.uploadFiles = function (files) {
        var self = this;

        for (var i = 0; i < files.length; i++) {

            var file = files[i];
            totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));

            for (var step = 0; step < totalSteps; step++) {
                var duration = timeBetweenSteps * (step + 1);
                setTimeout(function (file, totalSteps, step) {
                    return function () {
                        file.upload = {
                            progress: 100 * (step + 1) / totalSteps,
                            total: file.size,
                            bytesSent: (step + 1) * file.size / totalSteps
                        };

                        self.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent);
                        if (file.upload.progress == 100) {
                            file.status = Dropzone.SUCCESS;
                            self.emit("success", file, 'success', null);
                            self.emit("complete", file);
                            self.processQueue();
                        }
                    };
                }(file, totalSteps, step), duration);
            }
        }
    }

    dropzone2.uploadFiles = function (files) {
        var self = this;

        for (var i = 0; i < files.length; i++) {

            var file = files[i];
            totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));

            for (var step = 0; step < totalSteps; step++) {
                var duration = timeBetweenSteps * (step + 1);
                setTimeout(function (file, totalSteps, step) {
                    return function () {
                        file.upload = {
                            progress: 100 * (step + 1) / totalSteps,
                            total: file.size,
                            bytesSent: (step + 1) * file.size / totalSteps
                        };

                        self.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent);
                        if (file.upload.progress == 100) {
                            file.status = Dropzone.SUCCESS;
                            self.emit("success", file, 'success', null);
                            self.emit("complete", file);
                            self.processQueue();
                        }
                    };
                }(file, totalSteps, step), duration);
            }
        }
    }

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
