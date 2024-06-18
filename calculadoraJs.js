let numeroActual = '';
let numeroAnterior = '';
let operacion = null;


//La variable numero en la funcipn asignarNumero obtiene valor directamente de los atributos onclick de los botones en el HTML
const asignarNumero = (numero) => {

    numeroActual += numero;

    actualizarDisplay();
}


//La variable "OP" en la funcion "opereta" obtiene valor directamente de los atributos "opereta" de los botones en el HTML
function opereta(op) {
// Verifica si no hay ningún número ingresado actualmente
    if (numeroActual === '') return;
// Verifica si ya hay un numero anterior y realiza el calculo si es asi
    if (numeroAnterior !== '') {
        calculo();
    }
    operacion = op;
    numeroAnterior = numeroActual;
// Reinicia el numero actual dejandolo vacio para el siguiente ingreso    
    numeroActual = '';
}

function calculo() {
    let resultado;
    let anterior = parseFloat(numeroAnterior);
    let actual = parseFloat(numeroActual);
    switch (operacion) {
        case '+':
            resultado = anterior + actual;
            break;
        case '-':
            resultado = anterior - actual;
            break;
        case '*':
            resultado = anterior * actual;
            break;
        case '/':
            resultado = anterior / actual;
            break;
        default:
            return;
    }
    numeroActual = resultado;
    operacion = null;
    numeroAnterior = '';
    actualizarDisplay();
}

function limpiarDisplay() {
    numeroActual = '';
    numeroAnterior = '';
    operacion = null;
    actualizarDisplay();
}

function actualizarDisplay() {
    const display = document.getElementById('display');
    display.value = numeroActual;
}
