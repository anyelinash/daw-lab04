// modulo Time
const timeModule = require('./moduloTime');

// Obtener la hora actual
const currentTime = timeModule.getCurrentTime();

// Formatear la hora en diferentes formatos
const fullFormat = timeModule.formatTime(currentTime, 'full');
const hourFormat = timeModule.formatTime(currentTime, 'hour');
const unixFormat = timeModule.formatTime(currentTime, 'unix');

// Impresión por consola
console.log('Hora completa:', fullFormat);
console.log('Hora y minutos:', hourFormat);
console.log('Formato UNIX:', unixFormat);
