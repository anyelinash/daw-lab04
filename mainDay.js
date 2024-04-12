const calcularDiasFalt = require('./moduloDay');

// Definir la fecha objetivo
const targetDate = new Date('2024-04-15');

// Calcular los días faltantes para la fecha objetivo
const diasFalt = calcularDiasFalt(targetDate);

console.log('Días faltantes para', targetDate.toLocaleDateString(), ':', diasFalt);
