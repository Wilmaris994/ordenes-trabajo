
// Comprobar datos del login y validacion
function Login() {
    var usuario = $("#username").val();
    var password = $("#password").val();

    // Validamos campos vacios
    if (usuario === "" || password === "") {

        if (usuario === "") {
            $("#user").addClass("has-error");
        } else {
            $("#user").removeClass("has-error");
        }
        if (password === "") {
            $("#pass").addClass("has-error");
        } else {
            $("#pass").removeClass("has-error");
        }
        $('#mensaje').text("Debes completar todos los campos").css("color", "red");
    } else {
        $("#user").removeClass("has-error");
        $("#pass").removeClass("has-error");
        $('#mensaje').text("");
        if (usuario.toLowerCase() === "admin" && password === "admin") {
            swal("Bienvenido Admin!", "Has iniciado sesion correctamente!", "success");
            setTimeout(function () {
                location.href = "inicio.html";
            }, 2000);
        } else {
            swal("Datos Incorrectos!", "El usuario o la contraseña no son correctos, intentelo de nuevo!", "error");
        }

    }

}