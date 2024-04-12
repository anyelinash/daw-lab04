const http = require('http');
const url = require('url');
const fs = require('fs');
const calculadora = require('./calculadora');
const procesadorTexto = require('./procesadorTexto');

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname === '/calculadora') {
        const query = reqUrl.query;
        const { operacion, num1, num2 } = query;

        let result;
        try {
            switch (operacion) {
                case 'suma':
                    result = calculadora.suma(parseInt(num1), parseInt(num2));
                    break;
                case 'resta':
                    result = calculadora.resta(parseInt(num1), parseInt(num2));
                    break;
                case 'multiplicacion':
                    result = calculadora.multiplicacion(parseInt(num1), parseInt(num2));
                    break;
                case 'division':
                    result = calculadora.division(parseInt(num1), parseInt(num2));
                    break;
                default:
                    throw new Error('Operación no válida');
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`<h1>Resultado: ${result}</h1>`);
        } catch (error) {
            res.writeHead(400, {'Content-Type': 'text/html'});
            res.end(`<h1>Error: ${error.message}</h1>`);
        }
    } else if (reqUrl.pathname === '/procesadorTexto') {
        const query = reqUrl.query;
        const { text, accion } = query;

        let result;
        try {
            switch (accion) {
                case 'dividirPalabra':
                    result = procesadorTexto.divPalabra(text).join(', ');
                    break;
                case 'extraerCadena':
                    result = procesadorTexto.extraerCadena(text, 0, 5);
                    break;
                case 'eliminarEspacios':
                    result = procesadorTexto.eliminarEspacios(text);
                    break;
                case 'capitalizar':
                    result = procesadorTexto.capitalizar(text);
                    break;
                case 'minusculas':
                    result = procesadorTexto.minusculas(text);
                    break;
                case 'mayusculas':
                    result = procesadorTexto.mayusculas(text);
                    break;
                case 'contarCaracteres':
                    result = procesadorTexto.contarCaracteres(text);
                    break;
                default:
                    throw new Error('Acción no válida');
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`<h1>Resultado: ${result}</h1>`);
        } catch (error) {
            res.writeHead(400, {'Content-Type': 'text/html'});
            res.end(`<h1>Error: ${error.message}</h1>`);
        }
    } else {
        fs.readFile('./404.html', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.end('<h1>Error interno del servidor</h1>');
            } else {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
