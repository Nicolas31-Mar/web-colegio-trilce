const formularioContacto = document.getElementById("formulario-contacto");
const mensajeFormulario = document.getElementById("mensaje-formulario");

formularioContacto.addEventListener("submit", (evento) => {
  evento.preventDefault();
  formularioContacto.classList.add("was-validated");

  if (!formularioContacto.checkValidity()) {
    mensajeFormulario.innerHTML = "";
    return;
  }

  mensajeFormulario.innerHTML = `
    <div class="alert alert-success" role="alert">
      Mensaje enviado correctamente. Te responderemos pronto.
    </div>
  `;

  formularioContacto.reset();
  formularioContacto.classList.remove("was-validated");
});
