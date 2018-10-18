
// Comprobar datos del login y validacion
function Login() {
    var usuario = $("#username").val();
    var password = $("#password").val();

    if (usuario === "" || password === "") {

        if(usuario === "") {
            $("#user").addClass("has-error");
        } else{
            $("#user").removeClass("has-error");
        }
        if(password === "") {
            $("#pass").addClass("has-error");
        } else {
            $("#pass").removeClass("has-error");
        }
    } else {
        $("#user").removeClass("has-error");
        $("#pass").removeClass("has-error");
        if (usuario === "admin" && password === "admin") {
            swal("Bienvenido Admin!", "Has iniciado sesion correctamente!", "success");
            setTimeout(function () {
                location.href = "index.html";
            }, 2000);
        } else {
            swal("Datos Incorrectos!", "El correo electronico o la contraseña no son correctos, intentelo de nuevo!", "error");
        }

    }

}