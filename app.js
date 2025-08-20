let amigos = [];

// Agregar amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);
  input.value = ""; // limpiar input
  mostrarLista();
}

// Mostrar lista de amigos en pantalla
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpiar antes de actualizar

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Sortear un amigo al azar
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  document.getElementById("resultado").innerHTML = 
    "🎉 El amigo secreto es: <strong>" + amigoSorteado + "</strong> 🎉";

  // Vaciar lista y array después del sorteo
  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
}

// Reiniciar el juego manualmente
function reiniciarJuego() {
  amigos = []; // vaciar array
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}
