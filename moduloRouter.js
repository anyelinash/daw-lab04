const fs = require('fs');

function routeHandler(url) {
    let filePath;
    switch (url) {
        case '/inicio':
            filePath = './inicio.html';
            break;
        case '/galeria':
            filePath = './fotos.html';
            break;
    }
    // Leer el archivo correspondiente y devolver su contenido
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        return content;
    } catch (error) {
        console.error('Error al leer el archivo:', error);
        return 'Error al cargar la página.';
    }
}
module.exports = routeHandler;