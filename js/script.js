//let oferta = document.getElementById("oferta");

const datos = [
  { curso: "Matemática", hora: "8 horas", area: "Ciencias" },
  { curso: "Comunicación", hora: "5 horas", area: "Letras" },
  { curso: "Ciencias Naturales", hora: "4 horas", area: "Ciencias" },
  { curso: "Historia y Geografia", hora: "4 horas", area: "Letras" },
  { curso: "Inglés", hora: "4 horas", area: "Idiomas" },
  { curso: "Educación Fisica", hora: "2 horas", area: "Deportes" },
  { curso: "Arte y Cultura", hora: "2 horas", area: "Arte" },
  { curso: "Computación", hora: "2 horas", area: "Tecnología" },
];

let agregarDato = (array) => {
  const container = document.getElementById("tabla");

  array.forEach(element => {
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

// oferta.addEventListener("click", () => {
//   document.getElementById("oferta").innerHTML = "Cambiado";
//   agregarDato(datos);
// });

window.addEventListener("load", () => {
  //document.getElementById("oferta").innerHTML = "Pagina cargada";
  agregarDato(datos);
});
