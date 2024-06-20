alert("Inicia el juego");

while (true) {
    alert("Elige tu ataque");

    let player;
    while (true) {
        player = prompt("Escribe: 0 para piedra, 1 para papel, 2 para tijera");
        if (player == 0 || player == 1 || player == 2) {
            break;
        } else {
            alert("Opcion invalida. Por favor, escribe 0, 1 o 2.");
        }
    }

    if (player == 0) {
        alert("Elegiste piedra");
    } else if (player == 1) {
        alert("Elegiste papel");
    } else if (player == 2) {
        alert("Elegiste tijera");
    }

    // Ataque aleatorio del enemigo 
    let enemy = Math.round(Math.random() * 2);

    if (enemy == 0) {
        alert("El enemigo eligió piedra");
    } else if (enemy == 1) {
        alert("El enemigo eligió papel");
    } else if (enemy == 2) {
        alert("El enemigo eligió tijera");
    }

    // Resultado
    if (player == enemy) {
        alert("Empate :O");
    } else if (player == 0 && enemy == 2) {
        alert("Ganaste :)");
    } else if (player == 1 && enemy == 0) {
        alert("Ganaste :)");
    } else if (player == 2 && enemy == 1) {
        alert("Ganaste :)");
    } else {
        alert("Perdiste :(");
    }

    let jugarDenuevo = prompt("¿Quieres jugar otra vez? (si o no)");
    if (jugarDenuevo.toLowerCase() !== "si" && jugarDenuevo.toLowerCase() !== "si") {
        alert("Gracias por jugar. ¡Hasta la proxima!");
        break; // Salir del bucle si el usuario no quiere jugar otra vez
    }
}
