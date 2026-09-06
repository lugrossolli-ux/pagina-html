function validarRegistro() {
  const correo = document.getElementById("correo").value;
  const contrasena = document.getElementById("contrasena").value;

  if (correo === "") {
    alert("Debes escribir tu correo.");
    return false;
  }

  if (contrasena.length < 4 || contrasena.length > 10) {
    alert("La contraseña debe tener entre 4 y 10 caracteres.");
    return false;
  }

  alert("Registro válido. Los datos son ficticios.");
  return false;
}
