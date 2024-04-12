// Función de dividir palabra
function divPalabra(text) {
    return text.split(/\s+/);
}

// Función de extraer cadena de texto
function extraerCadena(text, start, end) {
    return text.substring(start, end);
}

// Función de eliminar espacios
function eliminarEspacios(text) {
    return text.replace(/\s+/g, '');
}

// Función de capitalizar
function capitalizar(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// Función de convertir a minúsculas
function minusculas(text) {
    return text.toLowerCase();
}

// Función de convertir a mayúsculas
function mayusculas(text) {
    return text.toUpperCase();
}

// Función de contar caracteres
function contarCaracteres(text) {
    return text.length;
}

//Exportación de funciones
module.exports = {divPalabra, extraerCadena, eliminarEspacios, capitalizar, minusculas, mayusculas, contarCaracteres};
