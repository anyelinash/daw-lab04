const http = require('http');
const moduloRouter = require('./moduloRouter');

const server = http.createServer((req, res) => {
    const url = req.url;
    const content = moduloRouter(url);
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(content);
    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
