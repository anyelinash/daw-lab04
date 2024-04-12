function calcularDiasFalt(targetDate) {
    const currentDate = new Date();
    const unDia = 1000 * 60 * 60 * 24; // Milisegundos en un día

    // Convertir ambas fechas a formato UTC para evitar problemas con zonas horarias
    const targetUTC = Date.UTC(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());
    const currentUTC = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    const diasFalt = Math.ceil((targetUTC - currentUTC) / unDia);
    return diasFalt;
}

module.exports = calcularDiasFalt;
