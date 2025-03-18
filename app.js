// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {

  const nombreAmigo = document.getElementById("nombreAmigo").value;


  if (nombreAmigo.trim() !== "") {

    amigos.push(nombreAmigo);


    actualizarListaAmigos();


    document.getElementById("nombreAmigo").value = "";
  } else {
    alert("Por favor, ingresa el nombre de un amigo.");
    }
}

if (nombreAmigo ){

}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; 


  amigos.forEach((amigo) => {
    const elementoLista = document.createElement("li");
    elementoLista.textContent = amigo;
    listaAmigos.appendChild(elementoLista);
  });
}

// Función para realizar el sorteo aleatorio
function realizarSorteo() {

  if (amigos.length > 0) {

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);


    const amigoSeleccionado = amigos[indiceAleatorio];


    document.getElementById("amigoSeleccionado").textContent = "El amigo secreto es: " + amigoSeleccionado;
  } else {
    alert("Agrega al menos un amigo a la lista.");
  }
}