function getCurrentTime() {
    return new Date();
}

function formatTime(time, format) {
    switch (format) {
        case 'full':
            return time.toLocaleString(); // Formato completo
        case 'hour':
            return time.getHours() + ':' + time.getMinutes(); // Solo hora y minutos
        case 'unix':
            return time.getTime(); // Formato UNIX timestamp
        default:
            return time.toLocaleString();
    }
}

module.exports = { getCurrentTime, formatTime };
