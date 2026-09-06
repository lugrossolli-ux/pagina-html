function validarEvento() {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const evento = document.getElementById("evento").value;

  if (nombre === "" || correo === "" || evento === "") {
    alert("Debes completar todos los campos.");
    return false;
  }

  alert("Evento registrado en el prototipo.");
  return false;
}
