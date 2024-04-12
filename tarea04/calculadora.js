// Función de suma
function suma(a, b) {
    return a + b;
}

// Función de resta
function resta(a, b) {
    return a - b;
}

// Función de multiplicacion
function multiplicacion(a, b) {
    return a * b;
}

// Función de division
function division(a, b) {
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return a / b;
}

//Exportación de funciones
module.exports = { suma, resta, multiplicacion, division };
