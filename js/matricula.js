let nombre = document.getElementById("nombre");
let documento = document.getElementById("documento");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let grado = document.getElementById("grado");
let sede = document.getElementById("sede");

let formulario = document.getElementById("formulario-matricula");
let matricuale = document.getElementById("matriculate");

const myModal = document.getElementById("modal");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  formulario.classList.add("was-validated");

  if (!formulario.checkValidity()) {
    evento.stopPropagation();
    return;
  }

  formulario.reset();
  clearModal();
  formulario.classList.remove("was-validated");
});

let n = "";
let d = "";
let e = "";
let t = "";
let g = "";
let s = "";

function validarCampos() {
  return (
    isNotEmptyString(n) &&
    isNotEmptyString(d) &&
    isNotEmptyString(e) &&
    isNotEmptyString(t) &&
    isNotEmptyString(g) &&
    isNotEmptyString(s)
  );
}

nombre.addEventListener("change", (event) => {
  n = event.target.value;
});

documento.addEventListener("change", (event) => {
  d = event.target.value;
});

email.addEventListener("change", (event) => {
  e = event.target.value;
});

telefono.addEventListener("change", (event) => {
  t = event.target.value;
});

grado.addEventListener("change", (event) => {
  g = event.target.value;
});

sede.addEventListener("change", (event) => {
  s = event.target.value;
});

formulario.addEventListener("change", (event) => {
  if (event.target.value === "INPUT" || "SELECT") {
    let valor = event.target.value;

    if (validarCampos()) {
      matricuale.setAttribute("data-bs-toggle", "modal");
      matricuale.setAttribute("data-bs-target", "#modal");
    } else {
      matricuale.removeAttribute("data-bs-toggle");
    }
  }
});

function isNotEmptyString(value) {
  return typeof value !== "string" || value.trim().length !== 0;
}

function clearModal() {
  matricuale.removeAttribute("data-bs-toggle");
  matricuale.removeAttribute("data-bs-target");
}
