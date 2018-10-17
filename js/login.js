function Login() {
    var usuario = $("#username").val();
    var password = $("#password").val();


    if()
    if(usuario==="admin"  && password==="admin") {
        swal("Bienvenido Admin!", "Has iniciado sesion correctamente!", "success");
        setTimeout(function() {
            location.href="index.html";
        },2000);
    } else {
        swal("Datos Incorrectos!", "El correo electronico o la contraseña no son correctos, intentelo de nuevo!", "error");
    }
}