let selectedIndex = 0;

const primaria = [
  {
    curso: "Matemática",
    hora: "8 horas",
    area: "Ciencias",
    tipo: "Obligatorio",
  },
  {
    curso: "Comunicación",
    hora: "5 horas",
    area: "Letras",
    tipo: "Obligatorio",
  },
  { curso: "Inglés", hora: "4 horas", area: "Idiomas", tipo: "Obligatorio" },
  {
    curso: "Educación Fisica",
    hora: "2 horas",
    area: "Deportes",
    tipo: "Regular",
  },
  {
    curso: "Arte y Cultura",
    hora: "2 horas",
    area: "Arte",
    tipo: "Regular",
  },
  {
    curso: "Computación",
    hora: "2 horas",
    area: "Tecnología",
    tipo: "Taller",
  },
];

const secundaria1 = [
  {
    curso: "Matemática",
    hora: "6 horas",
    area: "Ciencias",
    tipo: "Obligatorio",
  },
  {
    curso: "Comunicación",
    hora: "5 horas",
    area: "Letras",
    tipo: "Obligatorio",
  },
  {
    curso: "Ciencias Naturales",
    hora: "4 horas",
    area: "Ciencias",
    tipo: "Obligatorio",
  },
  {
    curso: "Historia y Geografia",
    hora: "4 horas",
    area: "Letras",
    tipo: "Obligatorio",
  },
  { curso: "Inglés", hora: "4 horas", area: "Idiomas", tipo: "Obligatorio" },
  {
    curso: "Educación Fisica",
    hora: "2 horas",
    area: "Deportes",
    tipo: "Regular",
  },
  {
    curso: "Arte y Cultura",
    hora: "2 horas",
    area: "Arte",
    tipo: "Regular",
  },
  {
    curso: "Computación",
    hora: "2 horas",
    area: "Tecnología",
    tipo: "Taller",
  },
];

const secundaria2 = [
  {
    curso: "Matemática",
    hora: "8 horas",
    area: "Ciencias",
    tipo: "Obligatorio",
  },
  {
    curso: "Comunicación",
    hora: "5 horas",
    area: "Letras",
    tipo: "Obligatorio",
  },
  {
    curso: "Ciencias Naturales",
    hora: "5 horas",
    area: "Ciencias",
    tipo: "Obligatorio",
  },
  {
    curso: "Historia y Geografia",
    hora: "5 horas",
    area: "Letras",
    tipo: "Obligatorio",
  },
  { curso: "Inglés", hora: "4 horas", area: "Idiomas", tipo: "Obligatorio" },
  {
    curso: "Educación Fisica",
    hora: "4 horas",
    area: "Deportes",
    tipo: "Regular",
  },
  {
    curso: "Arte y Cultura",
    hora: "3 horas",
    area: "Arte",
    tipo: "Regular",
  },
  {
    curso: "Computación",
    hora: "4 horas",
    area: "Tecnología",
    tipo: "Taller",
  },
];

//Agregar mas curricula escolar secundaria 3, 4 y 5

const lista = [
  { grado: "Primaria", curricula: primaria },
  { grado: "1° Secundaria", curricula: secundaria1 },
  { grado: "2° Secundaria", curricula: secundaria2 },
  { grado: "3° Secundaria", curricula: null },
  { grado: "4° Secundaria", curricula: null },
  { grado: "5° Secundaria", curricula: null },
];

let agregarDatos = (array) => {
  const container = document.getElementById("tabla");
  container.innerHTML = "";

  array.forEach((element) => {
    const nuevaFila = document.createElement("tr");
    nuevaFila.classList = "tabla-font-size";

    const curso = document.createElement("td");
    curso.textContent = element.curso;
    nuevaFila.appendChild(curso);

    const hora = document.createElement("td");
    hora.textContent = element.hora;
    nuevaFila.appendChild(hora);

    const area = document.createElement("td");
    area.textContent = element.area;
    nuevaFila.appendChild(area);

    const tipo = document.createElement("td");
    const tipoStyle = document.createElement("span");
    tipo.className = "text-center"
    tipoStyle.textContent = element.tipo;
    tipoStyle.classList = selecionTipo(element.tipo);
    tipo.appendChild(tipoStyle);
    nuevaFila.appendChild(tipo);

    container.appendChild(nuevaFila);
  });
};

const container = document.getElementById("option-oferta");

container.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    let id = event.target.id;

    container
      .querySelectorAll(".nav-link")
      .forEach((b) => b.classList.remove("opcion-activa"));
    event.target.classList.add("opcion-activa");

    agregarDatos(lista[id].curricula);
  }
});

let agregarLista = (array) => {
  array.forEach((item, index) => {
    const option = document.createElement("li");
    option.className = "nav-item";
    const text = document.createElement("a");
    text.className = "nav-link";
    text.textContent = item.grado;
    text.id = index;

    if (selectedIndex == index) {
      text.classList.toggle("opcion-activa");
    }

    option.appendChild(text);

    container.appendChild(option);
  });
};

let selecionTipo = (tipo) => {
  let tipoClass;
  switch (tipo) {
    case "Obligatorio":
      tipoClass = "tipo-obligatorio";
      break;

    case "Regular":
      tipoClass = "tipo-regular";
      break;

    case "Taller":
      tipoClass = "tipo-taller";
      break;

    default:
      tipoClass = "none";
      break;
  }
  return tipoClass;
};

function seleccionar(id) {
  document.getElementById(id).addEventListener("click", (event) => {
    console.log(event.target.value);
  });
}

window.addEventListener("load", () => {
  agregarDatos(primaria);
  agregarLista(lista);
});
