let selectedIndex = 0;

const primaria = [
  { curso: "Matemática", hora: "8 horas", area: "Ciencias" },
  { curso: "Comunicación", hora: "5 horas", area: "Letras" },
  { curso: "Inglés", hora: "4 horas", area: "Idiomas" },
  { curso: "Educación Fisica", hora: "2 horas", area: "Deportes" },
  { curso: "Arte y Cultura", hora: "2 horas", area: "Arte" },
  { curso: "Computación", hora: "2 horas", area: "Tecnología" },
];

const secundaria1 = [
  { curso: "Matemática", hora: "6 horas", area: "Ciencias" },
  { curso: "Comunicación", hora: "5 horas", area: "Letras" },
  { curso: "Ciencias Naturales", hora: "4 horas", area: "Ciencias" },
  { curso: "Historia y Geografia", hora: "4 horas", area: "Letras" },
  { curso: "Inglés", hora: "4 horas", area: "Idiomas" },
  { curso: "Educación Fisica", hora: "2 horas", area: "Deportes" },
  { curso: "Arte y Cultura", hora: "2 horas", area: "Arte" },
  { curso: "Computación", hora: "2 horas", area: "Tecnología" },
];

const secundaria2 = [
  { curso: "Matemática", hora: "8 horas", area: "Ciencias" },
  { curso: "Comunicación", hora: "5 horas", area: "Letras" },
  { curso: "Ciencias Naturales", hora: "5 horas", area: "Ciencias" },
  { curso: "Historia y Geografia", hora: "5 horas", area: "Letras" },
  { curso: "Inglés", hora: "4 horas", area: "Idiomas" },
  { curso: "Educación Fisica", hora: "4 horas", area: "Deportes" },
  { curso: "Arte y Cultura", hora: "3 horas", area: "Arte" },
  { curso: "Computación", hora: "5 horas", area: "Tecnología" },
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

    const curso = document.createElement("td");
    curso.textContent = element.curso;
    nuevaFila.appendChild(curso);

    const hora = document.createElement("td");
    hora.textContent = element.hora;
    nuevaFila.appendChild(hora);

    const area = document.createElement("td");
    area.textContent = element.hora;
    nuevaFila.appendChild(area);

    container.appendChild(nuevaFila);
  });
};

const container = document.getElementById("option-oferta");

container.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    let id = event.target.id;    

    container
      .querySelectorAll(".nav-link")
      .forEach((b) => b.classList.remove("active"));
    event.target.classList.add("active");

    agregarDatos(lista[id].curricula);
  }
});

let agregarLista = (array) => {
  array.forEach((item, index) => {
    const option = document.createElement("li");
    option.className = "nav-item";
    const text = document.createElement("a");
    text.className = "nav-link";
    text.href = "#";
    text.textContent = item.grado;
    text.id = index;

    if (selectedIndex == index) {
      text.classList.toggle("active");
    }

    option.appendChild(text);

    container.appendChild(option);
  });
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
